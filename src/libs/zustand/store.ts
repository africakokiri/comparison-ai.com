import { create } from "zustand";

interface Conversation {
  input: string;
  CHAT_GPT: string;
  GEMINI: string;
  CLAUDE: string;
}

interface InputState {
  conversations: Conversation[];
  addConversation: (input: string) => void;
}

export const useInputStore = create<InputState>((set) => ({
  conversations: [],
  addConversation: (input) => {}
}));
