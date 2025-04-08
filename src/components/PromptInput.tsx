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
      className="fixed bottom-8 left-[25%] flex w-1/2 items-center
rounded-md border-[1px] border-black pr-3 shadow-md transition-shadow
focus-within:shadow-xl hover:shadow-xl"
    >
      <TextareaAutosize
        minRows={2}
        maxRows={8}
        ref={textareaRef}
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
