"use client";
import { Button } from "@/components/ui/button";

import React from "react";

export default function Navbar({
  questions,
  formData,
}: {
  questions: {
    index: number;
    questionType: string;
    questionText: string;
    options: string[];
  }[];
  formData:{
    title: string;
    description: string;
  }
}) {
  const handlePublish = () => {
    if(!formData.title.trim()) {
      alert("Form title cannot be empty.");
      return;
    }
    if(!formData.description.trim()) {
      alert("Form description cannot be empty.");
      return;
    }
    if (questions.length === 0) {
      alert("Please add at least one question to the form.");
      return;
    }
    questions.forEach((question) => {
      if (question.questionText.trim() === "") {
        alert(`Question ${question.index + 1} cannot be empty.`);
        return;
      }
      if (
        question.questionType === "multiple-choice" &&
        question.options.length < 2
      ) {
        alert(`Question ${question.index + 1} must have at least two options.`);
        return;
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
        return;
      }
      if (question.questionType === "dropdown" && question.options.length < 1) {
        alert(
          `Question ${
            question.index + 1
          } must have at least one option for dropdown.`
        );
        return;
      }
      if (question.questionType === "radio" && question.options.length < 1) {
        alert(
          `Question ${
            question.index + 1
          } must have at least one option for radio.`
        );
        return;
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
        return;
      }
      question.options.forEach((option, idx) => {
        if (option.trim() === "") {
          alert(
            `Option ${idx + 1} for question ${
              question.index + 1
            } cannot be empty.`
          );
          return;
        }
      });
    });
    console.log(questions);
    console.log(formData);
  };
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="text-2xl md:text-3xl font-bold tracking-wide text-indigo-600 cursor-pointer">
          <span className="text-gray-800">Form</span>
        </div>

        {/* Right: Navigation Buttons */}
        <div className="flex items-center space-x-2">
          <Button
            onClick={handlePublish}
            className="cursor-pointer bg-blue-600 hover:bg-blue-800"
          >
            Publish
          </Button>
        </div>
      </div>
    </nav>
  );
}
