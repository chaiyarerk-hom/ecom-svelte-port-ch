<script lang="ts">
	import './layout.css';
	import { Menu, X, Search, UserRound, ShoppingCart, Twitter, Facebook, Instagram, ArrowRight} from '@lucide/svelte';
	import "@fontsource-variable/assistant";
	import ButtonNav from '$lib/ui/ButtonNav.svelte';
	import { countCart } from "$lib/stores.js";

	let { children } = $props();
	let menuBags = ["Shop all", "Tote bags", "Shoulder bags", "Crossbody bags", "Top handle bags", "Mini bags"];
	let menuShoes = ["Shop all", "Heels", "Flats", "Sneakers", "Sandals"]

	let toggleHam = $state(false);
	function handleToggleHamburger() {
		toggleHam = !toggleHam;
	}

	let emailSub = $state("");
	let pageLang = $state("");
	let pageRegion = $state("");
</script>


<div class="flex flex-col font-assistant min-w-xs max-w-5xl mx-auto">
	<div class="bg-white mx-10 my-4 flex flex-row justify-between">
		<div>
			<nav class="flex flex-row items-center justify-between">
				<div class="flex flex-row items-center">
					<img src="/images/logo.png" alt="logo" class="h-12">
					<ButtonNav
						id = 1
						title="Bags"
						menuDropDowns={menuBags}
						 />
					<ButtonNav
						id = 2
						title="Shoes"
						menuDropDowns={menuShoes}
						 />
					<a class="flex flex-row items-center hover:text-indigo-500 ml-2" href="/lookbok">Lookbook</a>
				</div>
			</nav>
		</div>
		<div>
			<el-dropdown class="inline-block">
				<button class="inline-flex items-center justify-center px-3 py-2 hover:cursor-pointer"
					onclick={handleToggleHamburger}>
					{#if toggleHam}
						<ul class="flex flex-row items-center sm:hidden"><X /></ul>
					{:else}
						<div class="relative">
						<ul class="flex flex-row items-center sm:hidden"><Menu /></ul>
						{#if $countCart > 0}
							<div class="absolute -top-2 left-3 font-semibold flex items-center justify-center text-[10px] text-center w-5 h-5 bg-red-700 rounded-full text-white shadow-lg sm:hidden">{$countCart}</div>
						{/if}
						</div>
					{/if}
				</button>
				{#if toggleHam}
					<el-menu anchor="bottom-end" class="absolute flex flex-col gap-2 ml-1 py-1 justify-center items-center transform z-10 w-10 bg-white">
						<a href="/" class="p-1 sm:hidden"><Search /></a>
						<a href="/" class="p-1 sm:hidden"><UserRound /></a>
						<a href="/checkout" class="p-1 relative sm:hidden">
							<ShoppingCart />
							{#if $countCart > 0}
								<div class="absolute font-semibold flex items-center justify-center text-[10px] -top-2 left-1/2 text-center w-5 h-5 bg-red-700 rounded-full text-white shadow-lg">{$countCart}</div>
							{/if}
						</a>
					</el-menu>
				{/if}
			</el-dropdown>
		</div>
		<div>
			<nav class="hidden sm:flex flex-row items-center mt-1.5 gap-4 ">
				<a href="/"><Search /></a>
				<a href="/"><UserRound /></a>
				<a href="/checkout" class="relative">
					<ShoppingCart />
					{#if $countCart > 0}
						<div class="absolute font-semibold flex items-center justify-center text-[10px] -top-2 left-1/2 text-center w-5 h-5 bg-red-700 rounded-full text-white shadow-lg">{$countCart}</div>
					{/if}
				</a>
			</nav>
		</div>
	</div>
	<main class="flex flex-col min-w-xs">
		{@render children()}
	</main>
	<footer class="mx-10 mb-20">
		<hr>
		<div class="grid grid-cols-3 mb-10">
			<div class="flex flex-col">
				<h1 class="mt-20 mb-5">Quick links</h1>
				<a href="#" class="text-xs my-1">Bags</a>
				<a href="#" class="text-xs my-1">Shoes</a>
				<a href="#" class="text-xs my-1">Lookbook</a>
			</div>
			<div class="flex flex-col">
				<h1 class="mt-20 mb-5">Info</h1>
				<a href="#" class="text-xs my-1">About</a>
				<a href="#" class="text-xs my-1">Contact us</a>
				<a href="#" class="text-xs my-1">Shipping policy</a>
			</div>
			<div class="mt-20 mb-5">
				<a href="/">
					<img src="/images/logo.png" alt="logo">
				</a>
			</div>
		</div>

		<div class="flex flex-row justify-between mb-10">
			<div>
				<form action="/">
					<label for="emailSub" class="text-xs">
						Subscribe to our emails
					</label>
					<div class="flex flex-row items-center relative border border-gray-400">
						<input type="text" id="emailSub" name="emailSub" bind:value={emailSub} placeholder="Email" class="p-1 text-xs">
						<button type="submit" class="absolute right-1 hover:cursor-pointer"><ArrowRight size={12}/></button>
					</div>
				</form>
			</div>
			<div class="flex flex-row gap-1 items-center">
				<a href="#"><Twitter size={20}/></a>
				<a href="#"><Facebook size={20}/></a>
				<a href="#"><Instagram size={20}/></a>
			</div>
		</div>
		<hr class="mb-10">
		<div class="flex flex-row justify-between mb-10 text-xs">
			<div class="flex flex-row gap-2">
				<div class="flex flex-col gap-2 w-30">
					<label for="pageRegion">
						Country/region
					</label>
					<select id="pageRegion" name="pageRegion" bind:value={pageRegion} class="border border-gray-400 p-1">
						<option value="" disabled selected hidden>Choose country/region...</option>
						<option value="thb">Thailand (THB ฿)</option>
						<option value="usd">USA (USD $)</option>
						<option value="gbp">United Kingdom (GBP £)</option>
						<option value="cny">China (CNY ¥)</option>
						<option value="eur">Europe (EUR €)</option>
					</select>
				</div>
				<div class="flex flex-col gap-2 w-30">
					<label for="pageLang">
						Language
					</label>
					<select id="pageLang" name="pageLang" bind:value={pageLang} class="border border-gray-400 p-1">
						<option value="" disabled selected hidden>Choose language...</option>
						<option value="th">Thai</option>
						<option value="eng">English</option>
						<option value="ch">Chinese</option>
					</select>
				</div>
			</div>
			<div class="flex flex-row gap-1 items-center ">
				<img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" width="30">
				<img src="https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png" alt="MasterCard" width="30">
				<img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="GPay" width="40">
			</div>
		</div>
	</footer>
</div>

<style>
	.font-assistant {
		font-family: 'Assistant', sans-serif;
	}
</style>
