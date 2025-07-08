import React from 'react'
import List from '../Categories/List';
import LinearScale from '../Categories/LinearScale';

type QuestionTypeProps = {
  question: {
    index: number;
    questionType: string;
    questionText: string;
    options: string[];
  };
 onOptionsChange: (index: number, newOptions: string[]) => void;
};

const QuestionType: React.FC<QuestionTypeProps> = ({ question, onOptionsChange }) => {
  return (
    <>
      {(question.questionType === "multiple-choice" ||
        question.questionType === "radio" ||
        question.questionType === "check-box" ||
        question.questionType === "dropdown") && (
        <List
          index={question.index}
          options={question.options}
          onOptionsChange={onOptionsChange}
        />
      )}
      {question.questionType === "linear-scale" && (
        <LinearScale
          index={question.index}
          options={question.options}
          onOptionsChange={onOptionsChange}
        />
      )}
    </>
  );
};

export default QuestionType
