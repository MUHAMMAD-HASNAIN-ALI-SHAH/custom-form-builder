import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Form from "@/schemas/form.schema";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await connectDB();

  try {
    const formId = request.headers.get("formId");
    const session = await auth();
    if (!session) {
      return NextResponse.json(
        { error: "Authentication Error" },
        { status: 401 }
      );
    }

    if (!formId) {
      return NextResponse.json(
        { error: "Invalid Form" },
        { status: 400 }
      );
    }

    const checkFormOwnership = await Form.findOne({
      _id: formId,
      author: session?.user?.id,
    });

    if (!checkFormOwnership) {
      return NextResponse.json(
        { error: "You do not own this form" },
        { status: 403 }
      );
    }

    return NextResponse.json({ form:checkFormOwnership }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Failed to submit form" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
