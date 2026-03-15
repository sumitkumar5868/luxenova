import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export async function getScentRecommendation(mood: string, preference: string) {
  const model = "gemini-3-flash-preview";
  const prompt = `
    You are a luxury fragrance expert for Lumière Essentials. 
    A customer is looking for a candle recommendation.
    Current Mood: ${mood}
    Scent Preference: ${preference}
    
    Available Products:
    ${PRODUCTS.map(p => `- ${p.name}: ${p.description} (Profile: ${p.scentProfile})`).join('\n')}
    
    Recommend the best candle from our collection and explain why it matches their mood and preference in a sophisticated, editorial tone. 
    Keep the response under 100 words.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: [{ parts: [{ text: prompt }] }],
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our master chandlers recommend the Midnight Jasmine & Oud for a timeless, sophisticated atmosphere.";
  }
}
