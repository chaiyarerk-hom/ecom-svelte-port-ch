<script>
    let { id, productName, productImg, productPrice, isOnSale } = $props();
    
    let formatter = new Intl.NumberFormat('th-TH', {
        style: 'currency',
        currency: 'THB',
    });
</script>

<a href="/products/{id}" class="relative flex flex-col text-sm">
    <div>
        <img src={productImg[0]} alt={productName} width="260px" height="260px">
        {#if isOnSale}
            <span class="absolute transform translate-x-2 -translate-y-12 m-2 bg-blue-400 font-semibold px-4 py-1 rounded-full text-white">Sale</span>
        {/if}
    </div>
    <div>
        <p>{productName}</p>
        <p>{formatter.format(productPrice)} THB</p>
    </div>
</a>