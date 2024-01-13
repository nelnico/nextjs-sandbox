import { NextRequest, NextResponse } from "next/server";

import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: number } }
) {
  const product = await prisma.product.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!product) {
    return NextResponse.json(new Error("Not found"), { status: 404 });
  }

  return NextResponse.json(product);
}
