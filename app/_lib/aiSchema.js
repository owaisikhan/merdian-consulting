import { z } from "zod";

export const leadAnalysisSchema = z.object({
  summary: z
    .string()
    .describe("A concise, one-sentence summary of the client's problem or project."),
  tags: z
    .array(z.string())
    .min(2)
    .max(4)
    .describe("2-4 short technical category tags describing the type of work involved, e.g. 'authentication', 'data migration', 'API integration'."),
});
