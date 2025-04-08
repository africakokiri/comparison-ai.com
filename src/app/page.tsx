import { Logo } from "@/components/Logo";
import { PromptInput } from "@/components/PromptInput";
import { Slider } from "@/components/Slider";

export default function page() {
  return (
    <>
      <Slider />
      <PromptInput />
      <Logo />
    </>
  );
}
