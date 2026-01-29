import { NextResponse } from 'next/server';
import { ApiResponse } from '@/types';

export async function GET() {
  const response: ApiResponse<{ status: string }> = {
    success: true,
    data: { status: 'ok' },
  };

  return NextResponse.json(response);
}
