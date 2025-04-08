"use client";

import { ChevronUp } from "lucide-react";
import TextareaAutosize from "react-textarea-autosize";

export const PromptInput = () => {
  return (
    <form
      action=""
      className="fixed bottom-8 left-[25%] flex w-1/2 items-center
rounded-md border-[1px] border-black pr-3 shadow-md transition-shadow
focus-within:shadow-xl hover:shadow-xl"
    >
      <TextareaAutosize
        minRows={2}
        maxRows={8}
        className="w-full resize-none rounded-md px-3 py-1.5 outline-none"
      />
      <button
        className="flex h-8 w-8 items-center justify-center rounded-full
bg-black text-white"
      >
        <ChevronUp />
      </button>
    </form>
  );
};
