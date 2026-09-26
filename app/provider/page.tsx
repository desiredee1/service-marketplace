import { providerLeads } from '@/features/market/types';
import { Card } from '@/components/ui/card';
import { CheckCircle2, Clock3, MapPin, Star } from 'lucide-react';

export default function ProviderPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">Provider dashboard</p>
        <h1 className="mt-3 text-4xl font-black">Manage your leads smoothly</h1>
        <p className="mt-3 max-w-2xl text-slate-300">Prioritize work with clear lead information, response-time pressure, and predictable actions.</p>
      </section>

      <section className="grid gap-5">
        {providerLeads.map((lead) => (
          <Card key={lead.id} className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold text-slate-900">{lead.providerName}</h2>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">{lead.status}</span>
                </div>
                <p className="mt-2 text-sm text-slate-600">{lead.profession} • {lead.matchScore}% platform match</p>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5 text-sm font-semibold text-amber-700">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                {lead.rating}
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="rounded-xl bg-slate-50 p-3">
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="h-4 w-4 text-sky-600" />
                  Distance
                </div>
                <p className="mt-2 text-lg font-bold text-slate-900">{lead.distanceKm} km</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock3 className="h-4 w-4 text-amber-600" />
                  Response
                </div>
                <p className="mt-2 text-lg font-bold text-slate-900">{lead.responseTime}</p>
              </div>
              <div className="rounded-xl bg-slate-50 p-3">
                <div className="flex items-center gap-2 text-slate-600">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  Status
                </div>
                <p className="mt-2 text-lg font-bold text-slate-900">{lead.status}</p>
              </div>
            </div>
          </Card>
        ))}
      </section>
    </div>
  );
}
