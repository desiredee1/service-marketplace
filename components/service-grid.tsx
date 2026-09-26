import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock3, ShieldCheck } from 'lucide-react';
import { serviceCategories } from '@/features/market/data';

export function ServiceGrid() {
  return (
    <section className="mt-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">Popular categories</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Choose the service you need</h2>
        </div>
        <Link href="/customer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900">
          Open marketplace <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {serviceCategories.map((category) => (
          <article key={category.id} className={`rounded-2xl border p-5 ${category.accent} shadow-sm`}>
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-white/70 p-2 text-lg font-bold text-slate-900">{category.name.slice(0, 1)}</div>
              <CheckCircle2 className="h-4 w-4" />
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">{category.name}</h3>
            <p className="mt-2 text-sm text-slate-700">{category.description}</p>
            <div className="mt-5 flex items-center justify-between text-xs font-medium text-slate-700">
              <span className="inline-flex items-center gap-1"><Clock3 className="h-3.5 w-3.5" /> 15 min response</span>
              <span className="inline-flex items-center gap-1"><ShieldCheck className="h-3.5 w-3.5" /> Verified</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
