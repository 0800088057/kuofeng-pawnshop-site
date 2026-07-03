import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Clock3, MapPin, Phone, ShieldCheck } from "lucide-react";
import { documentChecklist, safetyNotes, scenarioGuides } from "@/data/content";
import { siteConfig } from "@/data/site";

const homeServices = [
  {
    title: "工商融資",
    desc: "依營業狀況、資產條件與週轉需求協助初步評估，實際方案以現場說明與契約為準。",
    image: "/assets/legacy-web02/i09.png",
    href: "/services/business-financing",
  },
  {
    title: "汽車借款",
    desc: "可依車況、車齡、權屬與使用需求進行評估，條件與額度以實際鑑價及契約為準。",
    image: "/assets/legacy-web02/i03.png",
    href: "/services/car-loan",
  },
  {
    title: "支票貼現",
    desc: "協助了解票據貼現與短期週轉方式，申辦條件、費用與撥款時程以實際評估為準。",
    image: "/assets/legacy-web02/i20.png",
    href: "/services/check-loan",
  },
  {
    title: "房屋二胎",
    desc: "有房產且仍有週轉需求，可先了解二胎、增貸與代償方向。",
    image: "/assets/legacy-web02/i16.png",
    href: "/services/second-mortgage",
  },
  {
    title: "萬物質借",
    desc: "可依物品種類、保存狀況與市場價值進行估價，保管、利息與費用依規定及契約辦理。",
    image: "/assets/legacy-web02/i24.png",
    href: "/services/item-pawn",
  },
  {
    title: "代償諮詢",
    desc: "針對既有借款與還款壓力提供初步諮詢，是否適合代償仍需依條件與契約評估。",
    image: "/assets/legacy-web02/i13.png",
    href: "/services/refinance",
  },
];

const steps = [
  ["01", "初步諮詢", "先確認需求、物件與大致條件。"],
  ["02", "資料盤點", "說明需準備資料與評估方式。"],
  ["03", "條件說明", "費用、利息、保管與還款方式先說清楚。"],
  ["04", "簽約辦理", "實際內容以現場評估與契約為準。"],
];

const principles = [
  ["合法流程", "以當舖業務與相關規範辦理，避免不清楚的口頭承諾。"],
  ["費用透明", "利息、費用、保管與還款方式於簽約前清楚說明。"],
  ["在地服務", "台北市大同區實體門市，方便現場諮詢與資料確認。"],
];

const quickVisuals = [
  { title: "資料確認", image: "/assets/legacy-web02/i10.png" },
  { title: "條件盤點", image: "/assets/legacy-web02/i11.png" },
  { title: "專人說明", image: "/assets/legacy-web02/i12.png" },
];

