import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";
import { CheckCircle2, Clock3, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export const metadata = createMetadata({
  title: "聯絡我們",
  description: "聯絡國豐當舖，地址台北市大同區民族西路78號1樓，電話 02-2599-6222。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="modern-subpage modern-contact-page px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[.85fr_1.15fr] md:items-start">
        <div>
          <SectionTitle as="h1" title="聯絡國豐當舖" subtitle="若您有汽車借款、房屋二胎、支票貼現或工商融資需求，可先來電確認。" />
          <div className="modern-contact-page__quick mt-8 grid gap-3">
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="h-5 w-5" />
              立即撥打 {siteConfig.phone}
            </a>
            <a href={siteConfig.lineUrl}>
              <CheckCircle2 className="h-5 w-5" />
              加入 LINE {siteConfig.lineId}
            </a>
          </div>
          <div className="modern-contact-card mt-8 rounded-[28px] bg-white p-6 comic-border">
            <p className="font-black text-brand-dark">電話</p>
            <a href={`tel:${siteConfig.phone}`} className="mt-2 inline-flex text-2xl font-black text-brand-blue">
              {siteConfig.phone}
            </a>
            <p className="mt-6 font-black text-brand-dark">地址</p>
            <p className="mt-2 leading-7 text-slate-600">{siteConfig.address}</p>
            <p className="mt-6 font-black text-brand-dark">營業時間</p>
            <p className="mt-2 leading-7 text-slate-600">{siteConfig.openingHours}</p>
            <p className="mt-6 font-black text-brand-dark">統一編號</p>
            <p className="mt-2 leading-7 text-slate-600">{siteConfig.taxId}</p>
            <div className="modern-contact-card__notes mt-8 grid gap-3">
              <p>
                <MapPin className="h-5 w-5" />
                到店前可先確認文件，避免白跑一趟。
              </p>
              <p>
                <Clock3 className="h-5 w-5" />
                實際辦理時間依現場評估與文件完整度而定。
              </p>
            </div>
            <a href={siteConfig.lineUrl} className="modern-contact-card__line mt-8 grid justify-items-center gap-3 rounded-3xl bg-sky-50 p-5 text-center font-black text-brand-deep">
              <Image src={siteConfig.lineQrImage} alt={`國豐當舖 LINE ${siteConfig.lineId}`} width={160} height={160} className="rounded-2xl bg-white" />
              LINE {siteConfig.lineId}
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-soft ring-1 ring-sky-100">
        <iframe
          title="國豐當舖地圖"
          src="https://www.google.com/maps?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E5%A4%A7%E5%90%8C%E5%8D%80%E6%B0%91%E6%97%8F%E8%A5%BF%E8%B7%AF78%E8%99%9F1%E6%A8%93&output=embed"
          loading="lazy"
          className="h-[320px] w-full border-0"
        />
      </div>
    </section>
  );
}
