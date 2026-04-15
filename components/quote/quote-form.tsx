"use client";

import { FormEvent, useMemo, useState } from "react";
import { services } from "@/data/site-content";

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

const urgencyOptions = ["Routine", "Soon", "Urgent"] as const;

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>({ type: "idle" });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [urgency, setUrgency] = useState<(typeof urgencyOptions)[number]>("Routine");

  const completion = useMemo(() => {
    const values = [name, phone, email, address, city, message];
    const completedBase = values.filter((value) => value.trim().length > 0).length;
    const completed = completedBase + (selectedServices.length > 0 ? 1 : 0);
    return {
      completed,
      total: values.length + 1,
      percent: Math.round((completed / (values.length + 1)) * 100),
    };
  }, [name, phone, email, address, city, message, selectedServices]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedServices.length) {
      setStatus({ type: "error", message: "Select at least one service to continue." });
      return;
    }

    setStatus({ type: "loading" });

    const payload = {
      name,
      phone,
      email,
      address,
      city,
      serviceNeeded: selectedServices.join(", "),
      message: `${message}\n\nUrgency: ${urgency}`,
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
      setName("");
      setPhone("");
      setEmail("");
      setAddress("");
      setCity("");
      setMessage("");
      setSelectedServices([]);
      setUrgency("Routine");
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
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-[#15291f]">Get a Free Quote</h3>
          <p className="mt-1 text-sm text-[#486256]">Quick response from our local team.</p>
        </div>
        <div className="min-w-[120px] rounded-xl border border-[#d9e6de] bg-[#f5faf7] px-3 py-2 text-right">
          <p className="text-[11px] uppercase tracking-[0.16em] text-[#648073]">Quote Ready</p>
          <p className="text-sm font-semibold text-[#244335]">{completion.percent}%</p>
        </div>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#e7f0ea]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#56b93b] to-[#81d968] transition-all duration-500"
          style={{ width: `${completion.percent}%` }}
        />
      </div>

      <div className={`mt-4 grid gap-3 ${compact ? "" : "sm:grid-cols-2"}`}>
        <input
          name="name"
          placeholder="Full name"
          required
          className="input"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          name="phone"
          placeholder="Phone"
          required
          className="input"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          name="city"
          placeholder="City"
          required
          className="input"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <input
          name="address"
          placeholder="Service address"
          required
          className={`input ${compact ? "" : "sm:col-span-2"}`}
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <textarea
          name="message"
          placeholder="Tell us what you're seeing"
          required
          rows={4}
          className={`input ${compact ? "" : "sm:col-span-2"}`}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#57796a]">Select Services (choose all that apply)</p>
        <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {services.map((service) => {
            const active = selectedServices.includes(service.name);
            return (
              <button
                key={service.slug}
                type="button"
                onClick={() =>
                  setSelectedServices((current) =>
                    current.includes(service.name)
                      ? current.filter((name) => name !== service.name)
                      : [...current, service.name],
                  )
                }
                className={`rounded-xl border px-3 py-2 text-left text-xs font-semibold transition sm:text-sm ${
                  active
                    ? "border-[#66c74a] bg-[#ebf8e7] text-[#20452f] shadow-[0_8px_20px_-14px_rgba(39,98,43,0.7)]"
                    : "border-[#d6e4dc] bg-white text-[#4b6659] hover:border-[#91d77c] hover:bg-[#f7fcf6]"
                }`}
              >
                {service.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#57796a]">Urgency</p>
        <div className="mt-2 inline-flex rounded-full border border-[#d7e5dd] bg-[#f6faf7] p-1">
          {urgencyOptions.map((option) => {
            const active = option === urgency;
            return (
              <button
                key={option}
                type="button"
                onClick={() => setUrgency(option)}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition sm:text-sm ${
                  active ? "bg-[#63c543] text-[#0d1e13]" : "text-[#4a6458]"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
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
