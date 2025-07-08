import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema(
  {
    questionText: {
      type: String,
    },
    questionType: {
      type: String,
      enum: [
        "email",
        "number",
        "short",
        "file-upload",
        "paragraph",
        "multiple-choice",
        "dropdown",
        "check-box",
        "radio",
        "linear-scale",
        "date",
        "time",
      ],
    },
    options: [
      {
        type: String,
      },
    ],
    formId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Questions =
  mongoose.models.Question || mongoose.model("Question", questionsSchema);

export default Questions;
