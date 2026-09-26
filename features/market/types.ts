export type ProviderLead = {
  id: string;
  providerName: string;
  profession: string;
  matchScore: number;
  distanceKm: number;
  responseTime: string;
  rating: number;
  status: 'pending' | 'accepted' | 'declined';
};

export const providerLeads: ProviderLead[] = [
  {
    id: 'lead-1',
    providerName: 'Aiden M.',
    profession: 'Plumbing',
    matchScore: 96,
    distanceKm: 3.2,
    responseTime: 'under 10 min',
    rating: 4.9,
    status: 'pending'
  },
  {
    id: 'lead-2',
    providerName: 'Sonia K.',
    profession: 'Electrical',
    matchScore: 92,
    distanceKm: 5.4,
    responseTime: 'under 15 min',
    rating: 4.8,
    status: 'pending'
  },
  {
    id: 'lead-3',
    providerName: 'Daniel T.',
    profession: 'IT Support',
    matchScore: 89,
    distanceKm: 8.1,
    responseTime: 'under 20 min',
    rating: 4.7,
    status: 'accepted'
  }
];
