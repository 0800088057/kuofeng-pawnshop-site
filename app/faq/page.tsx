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
    <section className="modern-subpage px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <SectionTitle as="h1" center title="常見問題" subtitle="實際條件仍以現場評估、契約與法令規範為準。" />
        <div className="mt-10">
          <FAQ />
        </div>
      </div>
    </section>
  );
}
