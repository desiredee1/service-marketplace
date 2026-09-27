import { CustomerRequestForm } from '@/features/market/customer-request-form';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Clock3, MapPin } from 'lucide-react';

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
          Tell us what you need once. We validate the request before it enters the matching flow.
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-slate-900">What do you need help with?</h2>
          <CustomerRequestForm />
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-bold text-slate-900">How it works</h3>
          <div className="mt-5 space-y-4">
            {customerSteps.map((step, index) => (
              <div key={step} className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sm font-bold text-sky-700">
                  {index + 1}
                </div>
                <p className="pt-1 text-sm text-slate-600">{step}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <Card className="p-5">
          <MapPin className="h-8 w-8 text-sky-600" />
          <h3 className="mt-3 text-lg font-bold">Location-aware matching</h3>
          <p className="mt-2 text-sm text-slate-600">
            Find nearby providers based on your city and service area.
          </p>
        </Card>

        <Card className="p-5">
          <CheckCircle2 className="h-8 w-8 text-emerald-600" />
          <h3 className="mt-3 text-lg font-bold">Quality controls</h3>
          <p className="mt-2 text-sm text-slate-600">
            Clear descriptions and verified professionals reduce friction.
          </p>
        </Card>

        <Card className="p-5">
          <Clock3 className="h-8 w-8 text-amber-500" />
          <h3 className="mt-3 text-lg font-bold">Urgency-aware flow</h3>
          <p className="mt-2 text-sm text-slate-600">
            Emergency requests are prioritized for faster response times.
          </p>
        </Card>
      </section>
    </div>
  );
}
