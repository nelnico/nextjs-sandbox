import { Container } from "@chakra-ui/react";
import Link from "next/link";

import { prisma } from "../../../../prisma/prisma-client";

type Props = {
  params: { id: string };
};
const ProductPage = async ({ params }: Props) => {
  const product = await prisma.product.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  return (
    <Container>
      <Link href="/products">Back</Link>
      <h1>{JSON.stringify(product)}</h1>
    </Container>
  );
};

export default ProductPage;
