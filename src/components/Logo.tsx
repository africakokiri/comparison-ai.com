import { Roboto_Mono } from "next/font/google";

const robotoMonoVar = Roboto_Mono({ subsets: ["latin"] });

export const Logo = () => {
  return (
    <footer className="fixed bottom-8 right-8">
      <h1 className={`${robotoMonoVar.className} text-2xl font-light`}>
        Comparison-ai.com
      </h1>
    </footer>
  );
};
