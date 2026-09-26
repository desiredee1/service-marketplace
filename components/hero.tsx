import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles, Star, MapPin } from 'lucide-react';
import { serviceCategories } from '@/features/market/data';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-violet-50" aria-hidden="true" />
      <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trusted by 12k+ local customers
          </div>

          <h1 className="max-w-xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Find trusted local experts in minutes.
          </h1>

          <p className="mt-4 max-w-lg text-base text-slate-600 sm:text-lg">
            Book vetted professionals for home repairs, business support, maintenance, and urgent jobs with a safer and smoother customer flow.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-xl bg-slate-900 text-white hover:bg-slate-800">
              <Link href="/customer">
                Book a service <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-xl border-slate-200 bg-white text-slate-900">
              <Link href="/provider">Become a provider</Link>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              4.9 average rating
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-sky-500" />
              Covering your local area
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-slate-50 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Live activity</p>
              <p className="mt-1 text-xl font-bold text-white">24 providers online</p>
            </div>
            <div className="rounded-full border border-emerald-400 bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-300">
              Ready now
            </div>
          </div>

          <div className="space-y-3">
            {serviceCategories.slice(0, 3).map((category) => (
              <div key={category.id} className={`rounded-2xl border px-3 py-3 ${category.accent}`}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold">{category.name}</p>
                    <p className="mt-1 text-xs opacity-80">{category.description}</p>
                  </div>
                  <Sparkles className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
