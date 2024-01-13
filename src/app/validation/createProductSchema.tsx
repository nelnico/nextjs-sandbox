import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).trim(),
  url: z.string().min(1, { message: "URL is required" }).trim(),
  price: z.number({ invalid_type_error: "Price is required" }),
});
