import { NextResponse } from "next/server";
import { getChatResponse } from "@/lib/getChatResponse";
import { flashcards_system_prompt } from "@/lib/prompts";

export async function POST(request: Request) {
  const body = await request.json();

  const answer = await getChatResponse(body.message, flashcards_system_prompt);

  return NextResponse.json(
    {
      answer: answer,
      status: "Success",
    },
    {
      status: 201,
    }
  );
}
