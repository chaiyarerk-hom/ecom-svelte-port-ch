<script lang="ts">
    import { page } from "$app/state"
    import * as Accordion from "$lib/components/ui/accordion/index.js";
	import { Box, Heart, Ruler, Share } from "@lucide/svelte";
    import { countCart } from "$lib/stores.js";
	import { goto } from '$app/navigation';

    let { data = $bindable() } = $props();

	const orderedProds = data.products.filter((product) => product.productOrder > 0);
	
	let totalOrder = $derived(
        orderedProds.reduce((sum, prod) => sum + prod.productOrder, 0)
    );

	$effect(() => {
        countCart.set(totalOrder);
    })

    const selectedProd = data.products.filter((product) => product.id == Number(page.params.id))[0];
    
    let count = $state(0);
    function decrement() {
        if (count > 0) {
            count--;
        }
    }
    function increment() {
        count++;
    }

    let formatter = new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    });

    function handleAdd() {
        countCart.increment(count);
        data.products.filter((product) => product.id == Number(page.params.id))[0].productOrder += count;
        count = 0;
        alert('Successfully added!');
    }
    function handleBuyNow() {
        countCart.increment(count);
        data.products.filter((product) => product.id == Number(page.params.id))[0].productOrder += count;
        count = 0;
        goto('/checkout');
    }

</script>

<div class="grid grid-cols-[7fr_3fr] gap-8 mb-20 mx-20">
    <div class="flex flex-col gap-2">
        <img src={selectedProd.productImg[0]} alt={selectedProd.productImg[0]}>
        <div class="grid grid-cols-2 gap-2">
            {#each selectedProd.productImg.slice(1) as selectedProdImg}
                <img src={selectedProdImg} alt={selectedProdImg} class="w-full object-cover">
            {/each}
        </div>
    </div>
    <div class="flex flex-col">
        <h1 class="text-xl font-semibold mb-3">{selectedProd.productName}</h1>
        <h2 class="text-sm mb-3">{formatter.format(Number(selectedProd.productPrice))} THB</h2>
        <p class="text-xs mb-2 text-gray-700">Quantity</p>
        <div class="flex flex-rows border border-gray-400 w-fit mb-3">
            <button class="text-lg w-10 h-10 hover:cursor-pointer" onclick={decrement}>-</button>
            <div class="flex flex-cols items-center justify-center w-10 h-10">{count}</div>
            <button class="text-lg w-10 h-10 hover:cursor-pointer" onclick={increment}>+</button>
        </div>
        <button onclick={handleAdd} class="flex flex-rows text-sm justify-center border border-black-400 p-2 mb-2 hover:cursor-pointer hover:outline-2">Add to cart</button>
        <button onclick={handleBuyNow} class="flex flex-rows text-sm justify-center border border-black-400 bg-black text-white p-2 mb-3 hover:cursor-pointer hover:outline-2">Buy it now</button>
        <p class="text-xs mb-10">Nullam tempor ipsum vitae ultrices egestas. Phasellus pellentesque pharetra turpis eu sodales. Aenean ut quam ac erat condimentum consectetur.</p>
        <hr>
        <Accordion.Root type="single" value="">
            <Accordion.Item value="item-1">
                <Accordion.Trigger class="text-xs"><Box size={15}/>Materials</Accordion.Trigger>
                <Accordion.Content class="text-xs">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a scelerisque purus.
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2">
                <Accordion.Trigger class="text-xs"><Ruler size={15}/>Dimensions</Accordion.Trigger>
                <Accordion.Content class="text-xs">
                    Fusce viverra felis a tellus tincidunt cursus. Ut ornare, odio eget laoreet dignissim, nulla risus eleifend augue, id semper felis enim et ipsum.
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-3">
                <Accordion.Trigger class="text-xs"><Heart size={15}/>Care Instructions</Accordion.Trigger>
                <Accordion.Content class="text-xs">
                    Maecenas sed aliquam sem, eu ultrices erat. Etiam dui magna, consequat id fringilla quis, consequat nec urna.
                </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
        <hr class="mb-4">
        <a href="#" class="flex flex-rows gap-2 text-xs">
            <Share size={15}/>Share
        </a>
    </div>
</div>