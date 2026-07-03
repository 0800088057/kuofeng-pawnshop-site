import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { navigation, siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 h-[72px] w-full border-b-4 border-brand-blue bg-white">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3" aria-label="回到首頁">
          <Image
            src="/assets/old-blue/kuofeng-mark.jpg"
            alt="國豐當舖商標"
            width={56}
            height={56}
            className="h-12 w-12 rounded-full object-cover"
            priority
          />
          <span className="text-xl font-black tracking-wide text-brand-deep">
            KF<span className="text-brand-blue">國豐當舖</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="主要導覽">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold tracking-wide text-brand-dark transition hover:text-brand-blue"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${siteConfig.phone}`}
          className="hidden items-center gap-2 rounded-full bg-brand-yellow px-4 py-2 text-sm font-black text-brand-dark comic-border lg:inline-flex"
        >
          <Phone className="h-4 w-4" />
          {siteConfig.phone}
        </a>

        <details className="relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full bg-brand-blue text-white">
            <Menu className="h-7 w-7" aria-hidden="true" />
          </summary>
          <div className="absolute right-0 top-14 w-[min(86vw,320px)] rounded-b-2xl border-4 border-brand-dark bg-white p-3 shadow-comic">
            <nav className="grid gap-1" aria-label="行動版導覽">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-xl px-4 py-3 text-base font-bold text-brand-dark hover:bg-sky-50">
                  {item.label}
                </Link>
              ))}
            </nav>
            <a href={`tel:${siteConfig.phone}`} className="mt-3 flex items-center justify-center rounded-full bg-brand-yellow px-4 py-3 text-sm font-black text-brand-dark">
              {siteConfig.phone}
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
