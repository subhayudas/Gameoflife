"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CONTACT, PROPERTIES } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

const FIELD =
  "mt-2 w-full rounded-sm border border-forest-900/25 bg-paper px-4 py-3 text-[15px] text-ink outline-none transition focus:border-forest-900 focus:ring-2 focus:ring-olive/50";
const LABEL = "block text-[13px] font-semibold text-forest-900";

// Posts to Netlify Forms (the form is present in the static HTML, so Netlify detects it at deploy).
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const interest = useRef<HTMLSelectElement>(null);

  // "Partner with this property" links arrive as /partner?property=<slug>.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("property");
    if (slug && interest.current && PROPERTIES.some((p) => p.slug === slug)) interest.current.value = slug;
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
      const res = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="bg-forest-900 p-8 text-paper md:p-10">
        <h3 className="serif text-3xl">Thank you.</h3>
        <p className="mt-3 text-paper/75">We have your note and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form name="partner" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      <input type="hidden" name="form-name" value="partner" />
      <p className="hidden">
        <label>
          Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <label className={LABEL}>
        Name
        <input name="name" required autoComplete="name" className={FIELD} />
      </label>
      <label className={LABEL}>
        Company
        <input name="company" required autoComplete="organization" className={FIELD} />
      </label>
      <label className={LABEL}>
        Work email
        <input name="email" type="email" required autoComplete="email" className={FIELD} />
      </label>
      <label className={LABEL}>
        Phone <span className="font-normal text-ink/50">(optional)</span>
        <input name="phone" type="tel" autoComplete="tel" className={FIELD} />
      </label>
      <label className={`${LABEL} sm:col-span-2`}>
        I’m interested in
        <select name="interest" ref={interest} defaultValue="" className={FIELD}>
          <option value="">Not sure yet</option>
          {PROPERTIES.map((p) => (
            <option key={p.slug} value={p.slug}>
              {p.name}
            </option>
          ))}
          <option value="custom-ip">Creating custom IP</option>
        </select>
      </label>
      <label className={`${LABEL} sm:col-span-2`}>
        Message
        <textarea name="message" rows={5} required className={FIELD} />
      </label>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-sm bg-forest-900 px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-paper transition hover:bg-forest-700 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send enquiry"}
        </button>
        {status === "error" && (
          <p role="alert" className="mt-4 text-sm text-red-800">
            Something went wrong sending that. Please email us directly at{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-semibold underline underline-offset-4">
              {CONTACT.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
