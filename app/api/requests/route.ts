import type { NextRequest } from 'next/server';

export async function GET(_request: NextRequest) {
  return Response.json({
    ok: true,
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'service-marketplace'
  });
}
