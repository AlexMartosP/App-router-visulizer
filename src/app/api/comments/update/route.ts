import prisma from "@/lib/prisma";
import { Award } from "lucide-react";
import { NextResponse } from "next/server";
import * as z from "zod";

const bodySchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
});
export async function PUT(req: Request) {
  const body = bodySchema.safeParse(await req.json());

  if (!body.success) {
    return NextResponse.json({
      success: false,
      error: "Data is in wrong format",
    });
  }

  await prisma.comment.update({
    where: {
      id: body.data.id,
    },
    data: {
      title: body.data.title,
      body: body.data.body,
    },
  });

  return NextResponse.json({
    success: true,
  });
}
