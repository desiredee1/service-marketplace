import Link from 'next/link';
import { ArrowRight, CircleCheckBig, MapPinned, ShieldCheck, TimerReset } from 'lucide-react';
import { Hero } from '@/components/hero';
import { ServiceGrid } from '@/components/service-grid';
import { TrustStrip } from '@/components/trust-strip';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />
      <ServiceGrid />
      <TrustStrip />

      <section id="security" className="grid gap-6 lg:grid-cols-4">
        {[
          { icon: ShieldCheck, title: 'Verified providers', text: 'Every service provider goes through a basic trust and profile review.' },
          { icon: TimerReset, title: 'Fast-response flow', text: 'Leads are matched and displayed quickly for demand-driven requests.' },
          { icon: MapPinned, title: 'Location-aware matching', text: 'Customers and providers are connected based on proximity and relevance.' },
          { icon: CircleCheckBig, title: 'Reliable operations', text: 'The platform is designed for predictable growth, testing, and smooth handoffs.' }
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 inline-flex rounded-xl bg-sky-50 p-2 text-sky-700">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{text}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white shadow-soft">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">Ready to grow</p>
            <h2 className="mt-2 text-3xl font-bold">Launch with a stable foundation for expansion.</h2>
          </div>
          <Link href="/customer" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
            Start exploring <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
