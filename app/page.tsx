import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-blue">
        <div className="absolute inset-0 bg-[url('/assets/old-blue/blue-home.png')] bg-cover bg-top opacity-20" />
        <div className="relative mx-auto grid min-h-[620px] max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="inline-flex rounded-full bg-white px-5 py-2 text-sm font-black text-brand-deep comic-border">
              台北大同區合法當舖｜統編 {siteConfig.taxId}
            </div>
            <h1 className="mt-7 text-5xl font-black leading-tight tracking-wide text-white drop-shadow md:text-7xl">
              一通電話，
              <br />
              讓資金週轉
              <span className="text-brand-yellow">更安心</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-9 text-white/92">
              汽車借款、房屋二胎、支票貼現、工商融資與代償諮詢。國豐當舖以清楚說明與合法流程，協助您評估可行方向。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-4 text-base font-black text-brand-dark comic-border">
                <Phone className="h-5 w-5" />
                {siteConfig.phone}
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-base font-black text-brand-dark comic-border">
                線上諮詢
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="rounded-[34px] bg-white/95 p-4 comic-border">
            <Image
              src="/assets/old-blue/blue-home.png"
              alt="國豐當舖藍色元素版網站參考"
              width={1200}
              height={3920}
              className="h-[520px] w-full rounded-[24px] object-cover object-top"
              priority
            />
          </div>
        </div>
      </section>

      <section className="grid-paper px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle center title="我們服務的項目" subtitle="各行各業皆可先來電詢問，是否適合承作仍需依條件、評估與契約為準。" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="blue-pattern px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle center title="合法透明，流程清楚" subtitle="先確認需求，再說明條件與契約內容；不使用保證核准或免審核等高風險承諾。" />
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <div>
            <SectionTitle title="房屋二胎與服務模組參考" subtitle="藍色元素版內頁資料已整理為可還原素材，第一版先以視覺方向重建，後續可逐頁加深。" />
            <Link href="/services/second-mortgage" className="mt-7 inline-flex rounded-full bg-brand-yellow px-6 py-3 text-base font-black text-brand-dark comic-border">
              查看房屋二胎
            </Link>
          </div>
          <Image src="/assets/old-blue/blue-second-mortgage.png" alt="房屋二胎藍色元素版" width={1200} height={1680} className="rounded-[32px] object-cover object-top comic-border" />
        </div>
      </section>

      <section className="grid-paper px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[.85fr_1.15fr] md:items-start">
          <div>
            <SectionTitle title="立即諮詢國豐當舖" subtitle="請留下基本資料，第一版目前先做前端驗證，後續可串接 Email、LINE 或 CRM。" />
            <div className="mt-8 rounded-[28px] bg-white p-5 comic-border">
              <p className="font-black text-brand-dark">地址</p>
              <p className="mt-2 leading-7 text-slate-600">{siteConfig.address}</p>
              <p className="mt-5 font-black text-brand-dark">電話</p>
              <a href={`tel:${siteConfig.phone}`} className="mt-2 inline-flex text-xl font-black text-brand-blue">
                {siteConfig.phone}
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
