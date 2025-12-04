<script lang="ts">
	import { countCart } from "$lib/stores.js";
	import ProductCard from "$lib/ui/ProductCard.svelte";
    import VideoHero from "$lib/ui/VideoHero.svelte";

    let { data = $bindable() } = $props();
    
    const orderedProds = data.products.filter((product) => product.productOrder > 0);
	
	let totalOrder = $derived(
        orderedProds.reduce((sum, prod) => sum + prod.productOrder, 0)
    );

    $effect(() => {
        countCart.set(totalOrder);
    })
</script>

<div class="relative">
    <img src="https://placehold.co/1920x1080" alt="heroimage">
    <div class="flex flex-col items-center justify-center absolute bg-black opacity-50 top-1/2 left-1/2 w-1/2 h-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 class="text-2xl font-bold text-wrap text-center p-[2%] text-white font-assistant sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl">Neque porro quisquam est qui dolorem ipsum</h1>
        <h2 class="text-xs text-wrap text-center text-white font-assistant sm:text-md md:text-lg lg:text-xl xl:text-2xl">Lorem ipsum dolor sit amet.</h2>
        <button class="border border-white rounded-xl px-[5%] py-[2%] m-[2%] text-md text-wrap hover:cursor-pointer text-center text-white font-assistant sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Lorem Ipsum</button>
    </div>
</div>

<div class="mx-20 flex flex-col items-center justify-center">
    <h1 class="text-3xl text-wrap my-8">Aliquam urna libero, varius sed molestie eu.</h1>
    <h2 class="text-sm mb-10">Fusce porttitor odio sed ipsum scelerisque mattis. Duis nunc mauris, lacinia eu augue sit amet, mollis accumsan arcu.</h2>
</div>

<div class="flex flex-col items-center">
    <div class="grid grid-cols-1 gap-4 mx-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {#each data.products as product (product.id)}
            <ProductCard
                {...product}
            />
        {/each}
    </div>
</div>

<div class="mx-20 my-10 flex flex-col items-center justify-center">
    <VideoHero />
</div>

<div class="mx-20 grid grid-cols-2 gap-4 md:mx-40">
    <div class="flex flex-col">
        <img src="https://placehold.co/200x100" alt="spec1">
        <p class="text-xs text-center my-4">"Cras dictum faucibus velit. Nam consectetur tortor ut pulvinar sollicitudin. Phasellus convallis ex magna. Fusce tincidunt nibh arcu, quis bibendum dolor sagittis eu."</p>
    </div>
    <div class="flex flex-col">
        <img src="https://placehold.co/200x100" alt="spec2">
        <p class="text-xs text-center my-4">"Vivamus egestas interdum bibendum. Nam nec dui vel nunc finibus congue. Curabitur mattis accumsan risus, nec consequat nunc varius vitae. Curabitur eget venenatis lacus."</p>
    </div>
</div>