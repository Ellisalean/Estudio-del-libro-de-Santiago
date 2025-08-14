import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

const getAIClient = (): GoogleGenAI => {
    if (!process.env.API_KEY) {
        throw new Error("API Key de Google no configurada. Por favor, asegúrese de que la variable de entorno API_KEY esté definida para usar las funciones de IA.");
    }

    if (!ai) {
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return ai;
};

export const generateAmplifiedText = async (topic: string, baseText: string): Promise<string> => {
    try {
        const client = getAIClient();
        const prompt = `Actúa como un teólogo y erudito bíblico. Tu tarea es ampliar el siguiente texto sobre el Libro de Santiago. Proporciona más detalles, contexto y análisis. Mantén un tono didáctico, claro y respetuoso. La respuesta debe estar en español y formateada en HTML simple (usa <strong> para negrita y <p> para párrafos).
        Tema: "${topic}"
        Texto base a ampliar: "${baseText}"
        Por favor, elabora sobre los puntos clave del texto base, ofreciendo una perspectiva más profunda.`;
        const response = await client.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: { temperature: 0.7 }
        });
        return response.text;
    } catch (error) {
        console.error("Error generating amplified text:", error);
         if (error instanceof Error) {
            throw error;
        }
        throw new Error("No se pudo ampliar la información. Inténtalo de nuevo.");
    }
};
