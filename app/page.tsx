import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

const homeServices = [
  {
    title: "工商融資",
    desc: "公司、工廠、商號與機械設備等需求，可先來電說明狀況，由專人協助評估。",
    image: "/assets/legacy-web02/i09.png",
    href: "/services/business-financing",
  },
  {
    title: "救急金三點半",
    desc: "臨時資金週轉、票據與短期需求，可先確認條件與可行方向。",
    image: "/assets/legacy-web02/i04.png",
    href: "/contact",
  },
  {
    title: "代辦支票貼現",
    desc: "個人票、公司票與客票等需求，依票據狀況與現場評估說明。",
    image: "/assets/legacy-web02/i20.png",
    href: "/services/check-loan",
  },
  {
    title: "創業／各項貸款",
    desc: "創業週轉、自營工作者資金需求，可先諮詢適合的方向。",
    image: "/assets/legacy-web02/i18.png",
    href: "/services",
  },
  {
    title: "汽車借款",
    desc: "汽車、機車與營業用車皆可先詢問，條件依車況與契約為準。",
    image: "/assets/legacy-web02/i03.png",
    href: "/services/car-loan",
  },
  {
    title: "萬物質借",
    desc: "名錶、鑽石、精品、黃金等物品，可由專人協助估價。",
    image: "/assets/legacy-web02/i24.png",
    href: "/services/item-pawn",
  },
  {
    title: "房屋二胎",
    desc: "有房產但仍有資金需求，可先了解二胎與增貸方向。",
    image: "/assets/legacy-web02/i16.png",
    href: "/services/second-mortgage",
  },
  {
    title: "房屋代償專案",
    desc: "代償資料與條件需逐案評估，協助釐清可能方案。",
    image: "/assets/legacy-web02/i13.png",
    href: "/services/refinance",
  },
  {
    title: "代償當舖",
    desc: "當舖借款壓力與週轉需求，可先諮詢代償方向。",
    image: "/assets/legacy-web02/i08.png",
    href: "/services/refinance",
  },
];

const interestItems = [
  ["利息與費用透明說明", "洽詢時先說明計算方式，實際條件依契約與法令規範。"],
  ["短期需求可先評估", "不確定是否適合承作，可先來電由專人協助判斷。"],
  ["流程與資料清楚", "送件前確認所需資料，降低來回補件時間。"],
  ["還款方式彈性討論", "可依資金週轉狀況討論合適的還款安排。"],
  ["代償方向可諮詢", "既有借款壓力較大時，可先評估是否有調整空間。"],
];

export default function HomePage() {
  return (
    <div className="legacy-home">
      <section className="legacy-hero" aria-labelledby="home-heading">
        <h1 id="home-heading" className="sr-only">
          國豐當舖，一通電話，讓您遠離高利
        </h1>
      </section>

      <section className="legacy-services">
        <div className="legacy-section-title">
          <h2>我們服務的項目</h2>
          <p>各行各業皆可先來電詢問，承作條件仍需依評估與契約為準。</p>
        </div>
        <div className="legacy-service-grid">
          {homeServices.map((service) => (
            <Link href={service.href} key={service.title} className="legacy-service-card">
              <Image src={service.image} alt={service.title} width={118} height={118} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="legacy-principle">
        <div className="legacy-principle__mascot">
          <Image src="/assets/legacy-web02/i25.png" alt="國豐當舖吉祥物" width={360} height={335} />
        </div>
        <div className="legacy-principle__copy">
          <p>成立於民國77年，已有30年服務歷史</p>
          <h2>以誠信為經營原則</h2>
          <p>
            國豐當舖長期服務台北大同區在地客戶，重視清楚說明、合法流程與契約透明。
            我們不是銀行，亦不保證核准；每一筆需求都會依物件、收入、還款能力與實際條件評估後說明。
          </p>
        </div>
      </section>

      <section className="legacy-benefits">
        <div className="legacy-benefits__inner">
          <h2>
            <span>法定月息，</span>短期可議，
            <br />
            轉介紹客戶可享降息優惠。
          </h2>
          <div className="legacy-benefit-list">
            {interestItems.map(([label, text]) => (
              <div className="legacy-benefit-row" key={label}>
                <strong>{label}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="legacy-charity">
        <div className="legacy-charity__inner">
          <div>
            <h2>支持公益</h2>
            <p>讓社會充滿愛</p>
            <div className="legacy-charity__cards">
              <article>
                <Image src="/assets/legacy-web02/in_i02.jpg" alt="領養代替購買" width={300} height={180} />
                <h3>領養代替購買</h3>
              </article>
              <article>
                <Image src="/assets/legacy-web02/in_i03.jpg" alt="關心獨居老人" width={300} height={180} />
                <h3>關心獨居老人</h3>
              </article>
            </div>
          </div>
          <Image className="legacy-charity__mascot" src="/assets/legacy-web02/in_b03.png" alt="國豐當舖公益角色" width={420} height={360} />
        </div>
      </section>

      <section className="legacy-contact">
        <div className="legacy-contact__info">
          <Image src="/assets/legacy-web02/n01.png" alt="國豐當舖 LINE QR Code" width={220} height={78} />
          <div>
            <p>服務地址：{siteConfig.address}</p>
            <p>服務時間：{siteConfig.openingHours}</p>
            <p>服務電話：{siteConfig.phone}</p>
            <p>統一編號：{siteConfig.taxId}</p>
          </div>
        </div>
        <div className="legacy-contact__map">
          <iframe
            title="國豐當舖地圖"
            src="https://www.google.com/maps?q=%E5%8F%B0%E5%8C%97%E5%B8%82%E5%A4%A7%E5%90%8C%E5%8D%80%E6%B0%91%E6%97%8F%E8%A5%BF%E8%B7%AF78%E8%99%9F1%E6%A8%93&output=embed"
            loading="lazy"
          />
        </div>
      </section>

      <div className="legacy-floating-cta" aria-label="快速聯絡">
        <Link href="/contact">填單諮詢</Link>
        <a href={`tel:${siteConfig.phone}`}>電話諮詢</a>
        <a href={siteConfig.lineUrl}>LINE</a>
      </div>

      <Link href="/contact" className="legacy-mobile-cta">
        <MapPin className="h-4 w-4" />
        立即諮詢
      </Link>
    </div>
  );
}
