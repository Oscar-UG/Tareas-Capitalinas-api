import { z } from "zod";

export const listValidator = z.object({
  title: z
    .string({
      required_error: "El titulo de la lista es requerido",
    })
    .max(30, { message: "El nombre debe ser menor a 30" }),
});
