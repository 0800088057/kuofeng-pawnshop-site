import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { navigation, quickLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="kf-footer bg-white">
      <div className="mx-auto grid max-w-[1180px] gap-8 px-4 py-10 md:grid-cols-[1.15fr_.85fr_.85fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 rounded-2xl bg-white/95 px-3 py-2 shadow-sm" aria-label="回到國豐當舖首頁">
            <Image
              src="/assets/legacy-web02/i25.png"
              alt=""
              width={72}
              height={53}
              className="h-11 w-auto object-contain drop-shadow-[0_4px_10px_rgba(18,132,171,.22)]"
            />
            <span className="relative flex whitespace-nowrap leading-none">
              <span className="text-[20px] font-black tracking-[-.03em] text-brand-blue">國豐當舖</span>
              <span className="absolute -bottom-2 left-0 h-[3px] w-[82px] rounded-full bg-gradient-to-r from-brand-blue via-sky-300 to-[#f2b84b]" />
            </span>
          </Link>
          <p className="mt-4 max-w-md text-sm font-bold leading-7">
            國豐當舖位於台北市大同區，提供汽車借款、房屋二胎、支票借款、工商融資與萬物質借諮詢。實際條件、利息與費用以現場評估及契約為準。
          </p>
          <div className="mt-5 grid gap-2 text-sm font-black">
            <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <p className="inline-flex items-start gap-2">
              <MapPin className="mt-1 h-4 w-4 shrink-0" />
              {siteConfig.address}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-base font-black text-white">服務項目</h2>
          <nav className="mt-4 grid gap-2 text-sm font-bold" aria-label="頁尾服務導覽">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-yellow-100">
                {item.label}
              </Link>
            ))}
            <Link href="/services/item-pawn" className="hover:text-yellow-100">萬物質借</Link>
            <Link href="/services/refinance" className="hover:text-yellow-100">代償當舖</Link>
          </nav>
        </div>

        <div>
          <h2 className="text-base font-black text-white">快速聯絡</h2>
          <a href={siteConfig.lineUrl} className="mt-4 inline-grid justify-items-center gap-2 rounded-2xl bg-white/10 p-4 text-sm font-black">
            <Image src={siteConfig.lineQrImage} alt={`國豐當舖 LINE ${siteConfig.lineId}`} width={132} height={132} className="rounded-xl bg-white" />
            LINE {siteConfig.lineId}
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-col gap-4 border-t border-white/15 px-4 py-5 text-xs font-bold md:flex-row md:items-center md:justify-between">
        <p>Copyright 2026 {siteConfig.name}. All rights reserved.</p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="頁尾導覽">
          {navigation.filter((item) => ["/", "/knowledge", "/process", "/faq", "/contact"].includes(item.href)).map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-yellow-100">
              {item.label}
            </Link>
          ))}
          <Link href="/privacy" className="hover:text-yellow-100">隱私權</Link>
          <Link href="/editorial-policy" className="hover:text-yellow-100">內容查核原則</Link>
        </nav>
      </div>
    </footer>
  );
}
