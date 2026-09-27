import { z } from 'zod';

export const serviceRequestSchema = z.object({
  profession: z.string().trim().min(2).max(40),
  title: z.string().trim().min(5).max(120),
  description: z.string().trim().min(20).max(500),
  urgency: z.enum(['low', 'medium', 'high', 'emergency']),
  city: z.string().trim().min(2).max(80),
  address: z.string().trim().min(5).max(200)
});

export type ServiceRequestInput = z.infer<typeof serviceRequestSchema>;
