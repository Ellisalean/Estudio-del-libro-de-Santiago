import { GoogleGenAI, Type } from "@google/genai";
import { TriviaQuestion } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const triviaSchema = {
    type: Type.OBJECT,
    properties: {
        question: { type: Type.STRING, description: "La pregunta de trivia en español." },
        options: { type: Type.ARRAY, description: "Un array de 4 posibles respuestas en formato de texto.", items: { type: Type.STRING } },
        answerIndex: { type: Type.INTEGER, description: "El índice (0-3) de la respuesta correcta en el array de opciones." },
        explanation: { type: Type.STRING, description: "Una breve explicación en español de por qué la respuesta es correcta, citando preferiblemente el capítulo y versículo." }
    },
    required: ["question", "options", "answerIndex", "explanation"]
};

export const generateTriviaQuestion = async (): Promise<TriviaQuestion> => {
    try {
        const prompt = "Genera una pregunta de trivia de opción múltiple, desafiante pero justa, sobre el contenido del Libro de Santiago en la Biblia. La pregunta debe estar en español y ser adecuada para alguien que ha estudiado el libro. Proporciona 4 opciones, el índice de la respuesta correcta y una explicación concisa.";
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: { responseMimeType: "application/json", responseSchema: triviaSchema, temperature: 1 }
        });
        const jsonText = response.text.trim();
        const parsedJson = JSON.parse(jsonText);
        
        // Basic validation
        if (!parsedJson.question || !Array.isArray(parsedJson.options) || parsedJson.options.length !== 4 || typeof parsedJson.answerIndex !== 'number' || !parsedJson.explanation) {
            throw new Error("El formato de la respuesta de la IA es inválido.");
        }
        return parsedJson;
    } catch (error) {
        console.error("Error generating trivia question:", error);
        throw new Error("No se pudo generar la pregunta de trivia. Inténtalo de nuevo.");
    }
};

export const generateAmplifiedText = async (topic: string, baseText: string): Promise<string> => {
    try {
        const prompt = `Actúa como un teólogo y erudito bíblico. Tu tarea es ampliar el siguiente texto sobre el Libro de Santiago. Proporciona más detalles, contexto y análisis. Mantén un tono didáctico, claro y respetuoso. La respuesta debe estar en español y formateada en HTML simple (usa <b> para negrita y <p> para párrafos).
        Tema: "${topic}"
        Texto base a ampliar: "${baseText}"
        Por favor, elabora sobre los puntos clave del texto base, ofreciendo una perspectiva más profunda.`;
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: { temperature: 0.7 }
        });
        return response.text;
    } catch (error) {
        console.error("Error generating amplified text:", error);
        throw new Error("No se pudo ampliar la información. Inténtalo de nuevo.");
    }
};
