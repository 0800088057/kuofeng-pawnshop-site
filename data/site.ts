export const siteConfig = {
  name: "國豐當舖",
  legalName: "國豐當舖",
  taxId: "15092702",
  address: "台北市大同區民族西路78號1樓",
  phone: "02-2599-3130",
  openingHours: "週一至週六 09:00-18:00",
  description:
    "國豐當舖位於台北市大同區，提供汽機車借款、房屋二胎、支票貼現、工商融資與代償諮詢等服務，條件依現場評估與契約為準。",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kuofeng.example.com",
  lineUrl: process.env.LINE_URL || "#",
};

export const navigation = [
  { label: "首頁", href: "/" },
  { label: "房屋二胎", href: "/services/second-mortgage" },
  { label: "汽車借款", href: "/services/car-loan" },
  { label: "支票借款", href: "/services/check-loan" },
  { label: "工商融資", href: "/services/business-financing" },
  { label: "房屋代償", href: "/services/refinance" },
  { label: "代償當舖", href: "/services/refinance" },
  { label: "萬物質借", href: "/services/item-pawn" },
];

export const quickLinks = [
  { label: "汽車借款", href: "/services/car-loan" },
  { label: "房屋二胎", href: "/services/second-mortgage" },
  { label: "支票貼現", href: "/services/check-loan" },
  { label: "工商融資", href: "/services/business-financing" },
];
