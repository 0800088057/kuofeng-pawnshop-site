import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionTitle } from "@/components/SectionTitle";
import { documentChecklist, safetyNotes } from "@/data/content";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "借款流程",
  description: "國豐當舖借款流程：電話或線上諮詢、條件資料確認、現場評估與簽約撥款。",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <div className="modern-subpage modern-process-page px-4 py-16">
      <section className="mx-auto max-w-6xl">
        <SectionTitle as="h1" center title="借款流程" subtitle="一通電話先確認方向，現場清楚說明條件與契約內容。" />
        <div className="mt-10">
          <ProcessSteps />
        </div>
      </section>

      <section className="modern-process-note mx-auto mt-14 grid max-w-6xl gap-6 rounded-[28px] bg-white/95 p-6 shadow-soft md:grid-cols-[1fr_.9fr] md:p-8">
        <div>
          <h2 className="text-3xl font-black text-brand-dark">到店前可以先準備什麼？</h2>
          <p className="mt-3 leading-8 text-slate-600">
            不同服務需要的資料不同，先準備基本資料與物件資訊，可縮短現場確認時間。實際應備文件仍以服務項目與個案條件為準。
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {documentChecklist.map((group) => (
              <article key={group.title} className="modern-checklist-card rounded-2xl border border-sky-100 bg-sky-50/60 p-5">
                <h3 className="font-black text-brand-deep">{group.title}</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm font-bold leading-7 text-slate-600">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <div className="modern-safety-card rounded-[24px] bg-brand-dark p-6 text-white">
          <h2 className="text-2xl font-black">諮詢前的注意事項</h2>
          <div className="mt-5 grid gap-3">
            {safetyNotes.map((note) => (
              <p key={note} className="rounded-2xl bg-white/10 p-4 text-sm font-bold leading-7">
                {note}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
