import { db, Role, User, Product, ProductImage } from 'astro:db';
import { v4 as UUID } from 'uuid';
import bcrypt from 'bcryptjs';
import { seedProducts } from './seed-data';

// https://astro.build/db/seed
export default async function seed() {
  const roles = [
    { id: 'admin', name: 'Administrator' },
    { id: 'user', name: 'User' },
  ];

  const diana = {
    id: UUID(),
    name: 'Diana',
    email: 'diana@example.com',
    password: bcrypt.hashSync('123456'),
    role: 'admin',
  };

  const naty = {
    id: UUID(),
    name: 'Naty',
    email: 'naty@example.com',
    password: bcrypt.hashSync('123456'),
    role: 'user',
  };

  await db.insert(Role).values(roles);
  await db.insert(User).values([diana, naty]);

  const queries: any = [];

  seedProducts.forEach((p) => {
    const product = {
      id: UUID(),
      description: p.description,
      stock: p.stock,
      price: p.price,
      sizes: p.sizes.join(','),
      slug: p.slug,
      type: p.type,
      tags: p.tags.join(','),
      title: p.title,
      gender: p.gender,
      user: diana.id,
    };

    queries.push(db.insert(Product).values(product));

    p.images.forEach((image) => {
      const productImage = {
        id: UUID(),
        image,
        productId: product.id,
      };

      queries.push(db.insert(ProductImage).values(productImage));
    });
  });

  await db.batch(queries);
}
