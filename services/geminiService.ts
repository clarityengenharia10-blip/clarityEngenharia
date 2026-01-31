
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getTechnicalAdvice = async (userPrompt: string) => {
  if (!process.env.API_KEY) return "O suporte técnico por IA está offline no momento. Por favor, entre em contato por telefone.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `Você é um assistente técnico da Clarity Engenharia, uma empresa brasileira de engenharia elétrica.
        Você é especialista em sistemas de alta tensão, No-breaks (UPS), estabilizadores industriais e bancos de baterias.
        Responda SEMPRE em Português do Brasil de forma profissional e técnica.
        Foque em normas brasileiras como NR-10, NR-35, NBR-5410 e NBR-14039 quando relevante.
        Se perguntarem sobre preços, direcione-os para 'Solicitar Orçamento'.
        Mantenha as respostas concisas e seguras.`,
        temperature: 0.7,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Encontrei um erro ao processar sua dúvida técnica. Por favor, tente novamente ou fale com nossa equipe de engenharia.";
  }
};
