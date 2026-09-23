import "server-only";
import { company, contact } from "@/content/site";
import type { Inquiry } from "./inquiry";

/**
 * Email delivery behind an env-configured provider.
 *
 *   EMAIL_PROVIDER=log      (default) — no email sent; inquiry is logged server-side.
 *   EMAIL_PROVIDER=resend   — sends via Resend's HTTP API. Requires:
 *                             RESEND_API_KEY, INQUIRY_TO_EMAIL, INQUIRY_FROM_EMAIL
 *
 * Add further providers (Postmark, SES, SendGrid…) by implementing `EmailProvider`.
 */

export type EmailMessage = {
  to: string;
  from: string;
  replyTo: string;
  subject: string;
  text: string;
};

interface EmailProvider {
  name: string;
  send(message: EmailMessage): Promise<void>;
}

const logProvider: EmailProvider = {
  name: "log",
  async send(message) {
    // Stub: log metadata only (no message body) to avoid storing personal data in logs.
    console.info("[inquiry] EMAIL_PROVIDER=log — email not sent", {
      to: message.to,
      subject: message.subject,
      replyTo: message.replyTo,
    });
  },
};

const resendProvider: EmailProvider = {
  name: "resend",
  async send(message) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY is not set");
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: message.from,
        to: [message.to],
        reply_to: message.replyTo,
        subject: message.subject,
        text: message.text,
      }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
  },
};

function getProvider(): EmailProvider {
  switch ((process.env.EMAIL_PROVIDER || "log").toLowerCase()) {
    case "resend":
      return resendProvider;
    case "log":
    default:
      return logProvider;
  }
}

function labelForInvestorType(value: string) {
  return contact.form.investorTypes.find((t) => t.value === value)?.label ?? value;
}

export async function sendInquiryEmail(inquiry: Inquiry) {
  const provider = getProvider();
  const to = process.env.INQUIRY_TO_EMAIL || "inquiries@example.invalid";
  const from = process.env.INQUIRY_FROM_EMAIL || `${company.name} Website <no-reply@example.invalid>`;

  const subject = `${inquiry.ndaRequested ? "[NDA REQUEST] " : ""}Investor inquiry — ${inquiry.name}${
    inquiry.organization ? ` (${inquiry.organization})` : ""
  }`;

  const text = [
    `New inquiry from the ${company.name} website`,
    "",
    `Name:          ${inquiry.name}`,
    `Email:         ${inquiry.email}`,
    `Organization:  ${inquiry.organization || "—"}`,
    `Investor type: ${labelForInvestorType(inquiry.investorType)}`,
    `NDA requested: ${inquiry.ndaRequested ? "Yes" : "No"}`,
    "",
    "Message:",
    inquiry.message,
  ].join("\n");

  await provider.send({ to, from, replyTo: inquiry.email, subject, text });
  return { provider: provider.name };
}
