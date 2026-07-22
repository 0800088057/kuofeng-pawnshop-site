import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";
import { articles, type Article } from "@/data/articles";
import { siteConfig } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

type ArticleContext = {
  readingFocus: string;
  serviceScope: string;
  servicePath?: string;
  serviceTitle?: string;
  serviceDescription?: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
};

const articleContexts: Record<string, ArticleContext> = {
  汽車借款: {
    readingFocus: "文件、車況、費用與契約",
    serviceScope: "台北、新北、基隆、桃園與新竹地區",
    servicePath: "/services/car-loan",
    serviceTitle: "汽車借款服務說明",
    serviceDescription: "查看文件、流程、費用與常見評估情境。",
    ctaEyebrow: "先確認再辦理",
    ctaTitle: "想先確認車況與可評估方向？",
    ctaDescription: "可先準備行照正本、車主雙證件與既有貸款資訊，透過電話或 LINE 說明需求，再由國豐當舖協助確認後續評估方式。",
  },
  房屋二胎: {
    readingFocus: "房屋權屬、既有貸款、文件與費用",
    serviceScope: "房屋服務可依個案評估全台需求",
    servicePath: "/services/second-mortgage",
    serviceTitle: "房屋二胎服務說明",
    serviceDescription: "查看房屋條件、常見文件、流程與契約提醒。",
    ctaEyebrow: "先整理房屋資料",
    ctaTitle: "想先確認房屋條件與可評估方向？",
    ctaDescription: "可先整理房屋地址、權屬資料、既有房貸餘額與資金用途，透過電話、LINE 或線上表單說明，再由國豐當舖協助確認後續評估方式。",
  },
  借款比較: {
    readingFocus: "申辦條件、費用、速度與適用情境",
    serviceScope: "依擔保品與服務項目分別評估",
    ctaEyebrow: "先釐清需求",
    ctaTitle: "不確定哪一種方式適合？",
    ctaDescription: "可先說明資金用途、可提供的文件或擔保品，以及預計還款安排，再由國豐當舖協助整理可比較的方向。",
  },
  合規提醒: {
    readingFocus: "合法立案、費用、契約與查證方式",
    serviceScope: "台灣借款安全與合法當舖查核",
    ctaEyebrow: "先查證再決定",
    ctaTitle: "對辦理流程或契約仍有疑問？",
    ctaDescription: "可先透過電話、LINE 或線上表單提出問題，辦理前應確認業者資料、費用、利息、期限與契約內容。",
  },
};

