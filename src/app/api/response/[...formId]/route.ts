import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Form from "@/schemas/form.schema";
import Questions from "@/schemas/questions.schema";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { formId: string[] } }
) {
  await connectDB();

  try {
    const body = await request.json();
    const { formId } = params;

    const getForm = await Form.findById(formId[0]);
    if (!getForm) {
      return NextResponse.json(
        { error: "Form not found" },
        { status: 404 }
      );
    }

    const questions = await Questions.find({ formId: formId[0] }).sort({
      index: 1,
    });

    for (const question of questions) {
      if (question.questionType === "file-upload") {
        const file = body[`question-${question.index}`];
        if (file) {
          console.log(`File uploaded for question ${question.index}:`, file);
        }
      }
    }

    return NextResponse.json({ }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Failed to submit form" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
