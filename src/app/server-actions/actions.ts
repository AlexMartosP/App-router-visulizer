"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import * as z from "zod";

const createSchema = z.object({
  productSKU: z.string(),
  title: z.string(),
  body: z.string(),
});
export async function createComment(formData: FormData) {
  const data = createSchema.safeParse({
    productSKU: formData.get("productSKU"),
    title: formData.get("title"),
    body: formData.get("body"),
  });

  if (!data.success) {
    return { success: false };
  }

  await prisma.comment.create({
    data: {
      productId: data.data.productSKU,
      title: data.data.title,
      body: data.data.body,
    },
  });

  revalidatePath("/server-actions");
  return { success: true };
}

const updateSchema = z.object({
  productSKU: z.string(),
  commentId: z.string(),
  title: z.string(),
  body: z.string(),
});

export async function updateComment(values: z.infer<typeof updateSchema>) {
  const data = updateSchema.safeParse(values);

  if (!data.success) {
    return { success: false };
  }

  await prisma.comment.update({
    where: {
      id: parseInt(data.data.commentId),
    },
    data: {
      title: data.data.title,
      body: data.data.body,
    },
  });

  return { success: true };
}

export async function removeComment(id: string) {
  await prisma.comment.delete({
    where: {
      id: parseInt(id),
    },
  });

  revalidatePath("/server-actions");
  return { success: true };
}
