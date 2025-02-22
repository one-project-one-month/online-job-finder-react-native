import { z } from "zod";
export const signUpSchema = z
  .object({
    name: z.string().min(4, "Name is required"),
    email: z.string().email(),
    password: z.string().min(4),
    confirmPassword: z.string().min(4),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type SignUpSchemaType = z.infer<typeof signUpSchema>;
