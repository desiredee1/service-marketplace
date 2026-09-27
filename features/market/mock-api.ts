import { mockProviders } from './data';
import type { CustomerRequest, ProviderLead, ProviderMatch } from './types';

const REQUESTS_KEY = 'service-marketplace:requests';
const LEADS_KEY = 'service-marketplace:leads';

function readStorage<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage<T>(key: string, value: T) {
  if (typeof window === 'undefined') return;

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage errors in restricted environments.
  }
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export async function submitServiceRequest(input: {
  profession: string;
  title: string;
  description: string;
  urgency: 'low' | 'medium' | 'high' | 'emergency';
  city: string;
  address: string;
}) {
  await new Promise((resolve) => setTimeout(resolve, 600));

  const request: CustomerRequest = {
    id: `req-${Date.now()}`,
    customerId: 'customer-demo',
    profession: input.profession,
    title: input.title,
    description: input.description,
    urgency: input.urgency,
    city: input.city,
    address: input.address,
    createdAt: new Date().toISOString(),
    status: 'open'
  };

  const requests = readStorage<CustomerRequest[]>(REQUESTS_KEY, []);
  writeStorage(REQUESTS_KEY, [request, ...requests].slice(0, 12));

  return { request, matches: matchProvidersForRequest(request) };
}

export function getSavedRequests(): CustomerRequest[] {
  return readStorage<CustomerRequest[]>(REQUESTS_KEY, []);
}

export function getProviderLeads(): ProviderLead[] {
  const stored = readStorage<ProviderLead[]>(LEADS_KEY, []);
  if (stored.length > 0) return stored;

  const initial = [
    {
      id: 'lead-1',
      leadId: 'lead-1',
      providerName: 'Aiden M.',
      profession: 'Plumbing',
      matchScore: 96,
      distanceKm: 3.2,
      responseTime: 'under 10 min',
      rating: 4.9,
      status: 'pending',
      customerCity: 'Durban',
      createdAt: '2026-09-27T08:15:00.000Z'
    },
    {
      id: 'lead-2',
      leadId: 'lead-2',
      providerName: 'Sonia K.',
      profession: 'Electrical',
      matchScore: 92,
      distanceKm: 5.4,
      responseTime: 'under 15 min',
      rating: 4.8,
      status: 'pending',
      customerCity: 'Durban',
      createdAt: '2026-09-27T08:30:00.000Z'
    },
    {
      id: 'lead-3',
      leadId: 'lead-3',
      providerName: 'Daniel T.',
      profession: 'IT Support',
      matchScore: 89,
      distanceKm: 8.1,
      responseTime: 'under 20 min',
      rating: 4.7,
      status: 'accepted',
      customerCity: 'Johannesburg',
      createdAt: '2026-09-27T08:45:00.000Z'
    }
  ] satisfies ProviderLead[];

  writeStorage(LEADS_KEY, initial);
  return initial;
}

export function updateProviderLeadStatus(leadId: string, status: 'accepted' | 'declined') {
  const leads = getProviderLeads().map((lead) =>
    lead.leadId === leadId ? { ...lead, status } : lead
  );
  writeStorage(LEADS_KEY, leads);
  return leads;
}

export function matchProvidersForRequest(request: CustomerRequest): ProviderMatch[] {
  const category = slugify(request.profession);
  const matches = mockProviders
    .filter((provider) => provider.available && provider.category === category)
    .map((provider, index) => ({
      id: provider.id,
      name: provider.name,
      rating: provider.rating,
      reviews: provider.reviews,
      responseTime: provider.responseTime,
      image: provider.image,
      description: provider.description,
      available: provider.available,
      serviceArea: provider.serviceArea,
      distanceKm: Number((1.8 + index * 1.9 + (request.city.length % 4) * 0.5).toFixed(1)),
      matchScore: 96 - index * 4,
      category: provider.category
    }));

  if (matches.length === 0) {
    return mockProviders
      .filter((provider) => provider.available)
      .slice(0, 3)
      .map((provider, index) => ({
        id: provider.id,
        name: provider.name,
        rating: provider.rating,
        reviews: provider.reviews,
        responseTime: provider.responseTime,
        image: provider.image,
        description: provider.description,
        available: provider.available,
        serviceArea: provider.serviceArea,
        distanceKm: Number((3 + index * 1.8).toFixed(1)),
        matchScore: 86 - index * 2,
        category: provider.category
      }));
  }

  return matches;
}

























































































































































































































































































































































































































































































































































