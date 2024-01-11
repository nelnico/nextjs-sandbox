import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Divider,
  HStack,
} from "@chakra-ui/react";
import Link from "next/link";

const NavBar = () => {
  return (
    <Box
      borderBottomWidth="1px"
      bg="bg.accent.default"
      position="relative"
      zIndex="tooltip"
    >
      <Container py="4">
        <HStack justify="space-between" spacing="8">
          <HStack spacing="10">
            <ButtonGroup
              size="lg"
              variant="text.accent"
              colorScheme="gray"
              spacing="8"
              display={{ base: "none", lg: "flex" }}
            >
              <Button>
                <Link href="/">Home</Link>
              </Button>
              <Button>
                <Link href="/sandbox/chakra">Chakra</Link>
              </Button>
              <Button>
                <Link href="/sandbox/forms">Forms</Link>
              </Button>
              <Button>
                <Link href="/products">Products</Link>
              </Button>
            </ButtonGroup>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default NavBar;
