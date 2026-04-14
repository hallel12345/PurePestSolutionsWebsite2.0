import { z } from "zod";

export const quoteSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(10, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  address: z.string().min(4, "Please enter your service address."),
  city: z.string().min(2, "Please enter your city."),
  serviceNeeded: z.string().min(2, "Please select a service."),
  message: z.string().min(10, "Please add a few details about your pest issue."),
});

export type QuoteSubmission = z.infer<typeof quoteSchema>;

export type QuoteDeliveryResult = {
  ok: boolean;
  message: string;
};

export interface QuoteDeliveryAdapter {
  send(submission: QuoteSubmission): Promise<QuoteDeliveryResult>;
}

class ConsoleQuoteAdapter implements QuoteDeliveryAdapter {
  async send(submission: QuoteSubmission): Promise<QuoteDeliveryResult> {
    // Replace this adapter with an email provider or CRM webhook integration.
    console.info("[QUOTE_SUBMISSION]", submission);

    return {
      ok: true,
      message: "Quote request received. Our team will contact you shortly.",
    };
  }
}

export function getQuoteDeliveryAdapter(): QuoteDeliveryAdapter {
  return new ConsoleQuoteAdapter();
}
