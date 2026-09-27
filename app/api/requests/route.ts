import { randomUUID } from 'node:crypto';
import { serviceRequestSchema } from '@/lib/validation';

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const result = serviceRequestSchema.safeParse(body);
    if (!result.success) {
      return Response.json({ error: result.error.issues[0]?.message ?? 'Invalid request.' }, { status: 400 });
    }

    // Persistence is deliberately isolated here. Connect this boundary to Supabase
    // after authentication is enabled; the endpoint remains usable in demo mode.
    return Response.json({ id: randomUUID(), status: 'received', data: result.data }, { status: 201 });
  } catch {
    return Response.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }
}
