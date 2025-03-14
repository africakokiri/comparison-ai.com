import { Header } from "@/components/Header";
import { Outputs } from "@/components/Outputs";
import { Prompt } from "@/components/Prompt";

export default function page() {
  return (
    <div className="h-full w-full space-y-4 bg-blue-200 p-4">
      <Header />
      <Outputs />
      <Prompt />
    </div>
  );
}
