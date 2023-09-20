import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import NavLink from "@/components/NavLink";
import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

const OFFSET = 3;

export default async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const pageParam = searchParams.page && parseInt(searchParams.page);

  const currentPage = !pageParam
    ? 0
    : pageParam === OFFSET
    ? pageParam
    : pageParam + (pageParam - OFFSET);

  const [products, count] = await prisma.$transaction([
    prisma.product.findMany({
      take: OFFSET,
      skip: currentPage,
    }),
    prisma.product.count(),
  ]);

  return (
    <>
      <h1>Regular</h1>
      <div className="py-4"></div>
      {products.length > 0 ? (
        <>
          <div className="grid grid-cols-3 gap-8">
            {products.map((product) => (
              <div>
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
          <div className="py-4"></div>
          <div className="flex gap-2 justify-center">
            {new Array(Math.ceil(count / OFFSET)).fill(null).map((t, i) => (
              <Button variant="secondary" size="icon" asChild>
                <Link
                  href={{
                    pathname: "/pagination",
                    query: {
                      page: i + 1 === 1 ? undefined : i + 1,
                    },
                  }}
                >
                  {i + 1}
                </Link>
              </Button>
            ))}
          </div>
        </>
      ) : (
        <p>No products was found</p>
      )}
    </>
  );
}
