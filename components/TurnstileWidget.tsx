"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";

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
  onStatusChange?: (status: "success" | "error" | "expired") => void;
};

export function TurnstileWidget({ siteKey, resetIndex, onTokenChange, onStatusChange }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onTokenChangeRef = useRef(onTokenChange);
  const onStatusChangeRef = useRef(onStatusChange);
  const [isReady, setIsReady] = useState(false);
  const [widgetError, setWidgetError] = useState(false);

  useEffect(() => {
    setIsReady(Boolean(window.turnstile));
  }, []);

  useEffect(() => {
    onTokenChangeRef.current = onTokenChange;
  }, [onTokenChange]);

  useEffect(() => {
    onStatusChangeRef.current = onStatusChange;
  }, [onStatusChange]);

  useEffect(() => {
    if (!isReady || !window.turnstile || !containerRef.current || widgetIdRef.current) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action: "contact_form",
      theme: "light",
      callback: (token) => {
        setWidgetError(false);
        onTokenChangeRef.current(token);
        onStatusChangeRef.current?.("success");
      },
      "expired-callback": () => {
        onTokenChangeRef.current("");
        onStatusChangeRef.current?.("expired");
      },
      "error-callback": () => {
        setWidgetError(true);
        onTokenChangeRef.current("");
        onStatusChangeRef.current?.("error");
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
      setWidgetError(false);
      window.turnstile?.reset(widgetIdRef.current);
    }
  }, [resetIndex]);

  const retryWidget = () => {
    if (!widgetIdRef.current) return;
    setWidgetError(false);
    onTokenChangeRef.current("");
    window.turnstile?.reset(widgetIdRef.current);
  };

  return (
    <div>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onLoad={() => setIsReady(true)} />
      <div ref={containerRef} aria-live="polite" />
      {widgetError ? (
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2" role="alert">
          <p className="text-sm font-bold text-red-600">安全驗證暫時無法載入，請重新載入驗證；若仍失敗可改用電話或 LINE 聯絡。</p>
          <button
            type="button"
            onClick={retryWidget}
            className="inline-flex items-center gap-1.5 rounded-full border border-brand-blue/30 bg-white px-3 py-1.5 text-sm font-black text-brand-blue transition hover:border-brand-blue hover:bg-sky-50"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            重新載入驗證
          </button>
        </div>
      ) : null}
    </div>
  );
}
