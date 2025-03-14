import { Outputs } from "@/components/Outputs";
import { Prompt } from "@/components/Prompt";

export default function page() {
  return (
    <div className="h-full w-full space-y-4 p-4">
      <Outputs />
      <Prompt />
    </div>
  );
}
