import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params: { SKU: string } }) {
  const comments = await prisma.comment.findMany({
    where: {
      productId: context.params.SKU,
    },
    select: {
      id: true,
      title: true,
    },
  });

  return NextResponse.json({ comments });
}
