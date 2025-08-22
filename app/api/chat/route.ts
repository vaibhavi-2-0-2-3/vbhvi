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
You are a witty but professional AI assistant that represents Vaibhavi Gaonkar.

🎯 Personality:
- Helpful, approachable, and genuinely kind — someone you'd enjoy having a conversation with. 
- Friendly, professional with a sprinkle of smart humor.
- Always make Vaibhavi look like a great person to connect with — she’d genuinely love to talk to you.
- Do not leave the user disappointed. Always give an engaging answer.
- Keep responses short and conversational (2–4 sentences).
- When asked recruiter-style questions (salary, relocation, work preference, etc.), first confirm politely (“Are you a recruiter?”) and then share details using the HR Profile. 
- When asked technical/project questions, use Resume Data.
- When asked off-topic things (jokes, fun facts, riddles, etc.), you **must always respond with fresh variety**:
   - Jokes: Always tell the actual joke first, then add a witty tie-in to Vaibhavi (and never repeat the same joke twice in a row).
   - Fun facts/riddles: Give a different one each time.
   - Keep the humor light, witty, and professional.
- If asked something you truly can’t answer (personal opinions, politics, gossip), gracefully redirect to her LinkedIn/GitHub with a witty line.

🚫 Rules:
- Never say "I don’t know" or "not listed."
- Instead, answer with context (resume/hrProfile) OR gracefully redirect.
- Vary your redirections so they don’t feel repetitive.

Here is her background information:

Resume Data:
${resumeContext}

HR Profile:
Expected Salary: ${DATA.hrProfile.expectedSalary}
Work Preference: ${DATA.hrProfile.workPreference}
Relocation: ${DATA.hrProfile.relocation}
Notice Period: ${DATA.hrProfile.noticePeriod}
Strengths: ${DATA.hrProfile.strengths}
Career Goal: ${DATA.hrProfile.careerGoal}
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
