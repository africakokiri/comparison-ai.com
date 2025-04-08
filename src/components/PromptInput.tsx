"use client";

import { ChevronUp } from "lucide-react";
import { useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";

export const PromptInput = () => {
  const textareaRef = useRef(null);

  const handleFormOnclick = () => {
    if (!textareaRef.current) {
      return null;
    }

    (textareaRef.current as HTMLFormElement).focus();
  };

  return (
    <form
      action=""
      onClick={handleFormOnclick}
      className="fixed bottom-4 left-4 flex w-[calc(100%-32px)]
items-center rounded-md border-[1px] border-black/20 pr-3 shadow-md
ring-black transition-shadow focus-within:shadow-xl focus-within:ring-1
hover:shadow-xl md:bottom-8 md:left-[25%] md:w-1/2"
    >
      <TextareaAutosize
        minRows={2}
        maxRows={8}
        placeholder="Prompt..."
        ref={textareaRef}
        className="w-full resize-none rounded-md px-3 py-1.5 outline-none"
      />
      <button
        className="flex h-8 min-w-8 items-center justify-center
rounded-full bg-black text-white"
      >
        <ChevronUp />
      </button>
    </form>
  );
};
