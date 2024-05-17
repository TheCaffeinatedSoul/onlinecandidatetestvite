import { z } from "zod";

const envSchema = z
  .object({
    VITE_CANDIDATE_BASE_URL: z.string().min(1),
  })
  .transform(({ VITE_CANDIDATE_BASE_URL }) => ({
    BASE_URL: VITE_CANDIDATE_BASE_URL,
  }));

export const parsedenv = envSchema.parse(import.meta.env);
