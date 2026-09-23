"use server";

import { contact } from "@/content/site";
import { sendInquiryEmail } from "@/lib/email";
import {
  inquirySchema,
  MIN_FILL_TIME_MS,
  type InquiryField,
  type InquiryState,
} from "@/lib/inquiry";

/**
 * Investor inquiry server action.
 * Spam protection: a hidden honeypot field plus a minimum fill time. Bots that
 * trip either get a normal-looking success response so they learn nothing.
 */
export async function submitInquiry(_prev: InquiryState, formData: FormData): Promise<InquiryState> {
  const honeypot = String(formData.get("website") ?? "");
  const startedAt = Number(formData.get("startedAt") ?? 0);
  // startedAt is set client-side; it is absent for no-JS visitors, who are then
  // screened by the honeypot alone rather than being silently dropped.
  const tooFast = startedAt > 0 && Date.now() - startedAt < MIN_FILL_TIME_MS;

  if (honeypot.trim() !== "" || tooFast) {
    return { status: "success", message: contact.form.success };
  }

  const raw = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    organization: String(formData.get("organization") ?? ""),
    investorType: String(formData.get("investorType") ?? ""),
    message: String(formData.get("message") ?? ""),
    ndaRequested: formData.get("ndaRequested") === "on",
  };

  const parsed = inquirySchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Partial<Record<InquiryField, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as InquiryField | undefined;
      if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors,
      values: raw,
    };
  }

  try {
    await sendInquiryEmail(parsed.data);
  } catch (err) {
    console.error("[inquiry] delivery failed", err instanceof Error ? err.message : err);
    return { status: "error", message: contact.form.genericError, values: raw };
  }

  return { status: "success", message: contact.form.success };
}
