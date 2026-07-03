import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/ContactForm";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionTitle } from "@/components/SectionTitle";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/metadata";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return createMetadata({
    title: service.title,
    description: `${service.title}服務說明：${service.description}`,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const Icon = service.icon;

  return (
    <>
      <section className="blue-pattern px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_.85fr] md:items-center">
          <div>
            <p className="inline-flex rounded-full bg-brand-yellow px-5 py-2 text-sm font-black text-brand-dark comic-border">
              國豐當舖服務
            </p>
            <h1 className="mt-6 text-5xl font-black leading-tight text-white md:text-7xl">{service.title}</h1>
            <p className="mt-5 max-w-2xl text-lg font-bold leading-9 text-white/92">{service.description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {service.points.map((point) => (
                <span key={point} className="rounded-full bg-white px-4 py-2 text-sm font-black text-brand-deep">
                  {point}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-[32px] bg-white p-8 comic-border">
            <Icon className="mx-auto h-16 w-16 text-brand-blue" />
            <Image src={service.image} alt={service.title} width={301} height={221} className="mx-auto mt-6 h-56 w-auto object-contain" />
          </div>
        </div>
      </section>

      <section className="grid-paper px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title={`${service.title}辦理重點`} subtitle="以下為初步說明，實際文件、條件與可承作方式以現場評估及契約為準。" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["先確認需求", "評估條件與資料", "清楚說明契約"].map((title, index) => (
              <article key={title} className="rounded-[28px] bg-white p-6 comic-border">
                <p className="text-4xl font-black text-brand-blue">0{index + 1}</p>
                <h2 className="mt-4 text-xl font-black text-brand-dark">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  國豐當舖會依服務類型與個案條件提供說明，不以保證核准或固定額度作為承諾。
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle center title="辦理流程" subtitle="流程盡量簡單，但每一步都需要清楚確認。" />
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <section className="grid-paper px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[.9fr_1.1fr] md:items-start">
          <div>
            <SectionTitle title={`諮詢${service.title}`} subtitle="留下資料後，專人會依需求聯繫。第一版先保留前端表單驗證，後續可接通知。" />
            <Link href="/services" className="mt-7 inline-flex rounded-full bg-brand-yellow px-6 py-3 text-sm font-black text-brand-dark comic-border">
              回服務列表
            </Link>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
