import { ProviderDashboard } from '@/features/market/provider-dashboard';

export default function ProviderPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">Provider dashboard</p>
        <h1 className="mt-3 text-4xl font-black">Manage your leads smoothly</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Prioritize work with clear lead information, response-time pressure, and predictable actions.
        </p>
      </section>

      <ProviderDashboard />
    </div>
  );
}
