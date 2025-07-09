"use client";
import { Button } from "@/components/ui/button";
import useCreateFormStore from "@/store/useCreateFormStore";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const PublishForm = () => {
  const { questions, formHeader, onFormSubmit } = useCreateFormStore();
  const router = useRouter();

  const handlePublish = async () => {
    let isValid = true;

    // 🔎 Validation
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

      const requiresOptions = [
        "multiple-choice",
        "dropdown",
        "radio",
        "check-box",
      ];
      if (
        requiresOptions.includes(question.questionType) &&
        question.options.length < 1
      ) {
        alert(`Question ${question.index + 1} must have at least one option.`);
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

    onFormSubmit(questions, formHeader)
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-right",
          autoClose: 5000,
        });
        useCreateFormStore.getState().resetForm();
        router.push("/dashboard");
      })
      .catch((error: any) => {
        console.error("Error submitting form:", error);
        toast.error("Failed to submit form. Please try again later.");
      });
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
