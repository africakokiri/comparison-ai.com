"use client";

import { ChevronUp } from "lucide-react";
import { useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";

export const Prompt = () => {
  const textareaRef = useRef(null);

  const handleButtonClick = () => {
    if (textareaRef.current) {
      (textareaRef.current as HTMLTextAreaElement).focus();
    }
  };

  return (
    <div className="fixed bottom-8 flex w-full justify-center">
      <form
        onClick={handleButtonClick}
        className="focus w-1/2 bg-white shadow-md transition-shadow
hover:shadow-xl"
      >
        <div
          className="flex w-full items-center justify-between rounded-md
border-[1px] border-black pr-2"
        >
          <label
            htmlFor="prompt-textarea"
            className="sr-only"
          >
            Enter the prompt
          </label>
          <TextareaAutosize
            ref={textareaRef}
            id="prompt-textarea"
            name="textarea"
            minRows={2}
            maxRows={5}
            className="w-full resize-none rounded-md px-2 py-1.5
outline-none"
            placeholder="Enter the prompt..."
          />
          <button
            type="button"
            className="flex h-[36px] w-[36px] items-center justify-center
rounded-full bg-black text-white"
          >
            <ChevronUp />
          </button>
        </div>
      </form>
    </div>
  );
};
