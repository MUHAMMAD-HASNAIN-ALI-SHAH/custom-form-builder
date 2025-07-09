import axios from "axios";
import { create } from "zustand";

interface Questions {
  index: number;
  questionType: string;
  questionText: string;
  required: boolean;
  options: string[];
}

interface CreateFormState {
  formHeader: {
    title: string;
    description: string;
  };
  questions: Questions[];
  setFormHeader: (field: string, value: string) => void;
  addQuestion: () => void;
  onQuestionChange: (index: number, updated: Partial<Questions>) => void;
  onOptionsChange: (index: number, newOptions: string[]) => void;
  onDeleteQuestion: (index: number) => void;
  duplicateQuestion: (index: number) => void;
  onCategoryChange: (index: number, newCategory: string) => void;
  onRequiredChange: (index: number, updated: boolean) => void;
  resetForm: () => void;
  onFormSubmit: (
    questions: Questions[],
    formHeader: {
      title: string;
      description: string;
    }
  ) => Promise<any>;
}

const useCreateFormStore = create<CreateFormState>((set) => ({
  questions: [],
  formHeader: {
    title: "",
    description: "",
  },
  setFormHeader: (field, value) =>
    set((state) => ({
      formHeader: {
        ...state.formHeader,
        [field]: value,
      },
    })),
  addQuestion: () => {
    set((state) => {
      const newIndex = state.questions.length;
      const newQuestion: Questions = {
        index: newIndex,
        questionType: "short",
        questionText: "",
        required: false,
        options: [],
      };
      return {
        questions: [...state.questions, newQuestion],
      };
    });
  },
  onQuestionChange: (index, updated) => {
    set((state) => ({
      questions: state.questions.map((q) =>
        q.index === index ? { ...q, ...updated } : q
      ),
    }));
  },
  onOptionsChange: (index, newOptions) => {
    set((state) => ({
      questions: state.questions.map((q) =>
        q.index === index ? { ...q, options: newOptions } : q
      ),
    }));
  },
  onDeleteQuestion: (index) => {
    set((state) => {
      const updatedQuestions = state.questions
        .filter((q) => q.index !== index)
        .map((q, i) => ({ ...q, index: i }));

      return { questions: updatedQuestions };
    });
  },
  duplicateQuestion: (index) => {
    set((state) => {
      const originalIndex = state.questions.findIndex((q) => q.index === index);
      if (originalIndex === -1) return state;

      const questionToDuplicate = state.questions[originalIndex];
      const duplicated = {
        ...questionToDuplicate,
        index: state.questions.length,
      };

      return {
        questions: [
          ...state.questions.slice(0, originalIndex + 1),
          duplicated,
          ...state.questions.slice(originalIndex + 1),
        ].map((q, i) => ({ ...q, index: i })),
      };
    });
  },
  onCategoryChange: (index, newCategory) => {
    set((state) => ({
      questions: state.questions.map((q) =>
        q.index === index ? { ...q, questionType: newCategory } : q
      ),
    }));
  },
  resetForm: () =>
    set(() => ({
      formHeader: {
        title: "",
        description: "",
      },
      questions: [],
    })),
  onRequiredChange: (index, updated) => {
    set((state) => ({
      questions: state.questions.map((q) =>
        q.index === index ? { ...q, required: updated } : q
      ),
    }));
  },
  onFormSubmit: async (questions, formHeader) => {
    try {
      const response = await axios.post("/api/form", { formHeader, questions });
      return response;
    } catch (error: any) {
      console.error(error);
      return Promise.reject(error);
    }
  },
}));

export default useCreateFormStore;
