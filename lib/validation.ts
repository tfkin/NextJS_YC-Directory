import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(20),
  link: z
    .string()
    .url({ message: "Please enter a valid URL." })
    .refine((url) => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(url), {
      message: "The URL must point to an image file (jpg, png, etc.).",
    }),
  pitch: z.string().min(10),
});
