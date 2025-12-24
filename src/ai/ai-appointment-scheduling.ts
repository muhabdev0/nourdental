'use server';

/**
 * @fileOverview AI-powered appointment scheduling assistant flow.
 *
 * - aiAppointmentScheduling - A function that handles the appointment scheduling process.
 * - AiAppointmentSchedulingInput - The input type for the aiAppointmentScheduling function.
 * - AiAppointmentSchedulingOutput - The return type for the aiAppointmentScheduling function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiAppointmentSchedulingInputSchema = z.object({
  serviceType: z.string().describe('The type of dental service requested.'),
  preferredDate: z.string().describe('The preferred date for the appointment.'),
  preferredTime: z.string().describe('The preferred time for the appointment.'),
  patientPreferences: z.string().describe('Any specific preferences of the patient.'),
});
export type AiAppointmentSchedulingInput = z.infer<typeof AiAppointmentSchedulingInputSchema>;

const AiAppointmentSchedulingOutputSchema = z.object({
  suggestedAppointmentTime: z.string().describe('A suggested appointment time based on availability and preferences.'),
  confirmationMessage: z.string().describe('A confirmation message for the appointment.'),
});
export type AiAppointmentSchedulingOutput = z.infer<typeof AiAppointmentSchedulingOutputSchema>;

export async function aiAppointmentScheduling(input: AiAppointmentSchedulingInput): Promise<AiAppointmentSchedulingOutput> {
  return aiAppointmentSchedulingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiAppointmentSchedulingPrompt',
  input: {schema: AiAppointmentSchedulingInputSchema},
  output: {schema: AiAppointmentSchedulingOutputSchema},
  prompt: `You are an AI-powered assistant that helps patients schedule dental appointments. Based on the requested service, date, time and any patient preferences, suggest a suitable appointment time and provide a confirmation message.

Service Type: {{{serviceType}}}
Preferred Date: {{{preferredDate}}}
Preferred Time: {{{preferredTime}}}
Patient Preferences: {{{patientPreferences}}}

Consider dentist availability and minimize the number of steps required to book the appointment. Return the suggested time and confirmation message in Arabic.
`,
});

const aiAppointmentSchedulingFlow = ai.defineFlow(
  {
    name: 'aiAppointmentSchedulingFlow',
    inputSchema: AiAppointmentSchedulingInputSchema,
    outputSchema: AiAppointmentSchedulingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
