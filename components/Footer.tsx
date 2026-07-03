import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { navigation, quickLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <p className="text-2xl font-black">
            KF<span className="text-brand-blue">國豐當舖</span>
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/78">
            國豐當舖位於台北市大同區，提供合法當舖借款與資金週轉諮詢。實際條件、利息、費用與額度以現場評估、契約及法令規範為準。
          </p>
          <div className="mt-5 grid gap-2 text-sm text-white/88">
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-yellow" />
              {siteConfig.address}
            </p>
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 hover:text-brand-yellow">
              <Phone className="h-4 w-4 text-brand-yellow" />
              {siteConfig.phone}
            </a>
            <p>統一編號：{siteConfig.taxId}</p>
          </div>
        </div>
        <div>
          <p className="font-black text-brand-yellow">網站地圖</p>
          <div className="mt-4 grid gap-2 text-sm">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/78 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-black text-brand-yellow">服務項目</p>
          <div className="mt-4 grid gap-2 text-sm">
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/78 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs leading-6 text-white/62">
        <p>© 2026 {siteConfig.name}. All Rights Reserved.</p>
        <p>本網站內容僅供服務介紹與初步諮詢，不代表借款承諾；實際條件依現場評估及契約為準。</p>
      </div>
    </footer>
  );
}
