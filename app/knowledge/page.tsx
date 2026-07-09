import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpenCheck, ShieldCheck } from "lucide-react";
import { articles } from "@/data/articles";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "當舖知識庫",
  description: "國豐當舖整理汽車借款、房屋二胎、支票借款、工商融資與萬物質借常見問題，協助您在申辦前先看懂文件、流程、費用與注意事項。",
  path: "/knowledge",
});

export default function KnowledgePage() {
  const categories = Array.from(new Set(articles.map((article) => article.category)));

  return (
    <div className="knowledge-page modern-knowledge-index">
      <section className="knowledge-hero modern-index-hero">
        <div className="legacy-page-width">
          <p className="knowledge-eyebrow">Knowledge</p>
          <h1>當舖知識庫</h1>
          <p>申辦前先看懂文件、流程、費用與注意事項。實際條件仍以現場評估與契約為準。</p>
          <div className="modern-index-hero__badges">
            <span><BookOpenCheck className="h-4 w-4" /> 文件流程</span>
            <span><ShieldCheck className="h-4 w-4" /> 合規提醒</span>
            <span>汽車借款</span>
            <span>房屋二胎</span>
          </div>
        </div>
      </section>

      <section className="legacy-page-width knowledge-index-summary">
        <article>
          <strong>{articles.length}</strong>
          <span>篇已整理文章</span>
        </article>
        <article>
          <strong>{categories.length}</strong>
          <span>個主題分類</span>
        </article>
        <article>
          <strong>GEO</strong>
          <span>以北部服務情境規劃長尾內容</span>
        </article>
      </section>

      <section className="legacy-page-width knowledge-topic-strip" aria-label="文章分類">
        {categories.map((category) => (
          <span key={category}>{category}</span>
        ))}
        <span>申辦文件</span>
        <span>費用說明</span>
        <span>流程安全</span>
      </section>

      <section className="legacy-page-width knowledge-list">
        {articles.map((article) => (
          <Link href={`/knowledge/${article.slug}`} className="knowledge-card" key={article.slug}>
            <Image src={article.cover.src} alt={article.cover.alt} width={article.cover.width} height={article.cover.height} />
            <div>
              <span>{article.category}</span>
              <time dateTime={article.date}>{article.date}</time>
            </div>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <strong>
              閱讀文章
              <ArrowRight className="h-4 w-4" />
            </strong>
          </Link>
        ))}
      </section>
    </div>
  );
}
