'use client';

import { useState } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, Clock3, Loader2, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { serviceCategories } from '@/features/market/data';
import { matchProvidersForRequest, submitServiceRequest } from '@/features/market/mock-api';
import { serviceRequestSchema } from '@/lib/validation';

const initialValues = {
  profession: '',
  title: '',
  description: '',
  urgency: 'medium' as const,
  city: '',
  address: ''
};

export function CustomerRequestForm() {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRequestId, setSubmittedRequestId] = useState('');
  const [matches, setMatches] = useState<typeof import('@/features/market/data').ProviderMatch[]>([]);

  const updateField = (field: keyof typeof initialValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setError('');
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSubmittedRequestId('');

    const parsed = serviceRequestSchema.safeParse(values);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Please check the form and try again.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitServiceRequest(parsed.data);
      setMatches(result.matches);
      setSubmittedRequestId(result.request.id);
      setValues(initialValues);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
      <fieldset>
        <legend className="text-sm font-semibold text-slate-800">Choose a category</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {serviceCategories.map((category) => {
            const active = values.profession === category.name;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => updateField('profession', category.name)}
                className={`rounded-xl border p-3 text-left text-sm font-semibold transition ${
                  active ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Short title
          <input
            required
            value={values.title}
            onChange={(event) => updateField('title', event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder:text-slate-400"
            placeholder="Leaking kitchen tap"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Urgency
          <select
            value={values.urgency}
            onChange={(event) => updateField('urgency', event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900"
          >
            <option value="low">Flexible</option>
            <option value="medium">Soon</option>
            <option value="high">Today</option>
            <option value="emergency">Emergency</option>
          </select>
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-700">
        Describe the job
        <textarea
          required
          rows={4}
          value={values.description}
          onChange={(event) => updateField('description', event.target.value)}
          className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder:text-slate-400"
          placeholder="The kitchen sink has been leaking under the cabinet for two days and needs a quick repair."
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          City
          <input
            required
            value={values.city}
            onChange={(event) => updateField('city', event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder:text-slate-400"
            placeholder="Durban"
          />
        </label>

        <label className="text-sm font-medium text-slate-700">
          Address or area
          <input
            required
            value={values.address}
            onChange={(event) => updateField('address', event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 placeholder:text-slate-400"
            placeholder="Morningside, 12 Smith Road"
          />
        </label>
      </div>

      {error && (
        <p role="alert" className="flex items-center gap-2 rounded-xl bg-rose-50 p-3 text-sm text-rose-700">
          <AlertCircle className="h-4 w-4" />
          {error}
        </p>
      )}

      {submittedRequestId && (
        <p role="status" className="flex items-center gap-2 rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700">
          <CheckCircle2 className="h-4 w-4" />
          Request {submittedRequestId} received. Matching nearby providers now.
        </p>
      )}

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full rounded-xl">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            Find verified matches
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      {matches.length > 0 && (
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">Recommended providers</h3>
            <span className="text-sm font-medium text-slate-500">{matches.length} matches</span>
          </div>

          {matches.map((provider) => (
            <div key={provider.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
                    {provider.image}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-slate-900">{provider.name}</h4>
                      {provider.available && (
                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-700">
                          Available
                        </span>
                      )}
                    </div>
                    <div className="mt-1 flex items-center gap-3 text-sm text-slate-600">
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        {provider.rating}
                      </span>
                      <span>({provider.reviews} reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-full bg-sky-50 px-2.5 py-1 text-sm font-semibold text-sky-700">
                  {provider.matchScore}% match
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-600">{provider.description}</p>

              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                <div className="rounded-xl bg-white p-2 text-sm text-slate-700">
                  <div className="flex items-center gap-1 text-slate-500">
                    <Clock3 className="h-3.5 w-3.5" />
                    Response
                  </div>
                  <div className="mt-1 font-semibold text-slate-900">{provider.responseTime}</div>
                </div>
                <div className="rounded-xl bg-white p-2 text-sm text-slate-700">
                  <div className="flex items-center gap-1 text-slate-500">
                    <MapPin className="h-3.5 w-3.5" />
                    Distance
                  </div>
                  <div className="mt-1 font-semibold text-slate-900">{provider.distanceKm} km</div>
                </div>
                <div className="rounded-xl bg-white p-2 text-sm text-slate-700">
                  <div className="flex items-center gap-1 text-slate-500">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Coverage
                  </div>
                  <div className="mt-1 font-semibold text-slate-900">{provider.serviceArea}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isSubmitting && matches.length === 0 && !submittedRequestId && (
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4 text-sm text-slate-500">
          Select a category and complete your request to see demo matches.
        </div>
      )}
    </form>
  );
}
