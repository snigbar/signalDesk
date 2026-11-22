import { z } from "zod";

export const createFeedbackSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters")
    .max(160, "Title cannot exceed 160 characters"),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters")
    .max(5000, "Description cannot exceed 5000 characters"),

  source: z
    .enum(["web", "email", "github", "other"])
    .default("web"),
});

export type CreateFeedbackInput = z.infer<
  typeof createFeedbackSchema
>;