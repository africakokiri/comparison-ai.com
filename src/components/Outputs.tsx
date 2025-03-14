"use client";

import { ReactNode } from "react";

const ResponseBox = ({
  children,
  modelName
}: {
  readonly children: ReactNode;
  modelName: string;
}) => {
  return (
    <div className="w-1/3">
      <h2>{modelName}</h2>
      {children}
    </div>
  );
};

export const Outputs = () => {
  return (
    <div className="flex h-full w-full justify-between gap-8">
      <ResponseBox modelName="Chat-GPT">A</ResponseBox>
      <ResponseBox modelName="Gemini">B</ResponseBox>
      <ResponseBox modelName="Claude">C</ResponseBox>
    </div>
  );
};
