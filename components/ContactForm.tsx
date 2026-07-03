"use client";

import { FormEvent, useState } from "react";
import { services } from "@/data/services";
import { contactFormSchema } from "@/lib/validation";

type FormState = {
  name: string;
  phone: string;
  service: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  service: "",
  message: "",
  website: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState("");

  function update(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("");
    const parsed = contactFormSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors(Object.fromEntries(Object.entries(fieldErrors).map(([key, value]) => [key, value?.[0]])) as Partial<Record<keyof FormState, string>>);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus(result.message || "送出失敗，請稍後再試。");
        return;
      }

      setStatus(result.message || "已收到您的諮詢資料。");
      setForm(initialState);
    } catch {
      setStatus("目前無法送出表單，請改用電話或 LINE 聯絡。");
    }
  }

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-[28px] bg-white p-5 comic-border md:p-7">
      <label className="hidden">
        website
        <input value={form.website} onChange={(event) => update("website", event.target.value)} tabIndex={-1} autoComplete="off" />
      </label>
      <Field label="姓名" value={form.name} error={errors.name} onChange={(value) => update("name", value)} />
      <Field label="電話" value={form.phone} error={errors.phone} onChange={(value) => update("phone", value)} placeholder="02-2599-3130 或 0912345678" />
      <label className="grid gap-2 text-sm font-black text-brand-dark">
        需求項目
        <select value={form.service} onChange={(event) => update("service", event.target.value)} className="h-12 rounded-2xl border-2 border-brand-blue/40 px-4 text-base outline-none focus:border-brand-blue">
          <option value="">請選擇</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.service ? <span className="text-sm text-red-600">{errors.service}</span> : null}
      </label>
      <label className="grid gap-2 text-sm font-black text-brand-dark">
        備註
        <textarea value={form.message} onChange={(event) => update("message", event.target.value)} rows={5} className="rounded-2xl border-2 border-brand-blue/40 px-4 py-3 text-base outline-none focus:border-brand-blue" placeholder="可簡述需求、方便聯絡時間或物件狀況" />
        {errors.message ? <span className="text-sm text-red-600">{errors.message}</span> : null}
      </label>
      <button type="submit" className="rounded-full bg-brand-yellow px-6 py-3 text-base font-black text-brand-dark comic-border">
        送出諮詢
      </button>
      {status ? <p className="rounded-2xl bg-sky-50 p-4 text-sm font-bold leading-7 text-brand-deep">{status}</p> : null}
    </form>
  );
}

function Field({
  label,
  value,
  error,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  error?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-2 text-sm font-black text-brand-dark">
      {label}
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="h-12 rounded-2xl border-2 border-brand-blue/40 px-4 text-base outline-none focus:border-brand-blue" />
      {error ? <span className="text-sm text-red-600">{error}</span> : null}
    </label>
  );
}
