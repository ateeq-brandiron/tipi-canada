import { z } from "zod";
import { contact } from "@/content/site";

export const investorTypeValues = contact.form.investorTypes.map((t) => t.value) as [string, ...string[]];

/** Minimum time (ms) between render and submit; faster submissions are treated as bots. */
export const MIN_FILL_TIME_MS = 3000;

export const inquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120, "Name is too long."),
  email: z
    .string()
    .trim()
    .max(254, "Email is too long.")
    .pipe(z.email("Please enter a valid email address.")),
  organization: z.string().trim().max(160, "Organization name is too long.").optional().default(""),
  investorType: z.enum(investorTypeValues, { error: "Please select the option that best describes you." }),
  message: z
    .string()
    .trim()
    .min(10, "Please include a short message (at least 10 characters).")
    .max(4000, "Message is too long (4,000 characters maximum)."),
  ndaRequested: z.boolean(),
});

export type Inquiry = z.infer<typeof inquirySchema>;

export type InquiryField = keyof Inquiry;

export type InquiryState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<InquiryField, string>>;
      /** Echo back what the user typed so a failed submit doesn't wipe the form. */
      values?: Partial<Record<InquiryField, string | boolean>>;
    };
