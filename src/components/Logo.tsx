import { Roboto_Mono } from "next/font/google";

const robotoMonoVar = Roboto_Mono({ subsets: ["latin"] });

export const Logo = () => {
  return (
    <footer className="bottom-12 right-8 hidden md:fixed md:block">
      <h1 className={`${robotoMonoVar.className} text-2xl font-light`}>
        Comparison-ai.com
      </h1>
    </footer>
  );
};
