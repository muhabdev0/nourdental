'use server';

import { faqChatbot } from '@/ai/flows/faq-chatbot';

export async function askQuestion(question: string) {
  try {
    const result = await faqChatbot({ question });
    return { answer: result.answer };
  } catch (error) {
    console.error('Error in askQuestion server action:', error);
    return { error: 'عذرًا، أنا أواجه صعوبة في الرد الآن. الرجاء المحاولة مرة أخرى في وقت لاحق.' };
  }
}
