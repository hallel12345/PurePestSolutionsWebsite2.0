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

function formatQuoteText(submission: QuoteSubmission) {
  return [
    "New Pure Pest Solutions Quote Request",
    "",
    `Name: ${submission.name}`,
    `Phone: ${submission.phone}`,
    `Email: ${submission.email}`,
    `Address: ${submission.address}`,
    `City: ${submission.city}`,
    `Service(s): ${submission.serviceNeeded}`,
    "",
    "Message:",
    submission.message,
  ].join("\n");
}

class ConsoleQuoteAdapter implements QuoteDeliveryAdapter {
  async send(submission: QuoteSubmission): Promise<QuoteDeliveryResult> {
    console.info("[QUOTE_SUBMISSION_FALLBACK]", submission);

    return {
      ok: true,
      message: "Quote request received. Our team will contact you shortly.",
    };
  }
}

class ResendQuoteAdapter implements QuoteDeliveryAdapter {
  constructor(
    private readonly apiKey: string,
    private readonly toEmail: string,
    private readonly fromEmail: string,
  ) {}

  async send(submission: QuoteSubmission): Promise<QuoteDeliveryResult> {
    const text = formatQuoteText(submission);

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: this.fromEmail,
        to: [this.toEmail],
        reply_to: submission.email,
        subject: `New Quote Request - ${submission.name}`,
        text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[RESEND_QUOTE_ERROR]", errorText);

      // Fallback: keep the lead by logging the full submission server-side.
      // This prevents user-facing quote failures while email config is being finalized.
      console.info("[QUOTE_SUBMISSION_FALLBACK]", submission);

      return {
        ok: true,
        message: "Quote request received. Our team will contact you shortly.",
      };
    }

    return {
      ok: true,
      message: "Quote request received. Our team will contact you shortly.",
    };
  }
}

export function getQuoteDeliveryAdapter(): QuoteDeliveryAdapter {
  const resendApiKey = process.env.RESEND_API_KEY;
  const quoteEmailTo = process.env.QUOTE_EMAIL_TO ?? "purepest.ut@gmail.com";
  const quoteEmailFrom = process.env.QUOTE_EMAIL_FROM ?? "purepest.ut@gmail.com";

  if (resendApiKey && quoteEmailTo && quoteEmailFrom) {
    return new ResendQuoteAdapter(resendApiKey, quoteEmailTo, quoteEmailFrom);
  }

  return new ConsoleQuoteAdapter();
}
