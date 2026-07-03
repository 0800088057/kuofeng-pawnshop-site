const faqs = [
  {
    q: "諮詢就一定可以借到嗎？",
    a: "不一定。實際是否承作、額度、利息與費用，需依擔保品、票據、個案條件、現場評估與契約為準。",
  },
  {
    q: "需要準備哪些資料？",
    a: "依服務不同會有差異，通常需身分證明、相關權利或財產證明、票據或營業資料。建議先來電確認，避免白跑一趟。",
  },
  {
    q: "利息與費用怎麼算？",
    a: "利息、倉棧費、保管費或其他費用均依當舖業相關規範與契約說明辦理，簽約前會清楚確認。",
  },
  {
    q: "可以先用 LINE 詢問嗎？",
    a: "可以。可先簡述需求與方便聯絡時間，後續仍需依實際資料與現場評估確認。",
  },
];

export function FAQ() {
  return (
    <div className="grid gap-4">
      {faqs.map((faq) => (
        <details key={faq.q} className="rounded-3xl bg-white p-5 comic-border">
          <summary className="cursor-pointer text-lg font-black text-brand-dark">{faq.q}</summary>
          <p className="mt-3 text-sm leading-7 text-slate-600">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
