import * as z from "zod";

export const useFormSchema = () => {
  return z.object({
    userType: z.string().optional(),
    fullName: z.string().min(2, { message: "Debe ingresar el nombre" }),
    email: z.string().optional(),
    phoneNumber: z.string().optional(),
    branch: z.string().optional(),
    contentType: z.string().optional(),
    content: z
      .string()
      .min(1, { message: "Debe escribir el contenido" }),
  });
};
