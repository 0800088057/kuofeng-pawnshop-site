import { Banknote, Building2, Car, FileCheck2, Home, Store } from "lucide-react";

export const services = [
  {
    slug: "business-financing",
    title: "工商融資",
    subtitle: "營運週轉、短期資金需求評估",
    description: "依營業狀況、資產條件與週轉需求協助初步評估，實際方案以現場說明與契約為準。",
    icon: Building2,
    image: "/assets/old-blue/01-03.png",
    points: ["營運週轉", "店家資金", "短期資金安排"],
  },
  {
    slug: "car-loan",
    title: "汽車借款",
    subtitle: "汽車、貨車、營業車資金需求",
    description: "可依車況、車齡、權屬與使用需求進行評估，條件與額度以實際鑑價及契約為準。",
    icon: Car,
    image: "/assets/old-blue/01-07.png",
    points: ["汽車借款", "營業車週轉", "代償降息諮詢"],
  },
  {
    slug: "check-loan",
    title: "支票貼現",
    subtitle: "票據資金週轉與企業短期需求",
    description: "協助了解票據貼現與短期週轉方式，申辦條件、費用與撥款時程以實際評估為準。",
    icon: FileCheck2,
    image: "/assets/old-blue/01-15.png",
    points: ["支票貼現", "票據週轉", "企業短期資金"],
  },
  {
    slug: "second-mortgage",
    title: "房屋二胎",
    subtitle: "房屋資產活用與二胎資金評估",
    description: "依房屋座落、貸款餘額、產權狀況與需求金額評估可討論方向，實際內容以契約為準。",
    icon: Home,
    image: "/assets/old-blue/01-09.png",
    points: ["房屋二胎", "房屋代償", "資產活用"],
  },
  {
    slug: "item-pawn",
    title: "萬物質借",
    subtitle: "可評估有價物品典當需求",
    description: "可依物品種類、保存狀況與市場價值進行估價，保管、利息與費用依規定及契約辦理。",
    icon: Store,
    image: "/assets/old-blue/01-12.png",
    points: ["有價物品", "典當估價", "短期週轉"],
  },
  {
    slug: "refinance",
    title: "代償諮詢",
    subtitle: "既有借款壓力與整合方向",
    description: "針對既有借款與還款壓力提供初步諮詢，是否適合代償仍需依條件與契約評估。",
    icon: Banknote,
    image: "/assets/old-blue/01-18.png",
    points: ["汽車代償", "房屋代償", "還款壓力評估"],
  },
];

export type Service = (typeof services)[number];
