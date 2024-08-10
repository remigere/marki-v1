// src/app/api/create-payment-intent/route.ts
import { stripe } from "@/config/stripe";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    const { amount, metadata } = await req.json();
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            // Include metadata in the payment intent creation
            metadata: metadata, // Assuming metadata is passed in the request body
        });

        return NextResponse.json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error(error);
        return new NextResponse('An error occurred while creating the payment intent.', { status: 500 });
    }
};