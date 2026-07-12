"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, LoaderCircle, MessageCircle, Phone, RotateCcw } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { contactFormSchema } from "@/lib/validation";
import { trackEvent } from "@/components/Analytics";
import { TurnstileWidget } from "@/components/TurnstileWidget";

type FormState = {
  name: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
  turnstileToken: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  service: "",
  message: "",
  consent: false,
  turnstileToken: "",
  website: "",
};

const turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [turnstileResetIndex, setTurnstileResetIndex] = useState(0);

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("idle");
    setStatusMessage("");
    if (turnstileSiteKey && !form.turnstileToken) {
      setErrors({ turnstileToken: "請先完成安全驗證" });
      return;
    }
    const parsed = contactFormSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors(Object.fromEntries(Object.entries(fieldErrors).map(([key, value]) => [key, value?.[0]])) as Partial<Record<keyof FormState, string>>);
      return;
    }

    try {
      setStatus("submitting");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(result.message || "送出失敗，請稍後再試。");
        setTurnstileResetIndex((current) => current + 1);
        update("turnstileToken", "");
        return;
      }

      setStatus("success");
      setStatusMessage(result.message || "已收到您的諮詢資料。");
      trackEvent("generate_lead", { form_name: "contact_form", service: form.service || "unspecified" });
      setForm(initialState);
    } catch {
      setStatus("error");
      setStatusMessage("目前無法送出表單，請改用電話或 LINE 聯絡。");
    }
  }

  if (status === "success") {
    return (
      <section className="modern-contact-form grid gap-5 rounded-[28px] bg-white p-6 text-center comic-border md:p-8" role="status" aria-live="polite">
        <CheckCircle2 className="mx-auto h-16 w-16 text-brand-blue" aria-hidden="true" />
        <div>
          <p className="text-sm font-black tracking-[0.18em] text-brand-blue">已收到資料</p>
          <h2 className="mt-2 text-3xl font-black text-brand-deep">感謝您的諮詢</h2>
          <p className="mx-auto mt-3 max-w-md text-base font-bold leading-8 text-slate-600">{statusMessage} 國豐當舖會依營業時間回覆；若希望立即確認，歡迎直接來電或加入 LINE。</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-3 text-sm font-black text-white">
            <Phone className="h-5 w-5" />
            立即來電
          </a>
          <a href={siteConfig.lineUrl} className="kf-mobile-line inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-black text-white">
            <MessageCircle className="h-5 w-5" />
            LINE 諮詢
          </a>
        </div>
        <button type="button" onClick={() => setStatus("idle")} className="mx-auto inline-flex items-center gap-2 text-sm font-black text-brand-blue underline underline-offset-4">
          <RotateCcw className="h-4 w-4" />
          再送一筆諮詢
        </button>
      </section>
    );
  }

  return (
    <form onSubmit={submit} className="modern-contact-form grid gap-4 rounded-[28px] bg-white p-5 comic-border md:p-7">
      <label className="hidden">
        website
        <input value={form.website} onChange={(event) => update("website", event.target.value)} tabIndex={-1} autoComplete="off" />
      </label>
      <Field label="姓名" value={form.name} error={errors.name} onChange={(value) => update("name", value)} />
      <Field label="電話" value={form.phone} error={errors.phone} onChange={(value) => update("phone", value)} placeholder="02-2599-6222 或 0912345678" />
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
      <label className="grid gap-2 text-sm font-bold leading-6 text-slate-700">
        <span className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(event) => update("consent", event.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-brand-blue"
          />
          <span>
            我已閱讀並同意<a href="/privacy" className="mx-1 text-brand-blue underline underline-offset-2">隱私權與個資蒐集告知</a>，同意國豐當舖為回覆本次諮詢而處理所填資料。
          </span>
        </span>
        {errors.consent ? <span className="text-sm text-red-600">{errors.consent}</span> : null}
      </label>
      {turnstileSiteKey ? (
        <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-3">
          <TurnstileWidget
            siteKey={turnstileSiteKey}
            resetIndex={turnstileResetIndex}
            onTokenChange={(token) => update("turnstileToken", token)}
          />
          {errors.turnstileToken ? <span className="mt-2 block text-sm font-bold text-red-600">{errors.turnstileToken}</span> : null}
        </div>
      ) : null}
      <button type="submit" disabled={status === "submitting"} className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-3 text-base font-black text-brand-dark comic-border disabled:cursor-not-allowed disabled:opacity-70">
        {status === "submitting" ? <LoaderCircle className="h-5 w-5 animate-spin" /> : null}
        {status === "submitting" ? "資料送出中..." : "送出諮詢資料"}
      </button>
      <p className="modern-contact-form__notice">
        送出後僅作為諮詢聯繫與初步了解使用，不代表承作或借款結果；實際條件以現場評估與契約為準。
      </p>
      {status === "error" ? <p role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-bold leading-7 text-red-700">{statusMessage}</p> : null}
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
