import { NextRequest, NextResponse } from "next/server";

import { createProductSchema } from "@/app/validation/createProductSchema";

import { prisma } from "../../../../prisma/prisma-client";

export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createProductSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(
      { error: validation.error.format() },
      { status: 400 }
    );
  }

  const createdProduct = await prisma.product.create({
    data: { name: body.name, url: body.url, price: body.price },
  });

  return NextResponse.json(createdProduct, { status: 201 });
}
