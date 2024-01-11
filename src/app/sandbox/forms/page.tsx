"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(18, { message: "You must be at least 18 years old" }),
});

type FormData = z.infer<typeof schema>;

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

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
            {errors.name && (
              <FormHelperText
                display="flex"
                flexDirection="row-reverse"
                color="red"
              >
                <>{errors.name.message}</>
              </FormHelperText>
            )}
          </FormControl>
          <FormControl id="age">
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "1.5", md: "8" }}
              justify="space-between"
            >
              <FormLabel variant="inline">Age</FormLabel>
              <Input
                type="number"
                maxW={{ md: "3xl" }}
                {...register("age", { valueAsNumber: true })}
              />
            </Stack>
            {errors.age && (
              <FormHelperText
                display="flex"
                flexDirection="row-reverse"
                color="red"
              >
                <>{errors.age.message}</>
              </FormHelperText>
            )}
          </FormControl>

          <Flex direction="row-reverse">
            <Button isDisabled={!isValid} type="submit">
              Save
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
};
export default Page;
