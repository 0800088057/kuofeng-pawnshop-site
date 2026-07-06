import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/SectionTitle";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

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
          <SectionTitle title="聯絡國豐當舖" subtitle="若您有汽車借款、房屋二胎、支票貼現或工商融資需求，可先來電確認。" />
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
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
