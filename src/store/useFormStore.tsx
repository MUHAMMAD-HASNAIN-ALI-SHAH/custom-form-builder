import axios from "axios";
import { create } from "zustand";

interface Forms {
  _id: string;
  title: string;
  description: string;
}

interface FormState {
  forms: Forms[];
  getForms: () => Promise<void>;
}

const useFormStore = create<FormState>((set) => ({
  forms: [],
  getForms: async () => {
    try {
      const response = await axios.get("/api/form");
      set({ forms: response.data.forms });
    } catch (error) {}
  },
}));

export default useFormStore;
