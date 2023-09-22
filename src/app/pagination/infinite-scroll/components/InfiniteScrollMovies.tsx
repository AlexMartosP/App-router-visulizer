"use client";

import { Product } from "@prisma/client";
import Image from "next/image";
import { useState } from "react";
import { getProducts } from "../actions";
import IntersectionObserverComponent from "./IntersectionObserverComponent";
import { Loader } from "lucide-react";

type InfniniteScrollMoviesProps = {
  initialData: {
    products: Product[];
    count: number;
  };
};

export default function InfniniteScrollMovies({
  initialData,
}: InfniniteScrollMoviesProps) {
  const [productsData, setProductsData] = useState<{
    products: Product[];
    count: number;
  }>(initialData);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData(forcedPage: number) {
    setIsLoading(true);

    const data = await getProducts(forcedPage, 5);

    setProductsData((prev) => ({
      products: [...prev.products, ...data.products],
      count: data.count,
    }));

    setIsLoading(false);
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8">
        {productsData.products.map((product) => (
          <div key={product.SKU}>
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
          </div>
        ))}
      </div>
      {isLoading && <Loader className="animate-spin" />}
      {productsData.products.length < productsData.count && (
        <IntersectionObserverComponent
          onTrigger={async () => {
            setPage((prev) => prev + 1);
            fetchData(page + 1);
          }}
        />
      )}
    </>
  );
}
