import { stripe } from "@/config/stripe"
import { Response } from "@/core/shared/response.type"
import Stripe from "stripe"

export type Shipping = {
	address: {
		city: string
		country: string
		line1: string
		line2: string | undefined
		postal_code: string
		state: string
	}
	name: string
	phone: string
}

export const updateCustomerAddress = async ({
	customerId,
	shipping,
}: {
	customerId: string
	shipping: Shipping
}): Promise<Response<Stripe.Customer>> => {
	try {
		const customer = await stripe.customers.update(customerId, {
			address: shipping.address,
			shipping,
			phone: shipping.phone,
			name: shipping.name,
		})

		return {
			ok: true,
			data: customer,
		}
	} catch (error: any) {
		return {
			ok: false,
			code: error?.code,
			message: error?.message,
		}
	}
}
