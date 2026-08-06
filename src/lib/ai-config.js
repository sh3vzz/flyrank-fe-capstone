import { google } from "@ai-sdk/google";

// 1. Select the Gemini model
export const chatModel = google("gemini-1.5-flash");

// 2. Define the system instructions for the AI
export const SYSTEM_PROMPT = `You are a helpful, clear, and friendly AI assistant.
Answer questions accurately, concisely, and keep explanations easy to follow.`;
