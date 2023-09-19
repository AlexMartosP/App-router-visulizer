import { PrismaClient, Product } from "@prisma/client";

const productSeedingData: Product[] = [
  {
    SKU: "SKU001",
    name: "Laptop",
    description:
      "Powerful laptop with the latest processor and high-resolution display.",
    price: 999.99,
    imageId: "1496181133206-80ce9b88a853",
  },
  {
    SKU: "SKU002",
    name: "Smartphone",
    description:
      "Feature-packed smartphone with a large OLED screen and 5G connectivity.",
    price: 699.99,
    imageId: "1541560052-3744e48ab80b",
  },
  {
    SKU: "SKU003",
    name: "Wireless Headphones",
    description: "Premium wireless headphones with noise-canceling technology.",
    price: 199.99,
    imageId: "1599669454699-248893623440",
  },
  {
    SKU: "SKU004",
    name: "Gaming Console",
    description:
      "Next-gen gaming console with 4K graphics and a vast game library.",
    price: 499.99,
    imageId: "1550745165-9bc0b252726f",
  },
  {
    SKU: "SKU005",
    name: "Tablet",
    description:
      "Sleek and versatile tablet for work and entertainment on the go.",
    price: 349.99,
    imageId: "1542751110-97427bbecf20",
  },
];

const prisma = new PrismaClient();
async function seed() {
  for (let product of productSeedingData) {
    let comments = [];
    for (let i = 1; i <= 3; i++) {
      comments.push({
        title: `Comment ${i} for ${product.name}`,
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat in nisi non aliquet. Morbi hendrerit dictum vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque luctus viverra leo, non placerat metus pretium quis. Phasellus varius lacinia massa sit amet fermentum. Cras vehicula mollis nunc id vehicula. Integer quis sollicitudin tellus. Sed ullamcorper sagittis lorem, et interdum diam. Aenean at massa velit. Nunc placerat rutrum mollis. ",
      });
    }

    await prisma.product.upsert({
      where: {
        SKU: product.SKU,
      },
      create: {
        ...product,
        comments: {
          create: comments,
        },
      },
      update: {},
    });
  }
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit();
  });
