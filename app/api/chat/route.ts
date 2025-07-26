// app/api/chat/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const userMessage = body.message;

  const systemPrompt = `
You are a helpful assistant that knows everything about Vaibhavi G, a software developer.
Only answer questions about her portfolio, education, skills, projects, resume, achievements, and internships.
`;

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
        temperature: 0.7,
      }),
    });

    const data = await res.json();
    const reply =
      data.choices?.[0]?.message?.content || "Sorry, I don't know that.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("ChatGPT API Error:", error);
    return NextResponse.json(
      { reply: "Oops! Something went wrong." },
      { status: 500 }
    );
  }
}
