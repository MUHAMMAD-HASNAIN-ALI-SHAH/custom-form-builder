import axios from "axios";
import { create } from "zustand";
import { convertToBase64 } from "@/lib/base64";

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
    questionText: string;
    questionType: string;
    options: string[];
    index: number;
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
  handleImageChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => Promise<void>;
  onSubmit: (e: any) => void;
  onClear: () => void;
  getTheForm: (formId: string) => Promise<void>;
}

const useSubmitFormStore = create<SubmitFormState>((set, get) => ({
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

  handleImageChange: async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const imageBase64 = await convertToBase64(file);
        set((state) => {
          const updated = [...state.form];
          updated[index] = {
            ...updated[index],
            answer: [imageBase64 as string],
            error: false,
          };
          return { form: updated };
        });
      } catch (error) {
        console.error("Error converting image to base64:", error);
      }
    }
  },

  onSubmit: async (e) => {
    e.preventDefault();
    try {
      let hasError = false;
      set((state) => {
        const updated = [...state.form];

        const check = updated.map((res) => {
          const isEmpty = res.required && res.answer.length === 0;
          if (isEmpty) hasError = true;
          return {
            ...res,
            error: isEmpty,
          };
        });

        return { form: check };
      });

      if (hasError) {
        console.warn("Form has validation errors");
        return;
      }

      console.log(get().form);
    } catch (error) {
      console.error("Error submitting form:", error);
      throw new Error("Failed to submit form");
    }
  },

  onClear: () => {
    set({
      form: get().form.map((question) => ({
        ...question,
        answer: [],
        error: false,
      })),
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
