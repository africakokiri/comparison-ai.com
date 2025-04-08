"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";
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

export const FETCH_GEMINI = async (prompt: string) => {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-pro-exp-03-25"
  });

  const result = await model.generateContent([prompt]);

  return result.response.text();
};
