<script lang="ts">
  import type { ProductWithImages } from '@/interfaces';
  import ProductCard from './ProductCard.svelte';

  export let products: ProductWithImages[];
</script>

<div
  class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center"
>
  {#each products as product}
    <ProductCard {product} />
  {/each}
</div>

<style></style>
