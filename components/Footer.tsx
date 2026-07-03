import Link from "next/link";
import { navigation, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-[960px] flex-col gap-5 border-t border-slate-200 px-4 pb-8 pt-5 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>Copyright 2026 {siteConfig.name}. All rights reserved.</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="頁尾導覽">
          {navigation.slice(0, 6).map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
