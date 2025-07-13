import axios from "axios";
import { create } from "zustand";

interface Questions {
  index: number;
  questionType: string;
  questionText: string;
  required: boolean;
  options: string[];
}

interface Responses {
  createdAt: string;
  response: [
    {
      questionNumber: string;
      answer: string[];
    }
  ];
}

interface FormState {
  formHeader: {
    title: string;
    description: string;
  };
  questions: Questions[];
  responses: Responses[];
  getFormDetailsLoader: boolean;
  getFormDetailsError: boolean;
  getResponse: (formId: string) => Promise<void>;
  getForm: (formId: string) => Promise<void>;
  setFormDetailsLoader: (loader: boolean) => void;
  setFormDetailsError: (error: boolean) => void;
}

const useFormDetails = create<FormState>((set, get) => ({
  formHeader: {
    title: "Untitled Form",
    description: "Untitled Description",
  },
  responses: [],
  questions: [],
  getFormDetailsLoader: true,
  getFormDetailsError: false,
  getResponse: async (formId) => {
    try {
      const response = await axios.get(`/api/response/${formId}`);
      set({
        responses: response.data.responses,
      });
      console.log(get().responses);
    } catch (error) {
      console.error("Error fetching form response:", error);
      throw new Error("Failed to fetch form response");
    }
  },
  getForm: async (formId) => {
    try {
      const response = await axios.get(`/api/form/${formId}`);
      set({
        formHeader: response.data.form,
        questions: response.data.questions,
        getFormDetailsLoader: false,
      });
    } catch (error) {
      console.error("Error fetching forms:", error);
    }
  },
  setFormDetailsLoader: (loader: boolean) =>
    set({ getFormDetailsLoader: loader }),
  setFormDetailsError: (error: boolean) => set({ getFormDetailsError: error }),
}));

export default useFormDetails;
