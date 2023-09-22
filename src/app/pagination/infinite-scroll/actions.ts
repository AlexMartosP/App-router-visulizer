"use server";
import prisma from "@/lib/prisma";
import { Product } from "@prisma/client";

export async function getProducts(
  page: number,
  limit: number
): Promise<{ products: Product[]; count: number }> {
  const currentPage = page === 1 ? 0 : page === 2 ? limit : limit * (page - 1);

  const [products, count] = await prisma.$transaction([
    prisma.product.findMany({
      take: limit,
      skip: currentPage,
    }),
    prisma.product.count(),
  ]);

  return { products, count };
}
