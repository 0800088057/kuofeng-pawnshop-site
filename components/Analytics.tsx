"use client";

import { useEffect } from "react";

type AnalyticsEventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (command: "event", eventName: string, parameters?: AnalyticsEventParams) => void;
  }
}

export function trackEvent(eventName: string, parameters?: AnalyticsEventParams) {
  window.gtag?.("event", eventName, parameters);
}

export function Analytics() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.href;
      if (href.startsWith("tel:")) {
        trackEvent("contact", { contact_method: "phone", link_location: window.location.pathname });
      }

      if (href.includes("lin.ee/")) {
        trackEvent("contact", { contact_method: "line", link_location: window.location.pathname });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
