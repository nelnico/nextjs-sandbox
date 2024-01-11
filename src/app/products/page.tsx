import {
  Container,
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { prisma } from "../lib/prisma-client";

const ProdutsPage = async () => {
  //const products = prismaClient.product.findMany
  const data = await prisma.product.findMany();

  return (
    <Container py={{ base: "4", md: "8" }}>
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
            {data.map((product) => (
              <Tr key={product.id}>
                <Td>{product.createdAt.toDateString()}</Td>
                <Td>{product.name}</Td>
                <Td>{product.price}</Td>
                <Td isNumeric>
                  <Link href={product.url} isExternal>
                    Visit
                  </Link>
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
