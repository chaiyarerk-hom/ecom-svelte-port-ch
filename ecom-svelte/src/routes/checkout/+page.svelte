<script lang="ts">
	import { countCart } from '$lib/stores.js';
	import { Trash2 } from '@lucide/svelte';

    let { data = $bindable() } = $props();

    let formatter = new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: 'THB',
    });

    const orderedProds = $state(data.products.filter((product) => product.productOrder > 0));
    console.log(orderedProds);

    let totalOrder = $derived(
        orderedProds.reduce((sum, prod) => sum + prod.productOrder, 0)
    );

    let subtotal = $derived(
        orderedProds.reduce((sum, prod) => sum + Number(prod.productPrice) * prod.productOrder, 0)
    );

    $effect(() => {
        countCart.set(totalOrder);
    })

    function handleCheckout() {
        orderedProds.forEach((prod) => {
            prod.productOrder = 0;
        });
        countCart.reset();
    }
</script>

<div class="mx-20 flex flex-col">
    <div class="flex flex-row justify-between items-center mb-10">
        <h1 class="text-2xl">Your cart</h1>
        <a href="#" class="text-xs underline">Continue shipping</a>
    </div>
    <div class="grid grid-cols-[2fr_1fr_1fr] text-xs mb-3">
        <div>PRODUCT</div>
        <div>QUANTITY</div>
        <div class="text-end">TOTAL</div>
    </div>
    <hr class="mb-8">
    {#each orderedProds as orderedProd (orderedProd.id)}
        <div class="grid grid-cols-[2fr_1fr_1fr] text-xs mb-8">
            <div class="flex flex-row text-xs gap-2">
                <img src={orderedProd.productImg[0]} alt={orderedProd.productName} height="100" width="100">
                <div>{orderedProd.productName}</div>
            </div>
            <div class="flex flex-rows w-fit h-fit">
                <div class="flex flex-rows items-center border border-gray-400 w-fit h-fit mr-2">
                    <button class="text-md w-8 h-8 hover:cursor-pointer" 
                        onclick={() => {
                            if (orderedProd.productOrder > 0) {
                                orderedProd.productOrder -= 1;
                                }
                            }
                        }>-</button>
                    <div class="flex flex-cols text-md items-center justify-center w-8 h-8">{orderedProd.productOrder}</div>
                    <button class="text-md w-8 h-8 hover:cursor-pointer" 
                        onclick={() => {orderedProd.productOrder += 1;}}>+</button>
                </div>
                <button class="hover:cursor-pointer" 
                onclick={() => {orderedProd.productOrder = 0;}}><Trash2 size={15}/></button>
            </div>
            <div class="text-end">{formatter.format(orderedProd.productOrder * Number(orderedProd.productPrice))}</div>
        </div>
    {/each}
    <hr class="mb-4">
    <div class="flex flex-col items-end text-xs mb-20">
        <div class="mb-2">Subtotal {formatter.format(subtotal)} THB</div>
        <a href="/success" data-sveltekit-preload-code class="text-white text-xs bg-black px-20 py-2" onclick={handleCheckout}>Checkout</a>
    </div>
</div>