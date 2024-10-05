import { defineAction } from 'astro:actions';
import { db, eq, Product, ProductImage } from 'astro:db';
import { z } from 'astro:schema';

import { v4 as UUID } from 'uuid';

const newProduct = {
  id: UUID(),
  description: 'Nueva descripción',
  gender: 'men',
  price: 10,
  sizes: 'XS,S,M',
  slug: 'nuevo-producto',
  stock: 5,
  tags: 'shirt,men',
  title: 'Nuevo Producto',
  type: 'shirts',
};

export const getProductBySlug = defineAction({
  accept: 'json',
  input: z.string(),
  handler: async (slug) => {
    if (slug === 'new') {
      return {
        product: newProduct,
        images: [],
      };
    }

    const [product] = await db
      .select()
      .from(Product)
      .where(eq(Product.slug, slug));

    if (!product) {
      throw new Error(`Product with slug ${slug} not found`);
    }

    const images = await db
      .select()
      .from(ProductImage)
      .where(eq(ProductImage.productId, product.id));

    return {
      product: product,
      images: images.map((i) => i.image),
    };
  },
});
