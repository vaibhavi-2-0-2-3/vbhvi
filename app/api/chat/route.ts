import { NextRequest, NextResponse } from "next/server";
import { DATA } from "@/data/resume";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const userMessage = body.message;

  // Convert resume data into context string
  const resumeContext = `
Name: ${DATA.name}
Description: ${DATA.description}
Summary: ${DATA.summary}
Skills: ${DATA.skills.join(", ")}
Projects:
${DATA.projects.map((p) => `- ${p.title}: ${p.description}`).join("\n")}
`;

  const systemPrompt = `
You are a helpful assistant that knows everything about Vaibhavi G.
Only answer questions about her portfolio, education, skills, projects, resume, achievements, and internships.
Here is her background information:
${resumeContext}
`;

  try {
    // ⚡ If no Gemini key
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({
        reply: "⚠️ Please set GEMINI_API_KEY in your .env.local file",
      });
    }

    // Call Gemini API
    const res = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: systemPrompt + "\nUser: " + userMessage }],
            },
          ],
        }),
      }
    );

    const data = await res.json();
    console.log("🔍 Gemini raw response:", JSON.stringify(data, null, 2));

    let reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "⚠️ Unexpected response format.";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { reply: "⚠️ Something went wrong with Gemini API." },
      { status: 500 }
    );
  }
}
