"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";

const openAIClient = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"]
});

export const CHAT_GPT = async (input: string) => {
  const response = await openAIClient.responses.create({
    model: "gpt-4o-mini",
    input
  });

  return response.output_text;
};

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const GEMINI = async (input: string) => {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const result = await model.generateContent([input]);
  console.log(result.response.text());
};
