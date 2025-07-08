import { Button } from "@/components/ui/button";
import useFormStore from "@/store/useFormStore";
import React from "react";

const PublishForm = () => {
  const { questions, formHeader, onFormSubmit } = useFormStore();
  const handlePublish = async () => {
    let isValid = true;
    if (!formHeader.title.trim()) {
      alert("Form title cannot be empty.");
      isValid = false;
    }
    if (!formHeader.description.trim()) {
      alert("Form description cannot be empty.");
      isValid = false;
    }
    if (questions.length === 0) {
      alert("Please add at least one question to the form.");
      isValid = false;
    }
    questions.forEach((question) => {
      if (question.questionText.trim() === "") {
        alert(`Question ${question.index + 1} cannot be empty.`);
        isValid = false;
      }
      if (
        question.questionType === "multiple-choice" &&
        question.options.length < 2
      ) {
        alert(`Question ${question.index + 1} must have at least two options.`);
        isValid = false;
      }
      if (
        question.questionType === "linear-scale" &&
        question.options.length !== 2
      ) {
        alert(
          `Question ${
            question.index + 1
          } must have exactly two options for linear scale.`
        );
        isValid = false;
      }
      if (question.questionType === "dropdown" && question.options.length < 1) {
        alert(
          `Question ${
            question.index + 1
          } must have at least one option for dropdown.`
        );
        isValid = false;
      }
      if (question.questionType === "radio" && question.options.length < 1) {
        alert(
          `Question ${
            question.index + 1
          } must have at least one option for radio.`
        );
        isValid = false;
      }
      if (
        question.questionType === "check-box" &&
        question.options.length < 1
      ) {
        alert(
          `Question ${
            question.index + 1
          } must have at least one option for check box.`
        );
        isValid = false;
      }
      question.options.forEach((option, idx) => {
        if (option.trim() === "") {
          alert(
            `Option ${idx + 1} for question ${
              question.index + 1
            } cannot be empty.`
          );
          isValid = false;
        }
      });
    });
    if (!isValid) return;
    await onFormSubmit(questions, formHeader);
  };
  return (
    <div className="flex items-center space-x-2">
      <Button
        onClick={handlePublish}
        className="cursor-pointer bg-blue-600 hover:bg-blue-800"
      >
        Publish
      </Button>
    </div>
  );
};

export default PublishForm;
