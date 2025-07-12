import React from 'react'
import List from './Categories/List';
import LinearScale from './Categories/LinearScale';

type QuestionTypeProps = {
  question: {
    index: number;
    questionType: string;
    questionText: string;
    options: string[];
  };
};

const QuestionType: React.FC<QuestionTypeProps> = ({ question }) => {
  return (
    <>
      {(question.questionType === "multiple-choice" ||
        question.questionType === "radio" ||
        question.questionType === "check-box" ||
        question.questionType === "dropdown") && (
        <List
          index={question.index}
          options={question.options}
        />
      )}
      {question.questionType === "linear-scale" && (
        <LinearScale
          index={question.index}
          options={question.options}
        />
      )}
    </>
  );
};

export default QuestionType
