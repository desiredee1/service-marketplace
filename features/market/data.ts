export const serviceCategories = [
  {
    id: 'plumbing',
    name: 'Plumbing',
    description: 'Leaks, installations, drainage, and emergency repairs',
    accent: 'bg-blue-50 text-blue-700 border-blue-200'
  },
  {
    id: 'electrical',
    name: 'Electrical',
    description: 'Wiring, repairs, and safety inspections',
    accent: 'bg-amber-50 text-amber-700 border-amber-200'
  },
  {
    id: 'it-support',
    name: 'IT Support',
    description: 'Home office setup, connectivity, and troubleshooting',
    accent: 'bg-violet-50 text-violet-700 border-violet-200'
  },
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Maintenance, diagnostics, and roadside assistance',
    accent: 'bg-orange-50 text-orange-700 border-orange-200'
  }
] as const;

export type ServiceCategoryId = (typeof serviceCategories)[number]['id'];
