import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  category: {
    type: String,
    enum: [
      "short",
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
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
    required: true,
  },
});

const Questions = mongoose.model("Question", questionsSchema);

export default Questions;
