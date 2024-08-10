import { stripe } from "@/config/stripe"
import { Response } from "@/core/shared/response.type"
import Stripe from "stripe"

const calculateOrderAmount = (items: any[]) => {
	return 100
}

export const createPaymentIntent = async (): Promise<
	Response<Stripe.PaymentIntent>
> => {
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: calculateOrderAmount([]),
			currency: "usd",
			payment_method_types: ["card"],
		})

		return {
			ok: true,
			data: paymentIntent,
		}
	} catch (error: any) {
		return {
			ok: false,
			code: error?.code,
			message: error?.message,
		}
	}
}
