"use client";

import { FormEvent, useState } from "react";
import { services } from "@/data/site-content";

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>({ type: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ type: "loading" });

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      address: String(formData.get("address") ?? ""),
      city: String(formData.get("city") ?? ""),
      serviceNeeded: String(formData.get("serviceNeeded") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus({
          type: "error",
          message: data.message ?? "Something went wrong. Please try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        message: data.message ?? "Thanks. We will contact you soon.",
      });
      event.currentTarget.reset();
    } catch {
      setStatus({
        type: "error",
        message: "Unable to submit right now. Please call us directly.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#dbe8df] bg-white p-5 shadow-[0_20px_45px_-30px_rgba(17,35,26,0.6)] sm:p-6"
    >
      <h3 className="text-xl font-semibold text-[#15291f]">Get a Free Quote</h3>
      <p className="mt-1 text-sm text-[#486256]">Quick response from our local team.</p>

      <div className={`mt-4 grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        <input name="name" placeholder="Full name" required className="input" />
        <input name="phone" placeholder="Phone" required className="input" />
        <input name="email" type="email" placeholder="Email" required className="input" />
        <input name="city" placeholder="City" required className="input" />
        <input
          name="address"
          placeholder="Service address"
          required
          className={`input ${compact ? "" : "sm:col-span-2"}`}
        />
        <select name="serviceNeeded" required className={`input ${compact ? "" : "sm:col-span-2"}`}>
          <option value="">Service needed</option>
          {services.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
        <textarea
          name="message"
          placeholder="Tell us what you're seeing"
          required
          rows={4}
          className={`input ${compact ? "" : "sm:col-span-2"}`}
        />
      </div>

      <button
        type="submit"
        disabled={status.type === "loading"}
        className="mt-4 w-full rounded-full bg-[#63c543] px-4 py-3 text-sm font-semibold text-[#102116] transition hover:bg-[#7ad45d] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status.type === "loading" ? "Submitting..." : "Request My Free Quote"}
      </button>

      {status.type === "success" ? (
        <p className="mt-3 rounded-lg bg-[#ecf9e8] px-3 py-2 text-sm text-[#1f6125]">{status.message}</p>
      ) : null}

      {status.type === "error" ? (
        <p className="mt-3 rounded-lg bg-[#fff0f0] px-3 py-2 text-sm text-[#9f1d1d]">{status.message}</p>
      ) : null}
    </form>
  );
}
