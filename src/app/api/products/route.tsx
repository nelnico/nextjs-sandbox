import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

import { createProductSchema } from "@/app/validation/createProductSchema";

import { prisma } from "../../../../prisma/prisma-client";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);

  const skip = url.searchParams.get("skip");
  const take = url.searchParams.get("take");
  const query = url.searchParams.get("query");

  const products = await prisma.product.findMany({
    skip: skip ? parseInt(skip) : 0,
    take: take ? parseInt(take) : 10,
    where: {
      ...(query ? { name: { contains: query } } : {}),
    },
  });
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
