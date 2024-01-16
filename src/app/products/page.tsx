"use client";
import {
  Button,
  Container,
  Flex,
  Input,
  Link as ChakraLink,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Product } from "@prisma/client";
import Link from "next/link";
import { useState } from "react";

import { useProducts } from "../hooks/use-products";

const ProdutsPage = () => {
  const PAGE_SIZE = 10;
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const { data, error, isLoading, isFetching } = useProducts(
    PAGE_SIZE,
    page,
    query
  );

  const goToNextPage = () => {
    setPage(page + 1);
  };

  const goToPreviousPage = () => {
    setPage(page - 1);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <Container py={{ base: "4", md: "8" }}>
      <h1>
        Page: {page}, Size: {PAGE_SIZE}
      </h1>
      {(isLoading || isFetching) && <h1>Loading...</h1>}
      <Flex direction="row-reverse" mb={2}>
        <Button size="xs" ms={2}>
          <Link href="/products/create">Add Product</Link>
        </Button>
        <Button
          size="xs"
          ms={2}
          onClick={goToNextPage}
          isDisabled={data?.length === 0}
        >
          Next
        </Button>
        <Button size="xs" onClick={goToPreviousPage} isDisabled={page === 1}>
          Back
        </Button>
        <Input
          width={200}
          size="sm"
          me={2}
          placeholder="search..."
          onChange={handleSearchChange}
        />
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
            {data?.map((product: Product) => (
              <Tr key={product.id}>
                <Td> {new Date(product.createdAt).toDateString()} </Td>
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
