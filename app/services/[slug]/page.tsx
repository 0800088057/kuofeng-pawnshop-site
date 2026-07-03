import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: `${service.title}服務說明：${service.description}`,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const legacy = service.legacy;

  return (
    <div className="legacy-service-page">
      <section className="legacy-breadcrumbs">
        <div className="legacy-page-width">
          <nav aria-label="麵包屑">
            <Link href="/">首頁</Link>
            <span>/</span>
            <span>{service.title}</span>
          </nav>
          <div className="legacy-breadcrumbs__title">
            <Image src={service.image} alt="" width={301} height={221} />
            <h1>{service.title}</h1>
          </div>
        </div>
      </section>

      <section className="legacy-intermediate">
        <div className="legacy-page-width">
          <div className="legacy-process">
            <div className="legacy-process__title">
              <h2>作業流程</h2>
              <p>{legacy.subtitle}</p>
            </div>
            <div className="legacy-process__grid">
              {legacy.process.map(([step, image, title, note]) => (
                <article key={`${service.slug}-${step}`}>
                  <strong>{step}</strong>
                  <Image src={image} alt={title} width={301} height={221} />
                  <h3>{title}</h3>
                  <p>{note}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="legacy-detail-grid">
            <InfoPanel title="產品優點" items={legacy.advantages} />
            <InfoPanel title="應備文件" items={legacy.files} />
          </div>

          <div className="legacy-detail-grid">
            <InfoPanel title="申辦對象" items={legacy.applicants} />
            {"extraPanels" in legacy && legacy.extraPanels
              ? legacy.extraPanels.map((panel) => <InfoPanel key={panel.title} title={panel.title} subtitle={panel.subtitle} items={panel.items} />)
              : null}
          </div>

          <section className="legacy-interest legacy-interest--wide">
            <div>
              <h2>利息計算方式</h2>
              <ul>
                {legacy.interest.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <h2 className="legacy-interest__subhead">其他備註</h2>
              <ul>
                {legacy.notes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <div className="legacy-service-cta">
            <h2>想了解{service.title}是否適合？</h2>
            <p>請先來電或留下資料，國豐當舖會依您的實際條件說明可評估方向。實際額度、利息、費用與結果以現場評估及契約為準。</p>
            <div>
              <Link href="/contact">線上諮詢</Link>
              <Link href="/">回首頁</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function InfoPanel({ title, subtitle, items }: { title: string; subtitle?: string; items: string[] }) {
  return (
    <article className="legacy-info-panel">
      <h2>{title}</h2>
      {subtitle ? <p className="legacy-info-panel__subtitle">{subtitle}</p> : null}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
