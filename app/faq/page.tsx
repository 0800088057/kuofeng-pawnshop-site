import Link from "next/link";
import { ArrowRight, FileText, MessageCircle, ShieldCheck } from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { SectionTitle } from "@/components/SectionTitle";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "常見問題",
  description: "國豐當舖常見問題，包含汽車借款、房屋二胎、支票貼現、應備資料、利息費用與 LINE 聯絡方式。",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <section className="modern-subpage modern-faq-page px-4 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionTitle as="h1" center title="常見問題" subtitle="先把文件、費用、流程與評估方式說清楚；實際條件仍以現場評估、契約與法令規範為準。" />
        <div className="modern-faq-page__cards mt-10 grid gap-4 md:grid-cols-3">
          {[
            { title: "不保證核准", desc: "網站資訊僅供說明，是否承作以現場評估與契約為準。", icon: ShieldCheck },
            { title: "先確認資料", desc: "不同服務需要的文件不同，建議先來電或 LINE 詢問。", icon: FileText },
            { title: "可先不辦理", desc: "先了解方向與費用，確認後再決定是否到店評估。", icon: MessageCircle },
          ].map(({ title, desc, icon: Icon }) => (
            <article key={title}>
              <Icon className="h-7 w-7" />
              <h2>{title}</h2>
              <p>{desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <FAQ />
        </div>
        <div className="modern-faq-page__cta mt-10">
          <div>
            <h2>還是不確定適合哪一項？</h2>
            <p>可先留下需求與物件狀況，國豐當舖會依實際資料協助您確認可評估方向。</p>
          </div>
          <Link href="/contact">
            前往諮詢
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
