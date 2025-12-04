<script lang="ts">
    import { page } from '$app/state';
	import { House } from '@lucide/svelte';
</script>

<div class="flex flex-col items-center mb-20">
    <h1 class="text-xl mb-5">{page.status} {page.error?.message}</h1>
    <a href="/" class="flex flex-row gap-4">
        Go back to Homepage<House />
    </a>
</div>
