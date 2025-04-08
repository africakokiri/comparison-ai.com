"use server";

import Anthropic from "@anthropic-ai/sdk";
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

export const FETCH_CLAUDE = async (prompt: string) => {
  const client = new Anthropic({
    apiKey: process.env["ANTHROPIC_API_KEY"]
  });

  const message = await client.messages.create({
    max_tokens: 1024,
    messages: [{ role: "user", content: prompt }],
    model: "claude-3-5-sonnet-latest"
  });

  // eslint-disable-next-line
  return (message.content[0] as any).text;
};
