import connectDB from "@/lib/db";
import Form from "@/schemas/form.schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  await connectDB();

  try {
    const body = await request.json();
    const userId = request.headers.get("userId");

    if (!userId) {
      return NextResponse.json(
        { error: "Authentication Error" },
        { status: 400 }
      );
    }

    const saveForm = await Form.create({ author: userId });

    return NextResponse.json({ formId: saveForm._id }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Failed to submit form" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
