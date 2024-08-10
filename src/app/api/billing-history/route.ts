// app/api/billing-history/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-04-10',
});

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const customerId = searchParams.get('customerId');

  if (!customerId) {
    return NextResponse.json({ error: 'Customer ID is required' }, { status: 400 });
  }

  try {
    const charges = await stripe.charges.list({ customer: customerId });
    return NextResponse.json({ charges });
  } catch (error) {
    console.error('Error fetching billing history:', error);
    return NextResponse.json({ error: 'Error fetching billing history' }, { status: 500 });
  }
}
