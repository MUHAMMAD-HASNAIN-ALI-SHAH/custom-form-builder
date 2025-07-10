import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    response: [
      {
        questionNumber: Number,
        answer: String
      }
    ],
  },
  { timestamps: true }
);

const Form = mongoose.models.Form || mongoose.model("Form", formSchema);

export default Form;
