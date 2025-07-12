import { Copy, DeleteIcon } from "lucide-react";
import React from "react";

const QuestionButtons = ({
  question,
  onDeleteQuestion,
  duplicateQuestion,
}: {
  question: {
    index: number;
    questionType: string;
    questionText: string;
    options: string[];
  };
  onDeleteQuestion: (index: number) => void;
  duplicateQuestion: (index: number) => void;
}) => {
  return (
    <div className="md:col-span-3 flex justify-end items-center gap-4">
      <Copy
        className="cursor-pointer"
        onClick={() => duplicateQuestion(question.index)}
      />
      <DeleteIcon
        className="cursor-pointer"
        onClick={() => onDeleteQuestion(question.index)}
      />
    </div>
  );
};

export default QuestionButtons;
