import { create } from "zustand";

interface FeedbackFormState {
  rating?: number;
  name?: string;
  email?: string;
}
interface FeedbackStore {
  form: FeedbackFormState;
  updateForm: (form: Partial<FeedbackFormState>) => void;
}

export const useFeedbackStore = create<FeedbackStore>()((set) => ({
  form: {
    rating: 0,
    name: "",
    email: "",
  },
  updateForm: (partial: Partial<FeedbackFormState>) => {
    set((state) => ({ form: { ...state.form, ...partial } }));
  },
}));

export const validateForm = (
  form: FeedbackFormState
): Partial<Record<keyof FeedbackFormState, string>> | true => {
  if (!form.rating) return { rating: "Rating is required" };
  return true;
};
