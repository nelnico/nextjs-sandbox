"use client";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Wrap,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

import FormErrorDisplay from "@/app/components/FormErrorDisplay";
import { createProductSchema } from "@/app/validation/createProductSchema";

type FormData = z.infer<typeof createProductSchema>;

const CreateProductPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(createProductSchema),
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data: FieldValues) => {
    try {
      setIsSubmitting(true);
      await axios.post("/api/products", data);
      router.push("/products");
    } catch (error) {
      setIsSubmitting(false);
      setError("An unexpected error occurred");
    }
  });

  return (
    <Container mt={2}>
      {error && (
        <Box color="red" bg="red.100" p={4}>
          {error}
        </Box>
      )}
      <form onSubmit={onSubmit}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input {...register("name")} />

          <FormErrorDisplay>{errors.name?.message}</FormErrorDisplay>
        </FormControl>

        <FormControl>
          <FormLabel>URL</FormLabel>
          <Input {...register("url")} />
          <FormErrorDisplay>{errors.url?.message}</FormErrorDisplay>
        </FormControl>

        <FormControl>
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            {...register("price", { valueAsNumber: true })}
          />

          <FormErrorDisplay>{errors.price?.message}</FormErrorDisplay>
        </FormControl>
        <Wrap display="flex" flexDirection="row-reverse" spacing={2} mt={2}>
          <Button
            size="xs"
            variant="outline"
            type="button"
            isDisabled={isSubmitting}
            onClick={() => reset()}
          >
            Reset
          </Button>
          <Button
            size="xs"
            variant="outline"
            type="button"
            isDisabled={isSubmitting}
          >
            <Link href="/products">Cancel</Link>
          </Button>
          <Button
            size="xs"
            variant="outline"
            type="submit"
            isLoading={isSubmitting}
            isDisabled={isSubmitting}
          >
            Save
          </Button>
        </Wrap>
      </form>
    </Container>
  );
};

export default CreateProductPage;
