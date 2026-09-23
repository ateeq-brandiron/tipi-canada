"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitInquiry } from "@/app/actions";
import { contact } from "@/content/site";
import type { InquiryField, InquiryState } from "@/lib/inquiry";
import { buttonClasses } from "@/components/ui/Button";

const initialState: InquiryState = { status: "idle" };

const inputClasses =
  "mt-2 block w-full rounded-sm border border-black/40 bg-white px-3.5 py-3 text-base text-black placeholder:text-ink-muted/70 aria-[invalid=true]:border-red aria-[invalid=true]:border-2";

export function ContactForm() {
  const { form } = contact;
  const [state, formAction, pending] = useActionState(submitInquiry, initialState);
  const startedAtRef = useRef(0);
  const startedInputRef = useRef<HTMLInputElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Time-trap: record when the form first became interactive, and keep that
  // timestamp across remounts (e.g. after a validation error).
  useEffect(() => {
    if (!startedAtRef.current) startedAtRef.current = Date.now();
    if (startedInputRef.current) startedInputRef.current.value = String(startedAtRef.current);
  });

  // Move focus to the status message so screen-reader and keyboard users hear the result.
  useEffect(() => {
    if (state.status === "idle") return;
    statusRef.current?.focus();
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  const errors = state.status === "error" ? state.fieldErrors ?? {} : {};
  const values = state.status === "error" ? state.values ?? {} : {};
  const val = (k: InquiryField) => (typeof values[k] === "string" ? (values[k] as string) : undefined);
  const errorProps = (k: InquiryField) =>
    errors[k] ? { "aria-invalid": true as const, "aria-describedby": `${k}-error` } : {};

  // Remount inputs after each failed submit so defaultValue reflects the echoed values.
  const formKey = state.status === "error" ? JSON.stringify(values) : "form";

  if (state.status === "success") {
    return (
      <div ref={statusRef} tabIndex={-1} role="status" className="bg-white p-8 text-black md:p-10">
        <p className="type-subhead">{form.successHeading}</p>
        <p className="mt-3 text-ink-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      key={formKey}
      action={formAction}
      noValidate
      className="bg-white p-6 text-black sm:p-8 md:p-10"
      aria-describedby="form-privacy"
    >
      <div ref={statusRef} tabIndex={-1} aria-live="polite">
        {state.status === "error" && (
          <p role="alert" className="mb-6 border-l-4 border-red bg-paper px-4 py-3 font-bold text-red">
            {state.message}
          </p>
        )}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label={form.fields.name} error={errors.name} required>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={120}
            defaultValue={val("name")}
            className={inputClasses}
            {...errorProps("name")}
          />
        </Field>

        <Field id="email" label={form.fields.email} error={errors.email} required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            maxLength={254}
            defaultValue={val("email")}
            className={inputClasses}
            {...errorProps("email")}
          />
        </Field>

        <Field id="organization" label={form.fields.organization} error={errors.organization}>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            maxLength={160}
            defaultValue={val("organization")}
            className={inputClasses}
            {...errorProps("organization")}
          />
        </Field>

        <Field id="investorType" label={form.fields.investorType} error={errors.investorType} required>
          <div className="relative">
            <select
              id="investorType"
              name="investorType"
              required
              defaultValue={val("investorType") ?? ""}
              className={`${inputClasses} appearance-none pr-10`}
              {...errorProps("investorType")}
            >
              <option value="" disabled>
                Select one
              </option>
              {form.investorTypes.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute right-4 top-1/2 mt-1 h-2 w-3"
              viewBox="0 0 12 8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M1 1l5 5 5-5" />
            </svg>
          </div>
        </Field>

        <div className="sm:col-span-2">
          <Field id="message" label={form.fields.message} error={errors.message} required>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              maxLength={4000}
              defaultValue={val("message")}
              className={inputClasses}
              {...errorProps("message")}
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="ndaRequested" className="flex cursor-pointer items-start gap-3">
            <input
              id="ndaRequested"
              name="ndaRequested"
              type="checkbox"
              defaultChecked={values.ndaRequested === true}
              className="mt-1 h-5 w-5 shrink-0 accent-forest"
            />
            <span className="text-[0.9375rem]">{form.fields.nda}</span>
          </label>
        </div>
      </div>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
      </div>
      <input ref={startedInputRef} type="hidden" name="startedAt" defaultValue="" />

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={pending} className={`${buttonClasses("solid-dark")} disabled:opacity-60`}>
          {pending ? form.submitting : form.submit}
        </button>
        <p id="form-privacy" className="text-sm text-ink-muted sm:max-w-sm">
          {form.privacyNote}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-bold">
        {label}
        {required ? (
          <span className="text-red">
            {" "}
            *<span className="sr-only"> (required)</span>
          </span>
        ) : (
          <span className="font-normal text-ink-muted"> (optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-bold text-red">
          {error}
        </p>
      )}
    </div>
  );
}
