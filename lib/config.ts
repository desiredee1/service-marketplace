import { z } from 'zod';

export const appConfigSchema = z.object({
  appName: z.string().default('Service Marketplace'),
  appUrl: z.string().default('http://localhost:3000'),
  supabaseUrl: z.string().optional().or(z.literal('')),
  supabaseAnonKey: z.string().optional().or(z.literal('')),
  mapboxToken: z.string().optional().or(z.literal(''))
});

export const appConfig = appConfigSchema.parse({
  appName: process.env.NEXT_PUBLIC_APP_NAME ?? 'Service Marketplace',
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  supabaseAnonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
  mapboxToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? ''
});
