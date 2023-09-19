import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function AllProducts() {
  const products = await prisma.product.findMany({
    select: {
      imageId: true,
      name: true,
      price: true,
      SKU: true,
    },
  });

  return (
    <div className="flex gap-4">
      {products.map((product) => (
        <Link href={`/streaming/${product.SKU}`} className="flex-1">
          <div>
            <Image
              src={product.imageId}
              width={200}
              height={200}
              quality={80}
              alt={product.name}
              className="w-full rounded-md aspect-square object-cover"
            />
          </div>
          <h3 className="font-semibold">{product.name}</h3>
          <p>{product.price} SEK</p>
        </Link>
      ))}
    </div>
  );
}
