import { ClipboardList, FileSearch, MessageCircle, WalletCards } from "lucide-react";

const steps = [
  {
    title: "電話或線上諮詢",
    text: "先了解資金需求、擔保品或票據條件，確認是否適合進一步評估。",
    icon: MessageCircle,
  },
  {
    title: "條件與資料確認",
    text: "依服務類型確認車輛、房屋、票據或營業資料，避免不必要的往返。",
    icon: ClipboardList,
  },
  {
    title: "現場評估與說明",
    text: "由專人說明可評估方向、費用項目與契約重點，條件以實際評估為準。",
    icon: FileSearch,
  },
  {
    title: "簽約與撥款",
    text: "確認條件後依約辦理，利息、保管與還款方式均依契約及法令規範。",
    icon: WalletCards,
  },
];

export function ProcessSteps() {
  return (
    <div className="grid gap-5 md:grid-cols-4">
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <article key={step.title} className="rounded-[28px] bg-white p-5 comic-border">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-lg font-black text-brand-dark">
                {index + 1}
              </span>
              <Icon className="h-7 w-7 text-brand-blue" />
            </div>
            <h3 className="mt-5 text-xl font-black text-brand-dark">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
          </article>
        );
      })}
    </div>
  );
}
