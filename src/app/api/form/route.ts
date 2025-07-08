import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Form from "@/schemas/form.schema";
import Questions from "@/schemas/questions.schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectDB();

  try {
    const body = await request.json();
    const { formHeader, questions } = body;
    const session = await auth();
    const user = session?.user;

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const addFormHeader = await Form.create({
      title: formHeader.title,
      description: formHeader.description,
      author: user?.email || "Anonymous",
    });

    console.log(questions)

    await Questions.insertMany(
      questions.map((question: any) => ({
        questionText: question.questionText,
        questionType: question.questionType,
        options: question.options,
        formId: addFormHeader._id,
        index: question.index,
      }))
    );

    return NextResponse.json(
      { message: "Form added successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Failed to submit form" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
