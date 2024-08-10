"use server"

import { stripe } from "@/config/stripe"
import { getCustomerId } from "@/libs/supabase/get-customer-id"
import { Response } from "@/core/shared/response.type"

export const createCheckoutSession = async ({
	successUrl,
	cancelUrl,
	priceId,
	subscription_data,
}: {
	successUrl: string
	cancelUrl: string
	priceId: string
	subscription_data?: {
		metadata?: Record<string, string>
	}
}): Promise<Response<{ url: string }>> => {
	let response = await getCustomerId()
	console.log(response)
	if (!response.ok) {
		return {
			ok: false,
			code: response.code,
			message: response.message,
		}
	}

	let customerId = response.data.customerId

	if (!customerId) {
		// Create a new customer if the logged-in user doesn't have an entry as customer on Stripe
		const newCustomer = await stripe.customers.create({
			email: response.data.email, // Use the fetched email
		})

		if (!newCustomer.id) {
			return {
				ok: false,
				code: "customer_creation_failed",
				message: "Failed to create a new customer",
			}
		}

		customerId = newCustomer.id
	}

	const session = await stripe.checkout.sessions.create({
		customer: customerId,
		payment_method_types: ["card"],
		line_items: [
			{
				price: priceId,
				quantity: 1,
			},
		],
		subscription_data,
		mode: "subscription",
		shipping_address_collection: {
			allowed_countries: ["US"],
		},
		success_url: successUrl,
		cancel_url: cancelUrl,
		customer_update: {
			address: 'auto',
			name: 'auto',
		},
		phone_number_collection: {
			enabled: true,
		},
	})

	return {
		ok: true,
		data: { url: session.url || "" },
	}
}