export default function HomePage() {
  return (
    <div className="modern-home">
      <section className="modern-hero" aria-labelledby="home-heading">
        <div className="modern-hero__city" />
        <div className="modern-page">
          <div className="modern-hero__content">
            <p className="modern-eyebrow">台北大同區合法當舖｜統編 {siteConfig.taxId}</p>
            <h1 id="home-heading">一通電話，先把週轉問題說清楚</h1>
            <p>
              國豐當舖提供汽車借款、房屋二胎、支票借款、工商融資與萬物質借等諮詢。額度、利息、費用與結果以現場評估及契約為準。
            </p>
            <div className="modern-hero__actions">
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="h-5 w-5" />
                {siteConfig.phone}
              </a>
              <Link href="/contact">
                線上諮詢
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="modern-hero__metrics">
              <span>
                <strong>30+</strong>
                年在地服務
              </span>
              <span>
                <strong>6</strong>
                大服務項目
              </span>
              <span>
                <strong>實體</strong>
                門市諮詢
              </span>
            </div>
          </div>
          <div className="modern-hero__visual">
            <Image src="/assets/legacy-web02/i25.png" alt="國豐當舖錢鈔人" width={360} height={335} priority />
          </div>
        </div>
      </section>

      <section className="modern-services modern-page">
        <div className="modern-section-head">
          <p>Service</p>
          <h2>我們服務的項目</h2>
          <span>依實際條件評估，不使用保證核准或固定額度承諾。</span>
        </div>
        <div className="legacy-home-service-grid">
          {homeServices.map((service) => (
            <Link href={service.href} key={service.title} className="legacy-home-service-card">
              <h3>{service.title}</h3>
              <Image src={service.image} alt={service.title} width={301} height={221} />
              <p>{service.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="modern-principles">
        <div className="modern-page modern-principles__grid">
          <div>
            <p className="modern-eyebrow">About Kuofeng</p>
            <h2>以誠信為經營原則，讓需求先被正確評估</h2>
            <p>
              國豐當舖成立於民國 77 年，長期服務台北大同區在地客戶。每一筆需求先從條件確認開始，協助您理解可行方向與契約內容。
            </p>
          </div>
          <div className="modern-principle-list">
            {principles.map(([title, desc]) => (
              <article key={title}>
                <ShieldCheck className="h-6 w-6" />
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="modern-process modern-page">
        <div className="modern-section-head">
          <p>Process</p>
          <h2>簡單清楚的 4 個步驟</h2>
          <span>先諮詢、再評估、後說明，不急著讓您做決定。</span>
        </div>
        <div className="modern-process-grid">
          {steps.map(([num, title, desc]) => (
            <article key={num}>
              <strong>{num}</strong>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="modern-quick-visuals modern-page">
        <div className="modern-section-head">
          <p>Visual Guide</p>
          <h2>先把條件與資料看清楚</h2>
          <span>沿用舊站錢鈔人圖示，讓服務步驟更直覺。</span>
        </div>
        <div className="modern-quick-visuals__grid">
          {quickVisuals.map((item) => (
            <article key={item.title}>
              <Image src={item.image} alt={item.title} width={301} height={221} />
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="modern-notice modern-page">
        <div>
          <CheckCircle2 className="h-7 w-7" />
          <h2>法定月息、短期可議，費用依契約約定</h2>
        </div>
        <p>
          實際利息、費用、保管、還款方式與可承作條件，均以現場評估、法令規範與合約內容為準。網站資訊僅供服務介紹。
        </p>
      </section>

      <section className="modern-guide modern-page">
        <div className="modern-section-head">
          <p>Before You Apply</p>
          <h2>先確認需求，再選適合的服務</h2>
          <span>把常見情境、應備資料與注意事項整理清楚，來電前就能先判斷方向。</span>
        </div>
        <div className="modern-guide__layout">
          <div className="modern-guide__scenarios">
            {scenarioGuides.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="modern-guide__checklist">
            <h3>常見應備資料</h3>
            {documentChecklist.map((group) => (
              <details key={group.title}>
                <summary>{group.title}</summary>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
        <div className="modern-safety-strip">
          {safetyNotes.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="modern-charity">
        <div className="modern-page modern-charity__grid">
          <div>
            <p className="modern-eyebrow">Public Welfare</p>
            <h2>支持公益，讓社會充滿愛</h2>
            <div className="modern-charity__cards">
              <article>
                <Image src="/assets/legacy-web02/in_i02.jpg" alt="領養代替購買" width={303} height={234} />
                <h3>領養代替購買</h3>
              </article>
              <article>
                <Image src="/assets/legacy-web02/in_i03.jpg" alt="關心獨居老人" width={303} height={234} />
                <h3>關心獨居老人</h3>
              </article>
            </div>
          </div>
          <Image src="/assets/legacy-web02/in_b03.png" alt="國豐當舖公益角色" width={550} height={390} />
        </div>
      </section>

      <section className="modern-contact modern-page">
        <div className="modern-contact__info">
          <Image src="/assets/legacy-web02/footer-qr-mascot.png" alt="國豐當舖 LINE QR Code 與吉祥物" width={280} height={118} />
          <div>
            <p>
              <MapPin className="h-5 w-5" />
              {siteConfig.address}
            </p>
            <p>
              <Clock3 className="h-5 w-5" />
              {siteConfig.openingHours}
            </p>
            <p>
              <Phone className="h-5 w-5" />
              {siteConfig.phone}
            </p>
            <p>
              <Building2 className="h-5 w-5" />
              統一編號：{siteConfig.taxId}
            </p>
          </div>
        </div>
        <iframe
          title="國豐當舖地圖"
          src="https://www.google.com/maps?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E5%A4%A7%E5%90%8C%E5%8D%80%E6%B0%91%E6%97%8F%E8%A5%BF%E8%B7%AF78%E8%99%9F1%E6%A8%93&output=embed"
          loading="lazy"
        />
      </section>

      <div className="modern-floating-cta" aria-label="快速聯絡">
        <Link href="/contact">填單諮詢</Link>
        <a href={`tel:${siteConfig.phone}`}>電話諮詢</a>
        <a href={siteConfig.lineUrl}>LINE</a>
      </div>
    </div>
  );
}
