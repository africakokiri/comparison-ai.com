"use server";

import Anthropic from "@anthropic-ai/sdk";
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

  return result.response.text();
};

const claudeClient = new Anthropic({
  apiKey: process.env["CLAUDE_API_KEY"]
});

export const CLAUDE = async (input: string) => {
  const message = await claudeClient.messages.create({
    max_tokens: 1024,
    messages: [{ role: "user", content: input }],
    model: "claude-3-5-sonnet-latest"
  });

  // eslint-disable-next-line
  //@ts-ignore
  return message.content[0].text;
};
