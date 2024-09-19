import { db, Role, User, Product, ProductImage } from 'astro:db';
import { v4 as UUID } from 'uuid';
import bcrypt from 'bcryptjs';

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
}
