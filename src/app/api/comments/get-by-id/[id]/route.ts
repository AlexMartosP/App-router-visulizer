import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// Error handling, int etc.
export async function GET(req: Request, context: { params: { id: string } }) {
  const id = parseInt(context.params.id);

  const comment = await prisma.comment.findFirst({
    where: {
      id,
    },
  });

  return NextResponse.json({ comment });
}
