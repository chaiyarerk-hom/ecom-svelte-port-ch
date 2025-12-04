<script lang="ts">
	import { ChevronDown, X } from "@lucide/svelte";
	import { onMount } from "svelte";

	let openId = $state(0);
	let { id, title, menuDropDowns } = $props();

	function handleToggleNav(id: number) {
		openId = openId === id? 0 : id;
	};

	let wrapper: HTMLElement | null = null;

	onMount(() => {
		function handleClickOutSide(e: Event) {
			if (!wrapper?.contains(e.target as Node)) {
				openId = 0;
			}
		}
		document.addEventListener("click", handleClickOutSide);
		return (() => document.removeEventListener("click", handleClickOutSide));
		});

</script>

<el-dropdown bind:this={wrapper} class="inline-block">
	<button class="inline-flex w-full items-center justify-center px-3 py-2 hover:cursor-pointer"
		onclick ={() => {handleToggleNav(id)}}>
		{title}

		{#if openId === id}
			<X size="20" class="pointer-events-none"/>
		{:else}
			<ChevronDown size="20" class="pointer-events-none"/>
		{/if}
	</button>

	{#if openId === id}
		<el-menu anchor="bottom-end" class="absolute transform -translate-x-21 translate-y-12 z-10 bg-white w-56 shadow-lg">
			{#each menuDropDowns as menuDropDown}
				<a href="/" class="block px-4 py-2 focus:outline-hidden">{menuDropDown}</a>
			{/each} 
		</el-menu>
	{/if}
</el-dropdown>