import { Header } from "@/components/Header";
import { Outputs } from "@/components/Outputs";
import { Prompt } from "@/components/Prompt";

export default function page() {
  return (
    <>
      <Header />
      <Outputs />
      <Prompt />
    </>
  );
}
