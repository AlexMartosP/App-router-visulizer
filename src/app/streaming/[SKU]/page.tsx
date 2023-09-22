import { Button } from "@/components/Button";
import { Skeleton } from "@/components/Skeleton";
import prisma from "@/lib/prisma";
import { wait } from "@/lib/utils";
import { Dot, Minus } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Comments from "./components/Comments";
import Delivery from "./components/Delivery";
import AllProducts from "./components/AllProducts";

export default async function Page({ params }: { params: { SKU: string } }) {
  const product = await prisma.product.findFirst({
    where: {
      SKU: params.SKU,
    },
  });

  if (!product) {
    notFound();
  }

  await wait(1000);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center">
        <div className="flex-1">
          <Image
            src={product.imageId}
            width={500}
            height={500}
            quality={80}
            alt={product.name}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="rounded-md aspect-square object-cover w-full"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="mt-4">{product.description}</p>
          <div className="mt-4 rounded border shadow-sm p-4">
            <Suspense fallback={<Skeleton className="w-32 h-4" />}>
              <Delivery />
            </Suspense>
            <div className="py-2"></div>
            <Button
              size="lg"
              className="w-full flex flex-col lg:flex-row lg:gap-2"
            >
              <span>Add to cart</span>
              <Dot className="hidden lg:block" />
              <span>{product.price} SEK</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="py-4"></div>
      <h2 className="font-semibold text-lg">Related products</h2>
      <Suspense>
        <AllProducts />
      </Suspense>
      <div className="py-4"></div>
      <h2 className="font-semibold text-lg">Comments</h2>
      <Suspense fallback={<Comments.Loading />}>
        <Comments sku={product.SKU} />
      </Suspense>
    </>
  );
}