function getArticleContext(article: Article): ArticleContext {
  const fallback: ArticleContext = {
    readingFocus: "條件、文件、費用與契約",
    serviceScope: "依服務項目與個案條件評估",
    ctaEyebrow: "先確認再辦理",
    ctaTitle: "想先確認可評估方向？",
    ctaDescription: "可先透過電話、LINE 或線上表單說明需求與目前條件，再由國豐當舖協助確認需要準備的資料。",
  };
  const categoryContext = articleContexts[article.category] ?? fallback;

  return {
    ...categoryContext,
    readingFocus: article.readingFocus ?? categoryContext.readingFocus,
    serviceScope: article.serviceScope ?? categoryContext.serviceScope,
    servicePath: article.servicePath ?? categoryContext.servicePath,
    ctaEyebrow: article.cta?.eyebrow ?? categoryContext.ctaEyebrow,
    ctaTitle: article.cta?.title ?? categoryContext.ctaTitle,
    ctaDescription: article.cta?.description ?? categoryContext.ctaDescription,
  };
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};

  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/knowledge/${article.slug}`,
    image: article.cover.src,
    type: "article",
  });
}

export default async function KnowledgeArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const context = getArticleContext(article);
  const curatedRelatedArticles = (article.relatedArticleSlugs ?? [])
    .map((relatedSlug) => articles.find((item) => item.slug === relatedSlug))
    .filter((item): item is Article => item !== undefined);
  const relatedArticles = curatedRelatedArticles.length
    ? curatedRelatedArticles.slice(0, 3)
    : articles.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 3);
  const relatedLinks = article.relatedLinks?.length
    ? article.relatedLinks
    : context.servicePath && context.serviceTitle && context.serviceDescription
      ? [{ title: context.serviceTitle, href: context.servicePath, description: context.serviceDescription }]
      : [];
  const businessId = `${siteConfig.url}/#business`;
  const websiteId = `${siteConfig.url}/#website`;
  const articleUrl = new URL(`/knowledge/${article.slug}`, siteConfig.url).toString();
  const modifiedDate = article.updatedDate ?? article.date;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: new URL(article.cover.src, siteConfig.url).toString(),
    thumbnailUrl: new URL(article.cover.src, siteConfig.url).toString(),
    datePublished: article.date,
    dateModified: modifiedDate,
    inLanguage: "zh-TW",
    articleSection: article.category,
    keywords: article.keywords.join(", "),
    isPartOf: {
      "@type": "WebSite",
      "@id": websiteId,
    },
    citation: article.references.map((reference) => reference.href),
    about: {
      "@type": "Thing",
      name: article.category,
    },
    author: {
      "@type": "Organization",
      "@id": businessId,
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      "@id": businessId,
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: new URL("/assets/legacy-web02/i25.png", siteConfig.url).toString(),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "首頁",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "當舖知識庫",
        item: new URL("/knowledge", siteConfig.url).toString(),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: new URL(`/knowledge/${article.slug}`, siteConfig.url).toString(),
      },
    ],
  };

  return (
    <article className="knowledge-article">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <header className="knowledge-article__header legacy-page-width">
        <nav aria-label="麵包屑">
          <Link href="/">首頁</Link>
          <span>/</span>
          <Link href="/knowledge">當舖知識庫</Link>
          <span>/</span>
          <span>{article.category}</span>
        </nav>
        <p className="knowledge-eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <div className="knowledge-article__dates">
          <time dateTime={article.date}>發布日期：{article.date}</time>
          {article.updatedDate ? <time dateTime={article.updatedDate}>最後更新：{article.updatedDate}</time> : null}
          {article.reviewedDate ? <span>內容檢視：{article.reviewedDate}</span> : null}
        </div>
        <div className="knowledge-article__cover-frame">
          <Image className="knowledge-article__cover" src={article.cover.src} alt={article.cover.alt} width={article.cover.width} height={article.cover.height} priority />
          {article.cover.brandFooter ? <span className="knowledge-article__cover-brand">{article.cover.brandFooter}</span> : null}
        </div>
        <div className="knowledge-article__meta">
          <span>主題：{article.category}</span>
          <span>閱讀重點：{context.readingFocus}</span>
          <span>服務範圍：{context.serviceScope}</span>
          <span>內容整理：{siteConfig.name}</span>
        </div>
        <p className="knowledge-article__lead">{article.excerpt}</p>
      </header>

      <div className="knowledge-article__body legacy-page-width">
        <aside className="knowledge-toc" aria-label="文章目錄">
          <strong>文章重點</strong>
          {article.sections.map((section) => (
            <a href={`#${section.heading}`} key={section.heading}>
              {section.heading}
            </a>
          ))}
          <a href="#faq">常見問題</a>
        </aside>

        <div className="knowledge-content">
          {article.sections.map((section) => (
            <section id={section.heading} key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.table ? (
                <div className="knowledge-table-wrap">
                  <table>
                    <thead>
                      <tr>
                        {section.table.headers.map((header) => (
                          <th key={header}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row.join("-")}>
                          {row.map((cell) => (
                            <td key={cell}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}
              {section.list ? (
                <ul>
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {section.image ? (
                <div className="knowledge-inline-image-frame">
                  <Image className="knowledge-inline-image" src={section.image.src} alt={section.image.alt} width={section.image.width} height={section.image.height} />
                  {section.image.brandFooter ? <span className="knowledge-inline-image-brand">{section.image.brandFooter}</span> : null}
                </div>
              ) : null}
            </section>
          ))}

          <section id="faq" className="knowledge-faq">
            <h2>常見問題 FAQ</h2>
            {article.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </section>

          <section className="knowledge-disclaimer">
            <h2>申辦前提醒</h2>
            <p>
              本文為一般資訊整理，不構成借款承諾或核准保證。實際借款金額、利息、費用、期限與契約條件，均以國豐當舖現場評估、相關規範與雙方契約為準。
            </p>
          </section>

          <section className="knowledge-references">
            <h2>參考來源</h2>
            <ul>
              {article.references.map((reference) => (
                <li key={reference.href}>
                  <a href={reference.href} target="_blank" rel="noreferrer">
                    {reference.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {relatedLinks.length ? (
            <section className="knowledge-related">
              <h2>相關內容</h2>
              <div>
                {relatedLinks.map((related) => (
                  <Link href={related.href} key={related.href}>
                    <span>服務說明</span>
                    <strong>{related.title}</strong>
                    <p>{related.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {relatedArticles.length > 0 ? (
            <section className="knowledge-related">
              <h2>延伸閱讀</h2>
              <div>
                {relatedArticles.map((related) => (
                  <Link href={`/knowledge/${related.slug}`} key={related.slug}>
                    <span>{related.category}</span>
                    <strong>{related.title}</strong>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <section className="knowledge-cta">
            <div>
              <p className="knowledge-cta__eyebrow">{context.ctaEyebrow}</p>
              <h2>{context.ctaTitle}</h2>
              <p>{context.ctaDescription}</p>
              <div className="knowledge-cta__actions">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="h-5 w-5" />
                  {siteConfig.phone}
                </a>
                <a href={siteConfig.lineUrl}>
                  <MessageCircle className="h-5 w-5" />
                  加入 LINE 諮詢
                </a>
                <Link href="/contact">填寫線上表單</Link>
              </div>
            </div>
            <Link href={siteConfig.lineUrl} className="knowledge-cta__qr" aria-label={`加入國豐當舖 LINE ${siteConfig.lineId}`}>
              <Image src={siteConfig.lineQrImage} alt={`國豐當舖 LINE ${siteConfig.lineId}`} width={180} height={180} />
              <span>LINE {siteConfig.lineId}</span>
            </Link>
          </section>
        </div>
      </div>
    </article>
  );
}
