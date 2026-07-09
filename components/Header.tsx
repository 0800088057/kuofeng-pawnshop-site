"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { Menu, MessageCircle, Phone } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  }, [pathname]);

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  };

  return (
    <header className="kf-site-header fixed left-0 top-0 z-50 h-[78px] w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,.08)]">
      <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-4">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="回到首頁">
          <Image
            src="/assets/legacy-web02/i25.png"
            alt=""
            width={72}
            height={53}
            className="h-[42px] w-auto object-contain drop-shadow-[0_4px_10px_rgba(18,132,171,.22)] transition group-hover:scale-[1.03] md:h-[46px]"
            priority
          />
          <span className="relative flex items-baseline gap-1.5 whitespace-nowrap leading-none">
            <span className="text-[21px] font-black tracking-[-.04em] text-[#f2b84b] drop-shadow-[0_1px_0_rgba(114,82,11,.2)] md:text-[24px]">KF</span>
            <span className="text-[18px] font-black tracking-[-.03em] text-brand-blue md:text-[21px]">國豐當舖</span>
            <span className="absolute -bottom-2 left-[34px] h-[3px] w-[72px] rounded-full bg-gradient-to-r from-brand-blue via-sky-300 to-transparent md:left-[40px] md:w-[84px]" />
          </span>
        </Link>

        <nav className="kf-main-nav hidden items-center gap-2 lg:flex" aria-label="主要導覽">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-[13px] font-black tracking-wide text-slate-600 transition hover:bg-sky-50 hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${siteConfig.phone}`}
            aria-label={`撥打電話 ${siteConfig.phone}`}
            className="kf-header-phone flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-black text-slate-600 transition hover:border-brand-blue hover:text-brand-blue"
          >
            <Phone className="h-4 w-4" />
            <span>{siteConfig.phone}</span>
          </a>
          <a
            href={siteConfig.lineUrl}
            aria-label="LINE 諮詢"
            className="kf-header-line flex h-[38px] w-[38px] items-center justify-center rounded-full border transition"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>

        <details ref={mobileMenuRef} className="relative lg:hidden">
          <summary className="flex h-12 w-12 cursor-pointer list-none items-center justify-center text-brand-deep">
            <Menu className="h-10 w-10" aria-hidden="true" />
          </summary>
          <div className="absolute right-0 top-14 w-[min(86vw,320px)] rounded-b-2xl bg-white p-3 shadow-soft ring-1 ring-slate-100">
            <nav className="grid gap-1" aria-label="行動版導覽">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-xl px-4 py-3 text-base font-bold text-slate-700 hover:bg-sky-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={closeMobileMenu}
              className="mt-3 flex items-center justify-center rounded-full bg-brand-blue px-4 py-3 text-sm font-black text-white"
            >
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.lineUrl}
              onClick={closeMobileMenu}
              className="kf-mobile-line mt-2 flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-black text-white"
            >
              <MessageCircle className="h-4 w-4" />
              LINE 諮詢
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
