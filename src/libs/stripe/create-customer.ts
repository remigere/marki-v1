import { stripe } from "@/config/stripe"
import { Response } from "@/core/shared/response.type"
import Stripe from "stripe"

export const createCustomer = async ({
	email,
}: {
	email: string
}): Promise<Response<Stripe.Customer>> => {
	try {
		const customer = await stripe.customers.create({
			email,
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
