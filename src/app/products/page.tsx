import {
  Button,
  Container,
  Flex,
  Link as ChakraLink,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Link from "next/link";

import { prisma } from "../../../prisma/prisma-client";

const ProdutsPage = async () => {
  const products = await prisma.product.findMany();
  console.log(products);

  return (
    <Container py={{ base: "4", md: "8" }}>
      <Flex direction="row-reverse" mb={2}>
        <Button size="xs">
          <Link href="/products/create">Add Product</Link>
        </Button>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Created</Th>
              <Th>Name</Th>
              <Th isNumeric>Price</Th>
              <Th>URL</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product.id}>
                <Td>{product.createdAt.toDateString()}</Td>
                <Td>
                  <Link href={`/products/${product.id}`}>{product.name}</Link>
                </Td>
                <Td>{product.price}</Td>
                <Td isNumeric>
                  <ChakraLink href={product.url} isExternal>
                    Visit
                  </ChakraLink>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ProdutsPage;
