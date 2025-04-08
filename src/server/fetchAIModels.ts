"use server";

import OpenAI from "openai";

export const FETCH_GPT = async (prompt: string) => {
  const client = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"]
  });

  const response = await client.responses.create({
    model: "gpt-4o-mini",
    input: prompt
  });

  return response.output_text;
};
