import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Clock3, MapPin, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';

const customerSteps = [
  'Pick a service category',
  'Describe your job',
  'Get matched with nearby providers',
  'Accept the best option and get scheduled'
];

export default function CustomerPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">Customer portal</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Book a trusted local service</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          A simple and safe request flow reduces cognitive load and increases trust while keeping the experience fast.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">What do you need help with?</h2>
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">Step 1 of 4</span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {['Plumbing', 'Electrical', 'IT Support', 'Automotive'].map((item) => (
              <Link key={item} href="#" className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-slate-300 hover:bg-white">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800">{item}</span>
                  <ArrowRight className="h-4 w-4 text-slate-600" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-700">Or describe your issue</p>
            <textarea
              rows={4}
              className="mt-3 w-full resize-none rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-slate-300"
              placeholder="My kitchen sink is leaking and I need a fixed-price visit quickly."
            />
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold text-slate-900">How it works</h3>
          <div className="mt-5 space-y-4">
            {customerSteps.map((step, index) => (
              <div key={step} className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="pt-1 text-sm text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <Card className="p-5">
          <MapPin className="h-8 w-8 text-sky-600" />
          <h3 className="mt-3 text-lg font-bold text-slate-900">Location-aware matching</h3>
          <p className="mt-2 text-sm text-slate-600">Find nearby experts faster and reduce irrelevant leads.</p>
        </Card>
        <Card className="p-5">
          <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          <h3 className="mt-3 text-lg font-bold text-slate-900">Quality controls</h3>
          <p className="mt-2 text-sm text-slate-600">Clear service descriptions and verification create higher trust.</p>
        </Card>
        <Card className="p-5">
          <Clock3 className="h-8 w-8 text-amber-500" />
          <h3 className="mt-3 text-lg font-bold text-slate-900">Urgency-aware flow</h3>
          <p className="mt-2 text-sm text-slate-600">Emergency requests prioritise response and scheduling without chaos.</p>
        </Card>
      </section>
    </div>
  );
}
