import prisma from "@/lib/prisma";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  console.log(req);
  const id = req.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.json({
      success: false,
      message: "Please provide an id",
    });
  }

  await prisma.comment.delete({
    where: {
      id: parseInt(id),
    },
  });

  return NextResponse.json({ success: true });
}
