import Link from 'next/link';
import { ArrowRight, Check, ShieldCheck, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TrustStrip() {
  const stats = [
    { label: 'Verified experts', value: '1,200+' },
    { label: 'Customer satisfaction', value: '98%' },
    { label: 'Avg. response time', value: '< 12 min' }
  ];

  return (
    <section className="mt-10 rounded-3xl border border-slate-200 bg-slate-900 p-8 text-slate-50 shadow-soft">
      <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">Why customers trust us</p>
          <h3 className="mt-2 text-3xl font-bold text-white">Built for speed, trust, and reliability</h3>
        </div>

        <Button asChild variant="secondary" className="rounded-xl bg-white text-slate-900 hover:bg-slate-100">
          <Link href="/customer">
            Explore services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-slate-700 bg-slate-800/80 p-5">
            <div className="mb-3 flex items-center gap-2 text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            </div>
            <p className="text-3xl font-black text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300">
        <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Secure matching flow</span>
        <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Phone and address verification</span>
        <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Simple provider onboarding</span>
      </div>
    </section>
  );
}
