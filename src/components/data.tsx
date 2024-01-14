import { create } from "zustand";

interface FeedbackFormState {
  rating?: number;
  name?: string;
  email?: string;
}
interface FeedbackStore {
  form: FeedbackFormState;
  updateForm: (form: Partial<FeedbackFormState>) => void;
  submitForm: () => void;
  status: "idle" | "pending" | "success" | "error";
}

export const useFeedbackStore = create<FeedbackStore>()((set, get) => ({
  form: {
    rating: 0,
    name: "",
    email: "",
  },
  status: "idle",
  updateForm: (partial: Partial<FeedbackFormState>) => {
    set((state) => ({ form: { ...state.form, ...partial } }));
  },
  submitForm: () => {
    const form = get().form;
    if (!validateForm(form)) return;
    set({ status: "pending" });
    setTimeout(() => {
      set({ status: "success" });
    } , 1000);
  },
}));

export const validateForm = (
  form: FeedbackFormState
): Partial<Record<keyof FeedbackFormState, string>> | true => {
  if (!form.rating) return { rating: "Rating is required" };
  return true;
};
