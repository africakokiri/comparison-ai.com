import { create } from "zustand";

interface PromptStore {
  default: string[];
  addPrompt: (prompt: string) => void;
}

export const usePromptStore = create<PromptStore>((set) => ({
  default: [],
  addPrompt: (prompt) =>
    set((state) => ({
      default: [...state.default, prompt]
    }))
}));
