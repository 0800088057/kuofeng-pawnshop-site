import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Link href={`/services/${service.slug}`} className="group block rounded-[28px] bg-white p-5 comic-border transition hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="rounded-full bg-brand-blue px-4 py-1 text-sm font-black text-white">{service.title}</p>
          <h3 className="mt-4 text-xl font-black leading-tight text-brand-dark">{service.subtitle}</h3>
        </div>
        <Icon className="h-8 w-8 shrink-0 text-brand-blue" aria-hidden="true" />
      </div>
      <div className="mt-4 flex h-36 items-center justify-center rounded-2xl bg-sky-50">
        <Image src={service.image} alt={service.title} width={301} height={221} className="max-h-32 w-auto object-contain" />
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
      <span className="mt-5 inline-flex rounded-full bg-brand-yellow px-4 py-2 text-sm font-black text-brand-dark">
        了解服務
      </span>
    </Link>
  );
}
