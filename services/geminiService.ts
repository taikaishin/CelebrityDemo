import { GoogleGenAI, Type } from "@google/genai";
import { NewsArticle } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const generateNewsArticles = async (): Promise<NewsArticle[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Generate 3 exciting, fictional news articles about the recent activities of a legendary celebrity named Li Feng. For each article, provide a realistic date from the last month, a catchy title, a short excerpt of about 20-30 words, and the full article content of about 2-3 paragraphs. Return the result as a JSON array.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              date: {
                type: Type.STRING,
                description: "The date of the news article, e.g., 'August 5, 2024'."
              },
              title: {
                type: Type.STRING,
                description: "The catchy headline of the news article."
              },
              excerpt: {
                type: Type.STRING,
                description: "A short summary of the news article."
              },
              content: {
                type: Type.STRING,
                description: "The full content of the article, 2-3 paragraphs long."
              }
            },
            required: ["date", "title", "excerpt", "content"],
          },
        },
      },
    });
    
    const jsonStr = response.text.trim();
    const articles: NewsArticle[] = JSON.parse(jsonStr);
    return articles;
  } catch (error) {
    console.error("Error generating news articles:", error);
    // Return mock data on failure
    return [
      { date: "Just now", title: "API Error: Could not fetch news", excerpt: "There was an issue connecting to the content generation service.", content: "Please check your API key and network connection. This is fallback content." },
      { date: "Just now", title: "Fallback Content Example 1", excerpt: "This is placeholder content shown when the AI service is unavailable.", content: "This is the full article content for the first fallback example. It provides more detail than the excerpt." },
      { date: "Just now", title: "Fallback Content Example 2", excerpt: "This ensures the UI remains populated even when there's an API error.", content: "This is the full article content for the second fallback example, ensuring a consistent user experience during API outages." },
    ];
  }
};

export const generateProfileBio = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Write an engaging and concise biography (around 150 words) for a world-famous, widely-acclaimed celebrity named Li Feng, known for their incredible talent and charismatic personality. Highlight their major achievements.",
    });

    return response.text;
  } catch (error) {
    console.error("Error generating profile biography:", error);
    return "Failed to load biography. Li Feng is a legendary celebrity, celebrated for their incredible talent and contributions to their field. Their career is highlighted by numerous awards and iconic moments that have captured the hearts of millions. (Fallback content)";
  }
};