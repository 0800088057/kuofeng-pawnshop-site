import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "服務項目",
  description: "國豐當舖服務項目包含汽車借款、房屋二胎、支票貼現、工商融資、萬物質借與代償諮詢。",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="legacy-service-list">
      <section className="legacy-breadcrumbs">
        <div className="legacy-page-width">
          <nav aria-label="麵包屑">
            <Link href="/">首頁</Link>
            <span>/</span>
            <span>服務項目</span>
          </nav>
          <div className="legacy-breadcrumbs__title">
            <Image src="/assets/legacy-web02/i04.png" alt="" width={301} height={221} />
            <h1>服務項目</h1>
          </div>
        </div>
      </section>
      <section className="legacy-intermediate">
        <div className="legacy-page-width">
          <div className="legacy-section-title">
            <h2>我們服務的項目</h2>
            <p>每一項服務皆需依實際條件評估，利息、費用、保管與還款方式以契約及法令規範為準。</p>
          </div>
          <div className="legacy-service-card-list">
            {services.map((service) => (
              <Link href={`/services/${service.slug}`} key={service.slug}>
                <h2>{service.title}</h2>
                <Image src={service.image} alt={service.title} width={301} height={221} />
                <p>{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
