import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const productStatus = [
  {
    id: 1,
    name: 'in-stock',
  },
  {
    id: 2,
    name: 'out-stock',
  },
  {
    id: 3,
    name: 'low-stock',
  },
  {
    id: 4,
    name: 'inactive',
  },
];

const category = [
  {
    id: 1,
    name: 'Tipo',
  },
  {
    id: 2,
    name: 'Sabor',
  },
  {
    id: 3,
    name: 'Tamaño',
  },
];

const subcategory = [
  {
    id: 1,
    name: 'Concentrado',
    parentId: 1,
  },
  {
    id: 2,
    name: 'Medicamento',
    parentId: 1,
  },
  {
    id: 3,
    name: 'Pollo',
    parentId: 2,
  },
  {
    id: 4,
    name: 'Carne',
    parentId: 2,
  },
  {
    id: 5,
    name: 'Grandes',
    parentId: 3,
  },
];

const unit = [
  {
    id: 1,
    name: 'Kilos',
  },
  {
    id: 2,
    name: 'Litros',
  },
  {
    id: 3,
    name: 'Gramos',
  },
  {
    id: 4,
    name: 'Centímetros Cúbicos',
  },
];

const product = [
  {
    id: '1',
    name: 'Chunky',
    code: 'CHK',
    price: 10000,
    stock: 10,
    image: 'https://i.imgur.com/2w1h0oG.jpg',
    amount: 10,
    statusId: 1,
    unitId: 1,
  },
  {
    id: '2',
    name: 'Carne',
    code: 'CAR',
    price: 10,
    stock: 10,
    description: 'Carne',
    image: 'https://i.imgur.com/2w1h0oG.jpg',
    amount: 10,
    statusId: 1,
    unitId: 1,
  },
  {
    id: '3',
    name: 'Pollo',
    code: 'POL',
    price: 10,
    stock: 10,
    description: 'Pollo',
    image: 'https://i.imgur.com/2w1h0oG.jpg',
    amount: 10,
    statusId: 1,
    unitId: 1,
  },
  {
    id: '4',
    name: 'Carne',
    code: 'CAR',
    price: 10,
    stock: 10,
    description: 'Carne',
    image: 'https://i.imgur.com/2w1h0oG.jpg',
    amount: 10,
    statusId: 1,
    unitId: 1,
  },
  {
    id: '5',
    name: 'Pollo',
    code: 'POL',
    price: 10,
    stock: 10,
    description: 'Pollo',
    image: 'https://i.imgur.com/2w1h0oG.jpg',
    amount: 10,
    statusId: 1,
    unitId: 1,
  },
  {
    id: '6',
    name: 'Carne',
    code: 'CAR',
    price: 10,
    stock: 10,
    description: 'Carne',
    image: 'https://i.imgur.com/2w1h0oG.jpg',
    amount: 10,
    statusId: 1,
    unitId: 1,
  },
  {
    id: '7',
    name: 'Pollo',
    code: 'POL',
    price: 10,
    stock: 10,
    description: 'Pollo',
    image: 'https://i.imgur.com/2w1h0oG.jpg',
    amount: 10,
    statusId: 1,
    unitId: 1,
  },
  {
    id: '8',
    name: 'Carne',
    code: 'CAR',
    price: 10,
    stock: 10,
    description: 'Carne',
    image: 'https://i.imgur.com/2w1h0oG.jpg',
    amount: 10,
    statusId: 1,
    unitId: 1,
  },
];

const subcategoryOnProduct = [
  {
    productId: '1',
    subcategoryId: 1,
  },
  {
    productId: '2',
    subcategoryId: 1,
  },
  {
    productId: '3',
    subcategoryId: 1,
  },

  {
    productId: '4',
    subcategoryId: 2,
  },
  {
    productId: '5',
    subcategoryId: 2,
  },
  {
    productId: '6',
    subcategoryId: 2,
  },
  {
    productId: '7',
    subcategoryId: 3,
  },
  {
    productId: '8',
    subcategoryId: 4,
  },
  {
    productId: '1',
    subcategoryId: 5,
  },
  {
    productId: '2',
    subcategoryId: 5,
  },
  {
    productId: '3',
    subcategoryId: 5,
  },
];

async function main() {
  await prisma.productStatus.createMany({
    data: productStatus,
    skipDuplicates: true,
  });

  await prisma.category.createMany({
    data: category,
    skipDuplicates: true,
  });

  await prisma.subcategory.createMany({
    data: subcategory,
    skipDuplicates: true,
  });

  await prisma.unit.createMany({
    data: unit,
    skipDuplicates: true,
  });

  await prisma.product.createMany({
    data: product,
    skipDuplicates: true,
  });

  await prisma.subcategoryOnProduct.createMany({
    data: subcategoryOnProduct,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
