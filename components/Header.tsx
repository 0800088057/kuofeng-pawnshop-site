import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, Phone } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="kf-site-header fixed left-0 top-0 z-50 h-[78px] w-full bg-white shadow-[0_2px_10px_rgba(0,0,0,.08)]">
      <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3" aria-label="回到首頁">
          <Image
            src="/assets/legacy-web02/logo.png"
            alt="KF 國豐當舖"
            width={265}
            height={50}
            className="h-auto w-[150px] md:w-[172px]"
            priority
          />
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
            className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-slate-300 text-slate-500 transition hover:border-brand-blue hover:text-brand-blue"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>

        <details className="relative lg:hidden">
          <summary className="flex h-12 w-12 cursor-pointer list-none items-center justify-center text-brand-deep">
            <Menu className="h-10 w-10" aria-hidden="true" />
          </summary>
          <div className="absolute right-0 top-14 w-[min(86vw,320px)] rounded-b-2xl bg-white p-3 shadow-soft ring-1 ring-slate-100">
            <nav className="grid gap-1" aria-label="行動版導覽">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-xl px-4 py-3 text-base font-bold text-slate-700 hover:bg-sky-50">
                  {item.label}
                </Link>
              ))}
            </nav>
            <a href={`tel:${siteConfig.phone}`} className="mt-3 flex items-center justify-center rounded-full bg-brand-blue px-4 py-3 text-sm font-black text-white">
              {siteConfig.phone}
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
