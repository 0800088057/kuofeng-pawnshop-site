import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { services } from "@/data/services";
import { northTaiwanServiceAreas, siteConfig } from "@/data/site";
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
    image: service.image,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const legacy = service.legacy;
  const serviceUrl = new URL(`/services/${service.slug}`, siteConfig.url).toString();
  const businessId = `${siteConfig.url}/#business`;
  const areaServed = service.slug === "second-mortgage"
    ? [{ "@type": "Country", name: "台灣" }]
    : northTaiwanServiceAreas.map((name) => ({ "@type": "AdministrativeArea", name }));
  const areaDescription = service.slug === "second-mortgage"
    ? "房屋案件可由全台灣屋主先行諮詢，後續依房屋所在地、文件與現場評估安排。"
    : "服務以台北、新北、基隆、桃園、新竹地區為主，是否適合辦理仍依案件條件與現場評估為準。";
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.description,
    url: serviceUrl,
    provider: { "@id": businessId },
    areaServed,
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl,
      servicePhone: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        availableLanguage: ["zh-TW"],
      },
    },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首頁", item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: service.title, item: serviceUrl },
    ],
  };

  return (
    <div className="legacy-service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
          <p className="legacy-breadcrumbs__desc">{service.description}</p>
        </div>
      </section>

      <section className="legacy-intermediate">
        <div className="legacy-page-width">
          <div className="service-summary-grid">
            {service.points.map((point) => (
              <article key={point}>
                <span>{service.title}</span>
                <strong>{point}</strong>
              </article>
            ))}
          </div>

          <section className="service-disclosure">
            <div>
              <p className="service-disclosure__eyebrow">Service Disclosure</p>
              <h2>{service.title}服務說明</h2>
              <p>{service.disclosure.summary}</p>
            </div>
            <div className="service-disclosure__cards">
              <article>
                <ShieldCheck className="h-6 w-6" />
                <h3>文件準備</h3>
                <p>{service.disclosure.documents}</p>
              </article>
              <article>
                <CheckCircle2 className="h-6 w-6" />
                <h3>費用與契約</h3>
                <p>{service.disclosure.feeNotice}</p>
              </article>
              <article>
                <MapPin className="h-6 w-6" />
                <h3>服務範圍</h3>
                <p>{areaDescription}</p>
              </article>
            </div>
          </section>

          <section className="service-situations">
            <div className="service-section-heading">
              <p>Use Cases</p>
              <h2>常見諮詢情境</h2>
            </div>
            <div className="service-situation-grid">
              {service.situations.map((item) => (
                <article key={item}>
                  <span />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </section>

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

          <section className="service-faq">
            <div className="service-section-heading">
              <p>FAQ</p>
              <h2>{service.title}常見問題</h2>
            </div>
            <div className="service-faq__list">
              {service.faqs.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </section>

          {"knowledgeLinks" in service && service.knowledgeLinks?.length ? (
            <section className="service-knowledge-links">
              <div className="service-section-heading">
                <p>Knowledge</p>
                <h2>{service.title}知識整理</h2>
              </div>
              <div>
                {service.knowledgeLinks.map((item) => (
                  <Link href={item.href} key={item.href}>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <div className="legacy-service-cta">
            <h2>想了解{service.title}是否適合？</h2>
            <p>請先來電或留下資料，國豐當舖會依您的實際條件說明可評估方向。實際額度、利息、費用與結果以現場評估及契約為準。</p>
            <div>
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="h-5 w-5" />
                {siteConfig.phone}
              </a>
              <a href={siteConfig.lineUrl}>
                <MessageCircle className="h-5 w-5" />
                LINE 諮詢
              </a>
              <Link href="/contact">填寫表單</Link>
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
