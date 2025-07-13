import mongoose from "mongoose";

const responseSchema = new mongoose.Schema(
  {
    formId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
      required: true,
    },
    response: [
      {
        questionNumber: Number,
        answer: [
          {
            type: String,
          },
        ],
      },
    ],
  },
  { timestamps: true }
);

const Response = mongoose.models.Response || mongoose.model("Response", responseSchema);

export default Response;
