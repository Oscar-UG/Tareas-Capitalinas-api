import { z } from "zod";

export const taskValidator = z.object({
  title: z.string({ required_error: "El nombre de la tarea es requerido" }),
  description: z.string({ required_error: "La descripción es requerida" }),
});
