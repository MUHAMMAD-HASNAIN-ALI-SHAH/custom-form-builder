import axios from "axios";
import { create } from "zustand";

interface Forms {
  _id: string;
  title: string;
  description: string;
}

interface FormState {
  forms: Forms[];
  getFormLoader: boolean;
  getFormError: boolean;
  getForms: () => Promise<void>;
}

const useFormStore = create<FormState>((set) => ({
  forms: [],
  getFormLoader: false,
  getFormError: false,
  getForms: async () => {
    try {
      set({ getFormLoader: true, getFormError: false });
      const response = await axios.get("/api/form");
      set({ forms: response.data.forms, getFormLoader: false, getFormError: false });
    } catch (error) {
      set({ getFormLoader: false, getFormError: true });
      console.error("Error fetching forms:", error);
    }
  },
}));

export default useFormStore;
