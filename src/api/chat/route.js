import { streamText } from "ai";
import { chatModel, SYSTEM_PROMPT } from "../../lib/ai-config.js";

// Set maximum duration for streaming (in seconds)
export const maxDuration = 30;

export async function POST(req) {
  try {
    // 1. Extract the messages sent from the frontend chat UI
    const { messages } = await req.json();

    // 2. Call Gemini with streamText
    const result = streamText({
      model: chatModel,
      system: SYSTEM_PROMPT,
      messages,
    });

    // 3. Convert the response stream into a standard HTTP response format
    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error in chat route:", error);
    return new Response("Failed to generate AI response", { status: 500 });
  }
}
