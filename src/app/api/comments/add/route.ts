import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import * as z from "zod";

const bodySchema = z.object({
  productSKU: z.string(),
  title: z.string(),
  body: z.string(),
});

export async function POST(req: Request) {
  const body = bodySchema.safeParse(await req.json());

  if (!body.success) {
    return NextResponse.json({
      success: false,
      error: "Data is in wrong format",
    });
  }

  await prisma.comment.create({
    data: {
      productId: body.data.productSKU,
      title: body.data.title,
      body: body.data.body,
    },
  });

  return NextResponse.json({ success: true, data: body.data });
}
