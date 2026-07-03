import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "服務項目",
  description: "國豐當舖服務項目包含汽車借款、房屋二胎、支票貼現、工商融資、萬物質借與代償諮詢。",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <section className="grid-paper px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="服務項目" subtitle="每一項服務皆需依實際條件評估，利息、費用、保管與還款方式以契約及法令規範為準。" />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
