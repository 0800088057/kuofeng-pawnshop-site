import Link from "next/link";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "隱私權與個資蒐集告知",
  description: "國豐當舖網站諮詢表單的個人資料蒐集、處理與利用說明。",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="legacy-page-width px-4 py-16 md:py-24">
      <p className="text-sm font-black tracking-[0.18em] text-brand-blue">PRIVACY</p>
      <h1 className="mt-3 text-3xl font-black text-brand-deep md:text-5xl">隱私權與個資蒐集告知</h1>
      <p className="mt-5 max-w-3xl text-base font-bold leading-8 text-slate-600">
        國豐當舖重視您的個人資料。本頁說明您透過本網站送出諮詢表單時，資料將如何被使用。若您不同意本告知內容，請改以電話或 LINE 先行詢問。
      </p>

      <div className="mt-10 grid max-w-4xl gap-6">
        <PrivacySection title="蒐集者與聯絡方式">
          <p>{siteConfig.name}，統一編號 {siteConfig.taxId}，地址：{siteConfig.address}，電話：{siteConfig.phone}。</p>
        </PrivacySection>
        <PrivacySection title="蒐集目的與資料類型">
          <p>本網站僅為回覆諮詢、說明服務內容、安排聯絡與保留必要客服紀錄而蒐集資料。表單可能蒐集姓名、電話、需求項目及您主動填寫的備註內容。</p>
        </PrivacySection>
        <PrivacySection title="處理、利用期間與方式">
          <p>資料將於前述服務目的所必要的期間內，依適用法令及內部資料安全管理方式處理與利用。除依法令規定、取得您的同意或為完成必要服務外，不會任意提供予無關第三人。</p>
        </PrivacySection>
        <PrivacySection title="您的權利">
          <p>您可依適用個資法令，向我們申請查詢、閱覽、製給複製本、補充、更正、停止蒐集、處理或利用，以及刪除您的個人資料；實際申請方式請來電 {siteConfig.phone} 說明。</p>
        </PrivacySection>
        <PrivacySection title="不提供資料的影響">
          <p>若未提供必要聯絡資料，我們可能無法回覆您的諮詢或安排後續服務說明，但不影響您以電話或 LINE 另行詢問。</p>
        </PrivacySection>
      </div>

      <p className="mt-10 text-sm font-bold leading-7 text-slate-500">本頁為網站表單使用告知，服務內容、費用、利息、期限與契約責任仍以現場評估及雙方契約為準。</p>
      <Link href="/contact" className="mt-8 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white">返回線上諮詢</Link>
    </article>
  );
}

function PrivacySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-sky-100 bg-white p-6 shadow-soft md:p-8">
      <h2 className="text-xl font-black text-brand-deep">{title}</h2>
      <div className="mt-3 text-base font-bold leading-8 text-slate-600">{children}</div>
    </section>
  );
}
