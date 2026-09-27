export type CustomerRequest = {
  id: string;
  customerId: string;
  profession: string;
  title: string;
  description: string;
  urgency: 'low' | 'medium' | 'high' | 'emergency';
  city: string;
  address: string;
  createdAt: string;
  status: 'open' | 'matched' | 'completed' | 'cancelled';
  matchedProvider?: string;
};

export type ProviderMatch = {
  id: string;
  name: string;
  rating: number;
  reviews: number;
  responseTime: string;
  image: string;
  description: string;
  available: boolean;
  serviceArea: string;
  distanceKm: number;
  matchScore: number;
  category: string;
};

export type ProviderLead = {
  id: string;
  leadId: string;
  providerName: string;
  profession: string;
  matchScore: number;
  distanceKm: number;
  responseTime: string;
  rating: number;
  status: 'pending' | 'accepted' | 'declined';
  customerCity: string;
  createdAt: string;
};

export const defaultProviderLeads: ProviderLead[] = [
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
];
