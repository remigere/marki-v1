// app/api/subscription/route.ts
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
    const customer = await stripe.customers.retrieve(customerId, {
      expand: ['subscriptions'],
    });
    console.log(customer)
    return NextResponse.json(customer);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}



