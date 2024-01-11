"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
const Page = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <Container py={{ base: "4", md: "8" }}>
      <Stack spacing="5">
        <Stack
          spacing="4"
          direction={{ base: "column", sm: "row" }}
          justify="space-between"
        >
          <Box>
            <Text textStyle="lg" fontWeight="medium">
              React-Hook-Form
            </Text>
            <Text color="fg.muted" textStyle="sm">
              Using Zod Validtion Library
            </Text>
          </Box>
        </Stack>
        <Divider />
        <Stack
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          spacing="5"
          divider={<StackDivider />}
        >
          <FormControl id="name">
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "1.5", md: "8" }}
              justify="space-between"
            >
              <FormLabel variant="inline">Name</FormLabel>
              <Input maxW={{ md: "3xl" }} {...register("name")} />
            </Stack>
          </FormControl>
          <FormControl id="age">
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "1.5", md: "8" }}
              justify="space-between"
            >
              <FormLabel variant="inline">Mobile Number</FormLabel>
              <Input type="number" maxW={{ md: "3xl" }} {...register("age")} />
            </Stack>
          </FormControl>

          <Flex direction="row-reverse">
            <Button type="submit">Save</Button>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
};
export default Page;
