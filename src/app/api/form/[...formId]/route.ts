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
    const { formId } = params;

    const id = formId?.[0];
    if (!id) {
      return NextResponse.json(
        { error: "Form ID is required" },
        { status: 400 }
      );
    }

    const form = await Form.findOne({ _id: id });

    if (!form) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    const questions = await Questions.find({ formId: id }).sort({ index: 1 });

    return NextResponse.json({ form, questions }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Failed to submit form" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
