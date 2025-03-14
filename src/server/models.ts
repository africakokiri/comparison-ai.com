"use server";

import OpenAI from "openai";

const openAIClient = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"]
});

export const CHAT_GPT = async (userInput: string) => {
  const response = await openAIClient.responses.create({
    model: "gpt-4o-mini",
    input: userInput
  });

  return response.output_text;
};
