import { z } from 'zod';

export const serviceRequestSchema = z.object({
  profession: z.string().min(2),
  title: z.string().min(5).max(120),
  description: z.string().min(20).max(500),
  urgency: z.enum(['low', 'medium', 'high', 'emergency']),
  city: z.string().min(2).max(80),
  address: z.string().min(5).max(200)
});

export type ServiceRequestInput = z.infer<typeof serviceRequestSchema>;
