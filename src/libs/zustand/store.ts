import { create } from "zustand";

interface InteractionSTore {
  interaction: {
    prompt: string;
    GPT: string;
    GEMINI: string;
    CLAUDE: string;
  }[];
  addInteraction: (prompt: string) => void;
}

export const useInteractionStore = create<InteractionSTore>((set) => ({
  interaction: [],
  addInteraction: (prompt) => {}
}));
