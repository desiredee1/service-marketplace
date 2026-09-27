'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Clock3, MapPin, Star, XCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { getProviderLeads, updateProviderLeadStatus } from '@/features/market/mock-api';
import type { ProviderLead } from '@/features/market/types';

export function ProviderDashboard() {
  const [leads, setLeads] = useState<ProviderLead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLeads(getProviderLeads());
      setLoading(false);
    }, 350);

    return () => window.clearTimeout(timer);
  }, []);

  const handleDecision = (leadId: string, status: 'accepted' | 'declined') => {
    setLeads((current) => current.map((lead) => (lead.leadId === leadId ? { ...lead, status } : lead)));
    updateProviderLeadStatus(leadId, status);
  };

  if (loading) {
    return (
      <section className="space-y-4">
        {[0, 1, 2].map((item) => (
          <div key={item} className="animate-pulse rounded-2xl border border-slate-200 bg-slate-100 p-6">
            <div className="h-4 w-32 rounded bg-slate-200" />
            <div className="mt-4 h-7 w-48 rounded bg-slate-200" />
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <div className="h-16 rounded-xl bg-slate-200" />
              <div className="h-16 rounded-xl bg-slate-200" />
              <div className="h-16 rounded-xl bg-slate-200" />
            </div>
          </div>
        ))}
      </section>
    );
  }

  if (leads.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-10 text-center text-slate-600">
        No active leads right now. New customer requests will appear here.
      </div>
    );
  }

  return (
    <section className="grid gap-5">
      {leads.map((lead) => (
        <Card key={lead.id} className="p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-slate-900">{lead.providerName}</h2>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                    lead.status === 'accepted'
                      ? 'bg-emerald-50 text-emerald-700'
                      : lead.status === 'declined'
                        ? 'bg-rose-50 text-rose-700'
                        : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {lead.status}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                {lead.profession} • {lead.matchScore}% platform match
              </p>
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

          {lead.status === 'pending' && (
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => handleDecision(lead.leadId, 'accepted')}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                <CheckCircle2 className="h-4 w-4" />
                Accept lead
              </button>
              <button
                type="button"
                onClick={() => handleDecision(lead.leadId, 'declined')}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                <XCircle className="h-4 w-4" />
                Decline lead
              </button>
            </div>
          )}
        </Card>
      ))}
    </section>
  );
}
