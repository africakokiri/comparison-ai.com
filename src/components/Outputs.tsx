"use client";

import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import { type ReactNode } from "react";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const ResponseBox = ({
  children,
  modelName,
  imgName
}: {
  readonly children: ReactNode;
  modelName: string;
  imgName: string;
}) => {
  return (
    <div className="w-1/3">
      <div className="flex items-center justify-center gap-2">
        <Image
          src={`/ai-models/${imgName}.svg`}
          alt=""
          height={24}
          width={24}
        />
        <h2 className={`${robotoMono.className} text-xl tracking-wide`}>
          {modelName}
        </h2>
      </div>

      <hr className="my-4 border-[0.5px] border-black/20" />

      {children}
    </div>
  );
};

export const Outputs = () => {
  return (
    <div className="flex h-full w-full justify-between gap-8">
      <ResponseBox
        modelName="gpt-4o-mini"
        imgName="gpt"
      >
        A
      </ResponseBox>
      <ResponseBox
        modelName="Gemini"
        imgName="gemini"
      >
        B
      </ResponseBox>
      <ResponseBox
        modelName="Claude"
        imgName="claude"
      >
        C
      </ResponseBox>
    </div>
  );
};
