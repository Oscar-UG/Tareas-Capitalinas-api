import { z } from "zod";

export const userValidator = z.object(
  {
    username: z
      .string({ required_error: "Nombre es requerido" })
      .min(4, { message: "El nombre dede ser mayor a 4 carácteres" })
      .max(20, { message: "El nombre debe ser menor a 20 carácteres" }),
  },
  {
    password: z
      .string({ required_error: "La contraseña es requerida" })
      .min(6, { message: "La contraseña debe ser mayor a 6 carácteres" })
      .max(12, { message: "La contraseña debe ser menor a 12 carácteres" }),
  }
);
