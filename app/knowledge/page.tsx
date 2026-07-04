import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "當舖知識庫",
  description: "國豐當舖整理汽車借款、房屋二胎、支票借款、工商融資與萬物質借常見問題，協助您在申辦前先看懂文件、流程、費用與注意事項。",
  path: "/knowledge",
});

export default function KnowledgePage() {
  return (
    <div className="knowledge-page">
      <section className="knowledge-hero">
        <div className="legacy-page-width">
          <p className="knowledge-eyebrow">Knowledge</p>
          <h1>當舖知識庫</h1>
          <p>申辦前先看懂文件、流程、費用與注意事項。實際條件仍以現場評估與契約為準。</p>
        </div>
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
          </Link>
        ))}
      </section>
    </div>
  );
}
