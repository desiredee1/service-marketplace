export const serviceCategories = [
  {
    id: 'plumbing',
    name: 'Plumbing',
    description: 'Leaks, installations, drainage, and emergency repairs',
    accent: 'border-blue-200 bg-blue-50 text-blue-700'
  },
  {
    id: 'electrical',
    name: 'Electrical',
    description: 'Wiring, repairs, and safety inspections',
    accent: 'border-amber-200 bg-amber-50 text-amber-700'
  },
  {
    id: 'hvac',
    name: 'HVAC',
    description: 'Heating, cooling, and ventilation',
    accent: 'border-violet-200 bg-violet-50 text-violet-700'
  },
  {
    id: 'carpentry',
    name: 'Carpentry',
    description: 'Custom work and structural repairs',
    accent: 'border-emerald-200 bg-emerald-50 text-emerald-700'
  },
  {
    id: 'painting',
    name: 'Painting',
    description: 'Interior and exterior finishing',
    accent: 'border-rose-200 bg-rose-50 text-rose-700'
  },
  {
    id: 'cleaning',
    name: 'Cleaning',
    description: 'Home, office, and deep cleaning',
    accent: 'border-teal-200 bg-teal-50 text-teal-700'
  },
  {
    id: 'landscaping',
    name: 'Landscaping',
    description: 'Garden design and property upgrades',
    accent: 'border-green-200 bg-green-50 text-green-700'
  },
  {
    id: 'appliances',
    name: 'Appliances',
    description: 'Repair and maintenance for home gear',
    accent: 'border-indigo-200 bg-indigo-50 text-indigo-700'
  }
] as const;

export type ServiceCategoryId = (typeof serviceCategories)[number]['id'];

export type MockProvider = {
  id: string;
  name: string;
  category: ServiceCategoryId;
  rating: number;
  reviews: number;
  responseTime: string;
  image: string;
  description: string;
  available: boolean;
  serviceArea: string;
};

export const mockProviders: MockProvider[] = [
  {
    id: 'prov-001',
    name: "John's Plumbing Pro",
    category: 'plumbing',
    rating: 4.9,
    reviews: 247,
    responseTime: '5 min',
    image: '👨‍🔧',
    description: 'Licensed and insured plumber with 15+ years experience',
    available: true,
    serviceArea: 'Downtown, Midtown, Uptown'
  },
  {
    id: 'prov-002',
    name: 'ElectroWorks',
    category: 'electrical',
    rating: 4.8,
    reviews: 189,
    responseTime: '8 min',
    image: '⚡',
    description: 'Certified electrician specializing in home and commercial projects',
    available: true,
    serviceArea: 'Downtown, Waterfront, Suburbs'
  },
  {
    id: 'prov-003',
    name: 'Perfect HVAC Solutions',
    category: 'hvac',
    rating: 4.7,
    reviews: 156,
    responseTime: '10 min',
    image: '❄️',
    description: 'Professional HVAC maintenance and installation',
    available: true,
    serviceArea: 'All areas'
  },
  {
    id: 'prov-004',
    name: 'Master Carpenter',
    category: 'carpentry',
    rating: 4.9,
    reviews: 94,
    responseTime: '15 min',
    image: '🪵',
    description: 'Custom woodworking and structural repair specialist',
    available: true,
    serviceArea: 'Midtown, Uptown, Suburbs'
  },
  {
    id: 'prov-005',
    name: 'Premier Painting Co',
    category: 'painting',
    rating: 4.6,
    reviews: 312,
    responseTime: '12 min',
    image: '🎨',
    description: 'Interior and exterior painting specialists',
    available: false,
    serviceArea: 'Downtown, Midtown, Waterfront'
  },
  {
    id: 'prov-006',
    name: 'Sparkle Clean Services',
    category: 'cleaning',
    rating: 4.9,
    reviews: 428,
    responseTime: '20 min',
    image: '✨',
    description: 'Professional cleaning for homes and offices',
    available: true,
    serviceArea: 'All areas'
  },
  {
    id: 'prov-007',
    name: 'Green Thumb Landscaping',
    category: 'landscaping',
    rating: 4.7,
    reviews: 156,
    responseTime: '24 min',
    image: '🌿',
    description: 'Garden design and landscape maintenance',
    available: true,
    serviceArea: 'Suburbs, Uptown, Waterfront'
  },
  {
    id: 'prov-008',
    name: 'AppliancePro Repair',
    category: 'appliances',
    rating: 4.8,
    reviews: 203,
    responseTime: '30 min',
    image: '🔧',
    description: 'Quick appliance repairs and maintenance',
    available: true,
    serviceArea: 'All areas'
  }
];

