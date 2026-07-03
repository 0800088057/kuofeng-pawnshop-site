import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "服務項目",
  description: "國豐當舖服務項目包含汽車借款、房屋二胎、支票貼現、工商融資、萬物質借與代償諮詢。",
  path: "/services",
});

const iconAtlas = [
  ["01-03.png", "工商融資"],
  ["01-04.png", "線上諮詢"],
  ["01-05.png", "電話諮詢"],
  ["01-06.png", "額度評估"],
  ["01-07.png", "汽車借款"],
  ["01-08.png", "代償流程"],
  ["01-09.png", "房屋二胎"],
  ["01-10.png", "資料確認"],
  ["01-11.png", "條件盤點"],
  ["01-12.png", "萬物質借"],
  ["01-13.png", "房屋估價"],
  ["01-14.png", "費用說明"],
  ["01-15.png", "支票貼現"],
  ["01-16.png", "文件準備"],
  ["01-17.png", "契約說明"],
  ["01-18.png", "代償諮詢"],
  ["01-19.png", "簽約辦理"],
  ["01-20.png", "撥款"],
  ["01-21.png", "營運週轉"],
  ["01-22.png", "企業文件"],
  ["01-23.png", "公司資料"],
  ["01-24.png", "身份文件"],
  ["01-25.png", "服務完成"],
  ["01-26.png", "小圖標"],
];

const legacyBoards = [
  { title: "舊版首頁藍色版型", image: "/assets/old-blue/blue-home.png", width: 1920, height: 5516 },
  { title: "服務模組總覽", image: "/assets/old-blue/service-modules.png", width: 1080, height: 3898 },
  { title: "角色與色票", image: "/assets/old-blue/02.png", width: 501, height: 400 },
  { title: "模組素材", image: "/assets/old-blue/module-02.png", width: 501, height: 400 },
  { title: "房屋二胎說明", image: "/assets/old-blue/blue-second-mortgage.png", width: 1080, height: 1020 },
  { title: "房屋二胎流程", image: "/assets/old-blue/second-mortgage-flow.png", width: 1080, height: 1051 },
  { title: "支票貼現流程", image: "/assets/old-blue/check-loan-flow.png", width: 1080, height: 1051 },
  { title: "房屋代償流程", image: "/assets/old-blue/house-refinance-flow.png", width: 1080, height: 1051 },
  { title: "國豐圖章", image: "/assets/old-blue/kuofeng-mark.jpg", width: 501, height: 400 },
  { title: "舊站完整參考", image: "/assets/old-blue/web.png", width: 1920, height: 5516 },
  { title: "門市服務橫幅", image: "/assets/legacy-web02/f01.jpg", width: 1158, height: 333 },
  { title: "公益補充素材", image: "/assets/legacy-web02/in_i01.jpg", width: 469, height: 316 },
  { title: "形象橫幅素材", image: "/assets/legacy-web02/in_s01.jpg", width: 1200, height: 403 },
  { title: "LINE 聯絡橫條", image: "/assets/legacy-web02/n01.png", width: 620, height: 90 },
  { title: "角色延伸素材", image: "/assets/legacy-web02/in_b02.png", width: 500, height: 316 },
];

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

          <section className="legacy-asset-atlas">
            <div className="legacy-section-title">
              <h2>服務圖示總覽</h2>
              <p>沿用舊版藍色元素與錢鈔人圖示，讓各項服務更容易辨識。</p>
            </div>
            <div className="legacy-icon-atlas">
              {iconAtlas.map(([file, title]) => (
                <article key={file}>
                  <Image src={`/assets/old-blue/${file}`} alt={title} width={301} height={221} />
                  <h3>{title}</h3>
                </article>
              ))}
            </div>
          </section>

          <section className="legacy-board-gallery">
            <div className="legacy-section-title">
              <h2>舊版藍色素材牆</h2>
              <p>保留舊站完整視覺資料作為新版內容延伸，後續可依頁面再拆分使用。</p>
            </div>
            <div className="legacy-board-gallery__grid">
              {legacyBoards.map((board) => (
                <article key={board.title}>
                  <div>
                    <Image src={board.image} alt={board.title} width={board.width} height={board.height} />
                  </div>
                  <h3>{board.title}</h3>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
