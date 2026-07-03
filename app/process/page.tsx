import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionTitle } from "@/components/SectionTitle";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "借款流程",
  description: "國豐當舖借款流程：電話或線上諮詢、條件資料確認、現場評估與簽約撥款。",
  path: "/process",
});

export default function ProcessPage() {
  return (
    <section className="blue-pattern px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle center title="借款流程" subtitle="一通電話先確認方向，現場清楚說明條件與契約內容。" />
        <div className="mt-10">
          <ProcessSteps />
        </div>
      </div>
    </section>
  );
}
