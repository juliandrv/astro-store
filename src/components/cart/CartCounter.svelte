<script lang="ts">
  import { itemsInCart } from '@/store';
  import { CartCookiesClient } from '@/utils';

  $itemsInCart = itemsInCart.get();

  const cart = CartCookiesClient.getCart();
  itemsInCart.set(cart.length);
</script>

<a href="/cart" class="relative inline-block">
  {#if $itemsInCart > 0}
    <span
      class="absolute -top-2 -right-2 flex justify-center items-center bg-blue-600 text-white text-xs rounded-full w-5 h-5"
    >
      {$itemsInCart}
    </span>
  {/if}

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 32 32"
  >
    <path
      fill="black"
      d="M5 7c-.55 0-1 .45-1 1s.45 1 1 1h2.219l2.625 10.5c.222.89 1.02 1.5 1.937 1.5H23.25c.902 0 1.668-.598 1.906-1.469L27.75 10H11l.5 2h13.656l-1.906 7H11.781L9.156 8.5A1.98 1.98 0 0 0 7.22 7zm17 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m0 2c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1m9 0c.563 0 1 .438 1 1s-.438 1-1 1s-1-.438-1-1s.438-1 1-1"
    />
  </svg>
</a>
