"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type TurnstileOptions = {
  sitekey: string;
  action: string;
  theme: "light" | "dark" | "auto";
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
};

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: TurnstileOptions) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

type TurnstileWidgetProps = {
  siteKey: string;
  resetIndex: number;
  onTokenChange: (token: string) => void;
};

export function TurnstileWidget({ siteKey, resetIndex, onTokenChange }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenChangeRef = useRef(onTokenChange);
  const [isReady, setIsReady] = useState(false);
  const [widgetError, setWidgetError] = useState(false);

  useEffect(() => {
    setIsReady(Boolean(window.turnstile));
  }, []);

  useEffect(() => {
    onTokenChangeRef.current = onTokenChange;
  }, [onTokenChange]);

  useEffect(() => {
    if (!isReady || !window.turnstile || !containerRef.current || widgetIdRef.current) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action: "contact_form",
      theme: "light",
      callback: (token) => {
        setWidgetError(false);
        onTokenChangeRef.current(token);
      },
      "expired-callback": () => onTokenChangeRef.current(""),
      "error-callback": () => {
        setWidgetError(true);
        onTokenChangeRef.current("");
      },
    });

    return () => {
      if (widgetIdRef.current) {
        window.turnstile?.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [isReady, siteKey]);

  useEffect(() => {
    if (resetIndex > 0 && widgetIdRef.current) {
      window.turnstile?.reset(widgetIdRef.current);
    }
  }, [resetIndex]);

  return (
    <div>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onLoad={() => setIsReady(true)} />
      <div ref={containerRef} />
      {widgetError ? <p className="mt-2 text-sm font-bold text-red-600">安全驗證暫時無法載入，請重新整理頁面或改用電話、LINE 聯絡。</p> : null}
    </div>
  );
}
