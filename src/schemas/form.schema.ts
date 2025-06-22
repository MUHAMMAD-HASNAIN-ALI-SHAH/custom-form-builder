import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    author: {
      type: String,
      required: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Form = mongoose.models.Form || mongoose.model("Form", formSchema);

export default Form;
