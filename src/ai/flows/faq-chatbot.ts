'use server';

/**
 * @fileOverview An AI-powered FAQ chatbot for answering common questions about dental services.
 *
 * - faqChatbot - A function that handles the FAQ chatbot interactions.
 * - FAQChatbotInput - The input type for the faqChatbot function.
 * - FAQChatbotOutput - The return type for the faqChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FAQChatbotInputSchema = z.object({
  question: z.string().describe('The user question about dental services, appointments, or insurance.'),
});
export type FAQChatbotInput = z.infer<typeof FAQChatbotInputSchema>;

const FAQChatbotOutputSchema = z.object({
  answer: z.string().describe('The AI-generated answer to the user question.'),
});
export type FAQChatbotOutput = z.infer<typeof FAQChatbotOutputSchema>;

export async function faqChatbot(input: FAQChatbotInput): Promise<FAQChatbotOutput> {
  return faqChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'faqChatbotPrompt',
  input: {schema: FAQChatbotInputSchema},
  output: {schema: FAQChatbotOutputSchema},
  prompt: `You are a helpful and informative FAQ chatbot for a dental clinic called Nour Dental.
  Your goal is to answer user questions about the services offered, appointment procedures, insurance acceptance, and other related topics.
  Provide clear and concise answers in Arabic, using a friendly and professional tone.
  Use the following information to answer the questions:

  Services Offered:
  - طب الأسنان العام (General Dentistry): Basic dental care and treatments.
  - تنظيف الأسنان (Teeth Cleaning): Professional teeth cleaning services.
  - تبييض الأسنان (Teeth Whitening): Teeth whitening procedures.
  - علاج العصب (Root Canal Treatment): Root canal therapy.
  - تقويم الأسنان (Orthodontics): Braces and other orthodontic treatments.
  - طب أسنان الأطفال (Pediatric Dentistry): Dental care for children.
  - زراعة الأسنان (Dental Implants): Dental implant procedures.
  - حالات الطوارئ (Emergency Dental Services): Emergency dental care.

  Appointment Booking:
  To book an appointment, users can call us, use WhatsApp chat, or fill out the appointment booking form on our website.  They can also select a preferred date and time.

  Insurance Acceptance:
  We accept a wide range of insurance plans. Please contact us to verify if your insurance is accepted.

  Payment Options:
  We accept cash, credit cards, and online payments.

  Address:
  [Provide the actual clinic address here]

  Phone Number:
  [Provide the actual phone number here]

  WhatsApp:
  [Provide the WhatsApp link or number here]

  Email:
  [Provide the actual email address here]

  Operating Hours:
  [Provide the clinic's operating hours here]

  Question: {{{question}}}
  Answer: `,
});

const faqChatbotFlow = ai.defineFlow(
  {
    name: 'faqChatbotFlow',
    inputSchema: FAQChatbotInputSchema,
    outputSchema: FAQChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
