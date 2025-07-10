import axios from "axios";
import { create } from "zustand";

interface Questions {
  index: number;
  questionType: string;
  questionText: string;
  required: boolean;
  options: string[];
}

interface SubmitFormState {
  form: {
    required: boolean;
    questionText?: string;
    questionType?: string;
    options?: string[];
    index?: number;
    answer: (string | number | boolean | null | File | Blob | ArrayBuffer)[];
    error: boolean;
  }[];
  title: string;
  description: string;
  loader: boolean;
  gettingFormError: boolean;
  handleStringsInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    index: number
  ) => void;
  handleCheckBoxChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  getTheForm: (formId: string) => Promise<void>;
}

const useSubmitFormStore = create<SubmitFormState>((set) => ({
  form: [],
  title: "Untitled Form",
  description: "No description provided",
  loader: false,
  gettingFormError: false,
  handleStringsInputChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    index: number
  ) => {
    set((state) => {
      const updatedForm = [...state.form];
      const isRequired = updatedForm[index]?.required || false;
      const isEmpty = e.target.value.trim() === "" && isRequired;
      if (updatedForm[index]) {
        updatedForm[index].answer = [e.target.value];
        updatedForm[index].error = isEmpty;
      }
      return { form: updatedForm };
    });
  },

  handleCheckBoxChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { checked, value } = e.target;
    set((state) => {
      const updated = [...state.form];
      const isRequired = updated[index]?.required || false;
      const currentAnswers = new Set(updated[index].answer);
      if (checked) {
        currentAnswers.add(value);
      } else {
        currentAnswers.delete(value);
      }
      updated[index] = {
        ...updated[index],
        answer: Array.from(currentAnswers),
        error: false,
      };
      return { form: updated };
    });
  },

  getTheForm: async (formId: string) => {
    try {
      set({ loader: true });
      const response = await axios.get(`/api/form/${formId}`);
      set({
        title: response.data.form.title || "Untitled Form",
        description:
          response.data.form.description || "No description provided",
      });
      set({
        form: response.data.questions.map((question: Questions) => ({
          required: question.required,
          questionText: question.questionText,
          questionType: question.questionType,
          options: question.options || [],
          index: question.index,
          answer: [],
          error: false,
        })),
      });
      set({ loader: false });
    } catch (error) {
      set({ loader: false, gettingFormError: true });
      console.error("Error fetching form:", error);
      throw new Error("Failed to fetch form");
    }
  },
}));

export default useSubmitFormStore;
