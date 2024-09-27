<script lang="ts">
  import { fade } from 'svelte/transition';

  import type { ProductWithImages } from '@/interfaces';

  export let product: ProductWithImages;

  const images = product.images.split(',').map((img) => {
    return img.startsWith('http')
      ? img
      : `${import.meta.env.PUBLIC_URL}/images/products/${img}`;
  });

  let hovered = false;
  let currenImage = images[0];
</script>

<a href={`products/${product.slug}`}>
  <img
    on:mouseenter={() => (
      (currenImage = images[1] ?? images[0]), (hovered = true)
    )}
    on:mouseleave={() => (
      (currenImage = images[0]), (hovered = false)
    )}
    src={currenImage}
    alt={product.title}
    class="h-[350px] object-contain transition-all"
    transition:fade={{ duration: 300 }}
  />
  <h4>{product.title}</h4>
  <p>${product.price}</p>
</a>

<style>
  img {
    transition: opacity 0.3s ease;
    opacity: 1;
  }
</style>
