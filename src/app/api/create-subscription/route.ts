// src/app/api/create-subscription/route.ts
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { insertSubscriptionData } from '../../../../utils/supabase/supabaseUtils'; // Ensure this path is correct

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-04-10',
});

const calculatePrice = (productId: string, daysAmount: string): number => {
    return (18 * (parseInt(daysAmount) * 3) + 19) * 100 + 2 * (parseInt(daysAmount));
};

export const POST = async (req: NextRequest) => {
    const {
        name,
        email,
        productId,
        duration,
        paymentMethodId,
        payment_intent_data,
        daysAmount,
        address,
        phone
    } = await req.json();

    try {
        const amount = calculatePrice(productId, daysAmount);

        // Create customer if not existing
        const customer = await stripe.customers.create({
            name,
            email,
            phone,
            address, // Include the address in the customer creation
            metadata: payment_intent_data.metadata // Use the metadata from the request
        });

        // Attach payment method to customer
        await stripe.paymentMethods.attach(paymentMethodId, {
            customer: customer.id,
        });

        // Set the default payment method on the customer
        await stripe.customers.update(customer.id, {
            invoice_settings: {
                default_payment_method: paymentMethodId,
            },
        });

        // Create a price for the subscription
        const price = await stripe.prices.create({
            unit_amount: amount,
            currency: 'usd',
            recurring: {
                interval: duration,
            },
            product: productId,
            metadata: payment_intent_data.metadata // Include metadata here if needed
        });

        // Create the subscription with metadata
        const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ price: price.id }],
            expand: ['latest_invoice.payment_intent'],
            metadata: payment_intent_data.metadata // Include metadata here if needed
        });
        insertSubscriptionData(subscription); // Insert subscription data into the database
        // Return the subscription object
        // console.log(subscription);
        return NextResponse.json(subscription);

    } catch (err: any) {
        return new NextResponse(`Error: ${err.message}`, { status: 500 });
    }
};