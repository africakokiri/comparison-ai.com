import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const Header = () => {
  return (
    <header>
      <h1 className={`${robotoMono.className} text-xl`}>Comparison AI</h1>
    </header>
  );
};
