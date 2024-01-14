import { create } from "zustand";

interface FeedbackStore {
  form: {
    name?: string | null;
    email?: string | null;
  };
}

export const useFeedbackStore = create<FeedbackStore>()(() => ({
  form: {
    name: null,
    email: null,
  },
}));
