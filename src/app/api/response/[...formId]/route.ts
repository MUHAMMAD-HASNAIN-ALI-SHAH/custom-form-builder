import connectDB from "@/lib/db";
import Form from "@/schemas/form.schema";
import Response from "@/schemas/response.schema";
import { NextResponse } from "next/server";

export async function POST(
  request: Request,
  { params }: { params: { formId: string[] } }
) {
  await connectDB();

  try {
    const body = await request.json();
    const { formId } = params;

    console.log("Received formId:", formId);
    let response: { questionNumber: any; answer: any }[] = [];

    const getForm = await Form.findById(formId[0]);
    if (!getForm) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    body.response.forEach((item: any) => {
      response.push({
        questionNumber: item.questionNumber,
        answer: item.answer,
      });
    });

    const newResponse = {
      formId: getForm._id,
      response: response,
    };

    await Response.create(newResponse);

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Failed to submit form" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(
  request: Request,
  { params }: { params: { formId: string[] } }
) {
  await connectDB();

  try {
    const { formId } = params;

    console.log("Received formId:", formId);
    let response: { questionNumber: any; answer: any }[] = [];

    const getForm = await Form.findById(formId[0]);
    if (!getForm) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    const responses = await Response.find({ formId: getForm._id });

    return NextResponse.json({ responses }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Failed to submit form" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
