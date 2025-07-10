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
        "text",
        "file-upload",
        "paragraph",
        "multiple-choice",
        "dropdown",
        "check-box",
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
    required: {
      type: Boolean,
      default: false,
      required: true,
    },
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
  mongoose.models.Questions || mongoose.model("Questions", questionsSchema);

export default Questions;
