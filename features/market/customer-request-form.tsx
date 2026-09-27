'use client';

import { FormEvent, useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { serviceCategories } from '@/features/market/data';
import { serviceRequestSchema } from '@/lib/validation';
import { Button } from '@/components/ui/button';

const initialValues = {
  profession: '', title: '', description: '', urgency: 'medium' as const, city: '', address: ''
};

export function CustomerRequestForm() {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState('');
  const [submittedId, setSubmittedId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function update(field: keyof typeof initialValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setError('');
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setSubmittedId('');
    const parsed = serviceRequestSchema.safeParse(values);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Please check the form and try again.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/requests', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(parsed.data)
      });
      const result = await response.json() as { id?: string; error?: string };
      if (!response.ok) throw new Error(result.error ?? 'We could not submit your request.');
      setSubmittedId(result.id ?? 'demo-request');
      setValues(initialValues);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={submit} className="mt-6 space-y-5" noValidate>
      <fieldset>
        <legend className="text-sm font-semibold text-slate-800">Choose a category</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {serviceCategories.map((category) => (
            <button type="button" key={category.id} onClick={() => update('profession', category.name)} className={`rounded-xl border p-3 text-left text-sm font-semibold transition ${values.profession === category.name ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-white'}`} aria-pressed={values.profession === category.name}>
              {category.name}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">Short title
          <input required value={values.title} onChange={(event) => update('title', event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm" placeholder="Leaking kitchen sink" />
        </label>
        <label className="text-sm font-medium text-slate-700">Urgency
          <select value={values.urgency} onChange={(event) => update('urgency', event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm">
            <option value="low">Flexible</option><option value="medium">Soon</option><option value="high">Today</option><option value="emergency">Emergency</option>
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-700">Describe the job
        <textarea required rows={4} value={values.description} onChange={(event) => update('description', event.target.value)} className="mt-2 w-full resize-none rounded-xl border border-slate-200 p-3 text-sm" placeholder="Tell providers what happened, what you need, and any useful details." />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">City
          <input required value={values.city} onChange={(event) => update('city', event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm" placeholder="Durban" />
        </label>
        <label className="text-sm font-medium text-slate-700">Address or area
          <input required value={values.address} onChange={(event) => update('address', event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 p-3 text-sm" placeholder="Durban North" />
        </label>
      </div>

      {error && <p role="alert" className="flex items-center gap-2 rounded-xl bg-rose-50 p-3 text-sm text-rose-700"><AlertCircle className="h-4 w-4" />{error}</p>}
      {submittedId && <p role="status" className="flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700"><CheckCircle2 className="h-4 w-4" />Request received. Matching can begin now.</p>}

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full rounded-xl">
        {isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Submitting...</> : <>Find verified matches <ArrowRight className="ml-2 h-4 w-4" /></>}
      </Button>
    </form>
  );
}
