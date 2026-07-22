import Link from "next/link";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "內容編輯與查核原則",
  description: "國豐當舖網站的內容責任、資料來源、更新方式、服務範圍與錯誤更正原則。",
  path: "/editorial-policy",
});

export default function EditorialPolicyPage() {
  return (
    <article className="legacy-page-width px-4 py-16 md:py-24">
      <p className="text-sm font-black tracking-[0.18em] text-brand-blue">EDITORIAL POLICY</p>
      <h1 className="mt-3 text-3xl font-black text-brand-deep md:text-5xl">內容編輯與查核原則</h1>
      <p className="mt-5 max-w-3xl text-base font-bold leading-8 text-slate-600">
        國豐當舖整理汽車借款、房屋二胎與當舖服務相關資訊，協助讀者在諮詢前先理解文件、流程、費用與契約重點。網站內容由國豐當舖負責整理與檢視，不取代個案現場評估或雙方契約。
      </p>

      <div className="mt-10 grid max-w-4xl gap-6">
        <PolicySection title="內容責任">
          <p>文章以國豐當舖名義整理，頁面會標示發布日期、最後更新日期或內容檢視日期。若內容涉及個案條件，會清楚保留現場評估與契約前提，不使用保證核准、固定額度或無條件撥款等說法。</p>
        </PolicySection>
        <PolicySection title="資料來源">
          <p>法規、政府流程與公共資訊優先引用全國法規資料庫、政府機關或其他可追溯的官方來源；實務流程則以國豐當舖現場服務經驗整理。文章末尾會列出主要參考來源，方便讀者自行查證。</p>
        </PolicySection>
        <PolicySection title="更新與查核">
          <p>當服務流程、法規、費用揭露方式或常見問題有重大變動時，會優先更新受影響頁面。單純調整排版、圖片壓縮或錯字時，不會把日期改成內容重大更新。</p>
        </PolicySection>
        <PolicySection title="服務範圍">
          <p>汽車借款、支票借款、工商融資、代償諮詢與萬物質借以新竹以北地區為主要服務範圍；房屋相關服務可依個案條件評估全台需求。頁面若另有範圍說明，以該頁標示為準。</p>
        </PolicySection>
        <PolicySection title="費用與結果說明">
          <p>網站內容僅供一般資訊與申辦前準備參考。實際借款金額、利息、倉棧費、期限、還款方式、撥款時間與結果，均以資料完整度、現場評估、適用規範及雙方契約為準。</p>
        </PolicySection>
        <PolicySection title="錯誤更正">
          <p>若您發現內容可能過時、不完整或需要更正，可來電 {siteConfig.phone} 或透過 LINE {siteConfig.lineId} 告知頁面網址與問題，我們會重新查核。</p>
        </PolicySection>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/knowledge" className="inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-black text-white">查看當舖知識庫</Link>
        <Link href="/contact" className="inline-flex rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-black text-brand-deep">聯絡國豐當舖</Link>
      </div>
    </article>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-3xl border border-sky-100 bg-white p-6 shadow-soft md:p-8">
      <h2 className="text-xl font-black text-brand-deep">{title}</h2>
      <div className="mt-3 text-base font-bold leading-8 text-slate-600">{children}</div>
    </section>
  );
}
