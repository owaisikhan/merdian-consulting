"use server";

import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { leadAnalysisSchema } from "@/app/_lib/aiSchema";

export async function analyzeProblemDescription(text) {
  try {
    const { object } = await generateObject({
      model: google("gemini-3.5-flash-lite"),
      schema: leadAnalysisSchema,
      prompt: `Analyze this client project description and generate a summary and tags:\n\n${text}`,
    });

    return { success: true, summary: object.summary, tags: object.tags };
  } catch (err) {
    console.error("analyzeProblemDescription error:", err.message);
    return { success: false };
  }
}
