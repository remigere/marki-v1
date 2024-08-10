import { stripe } from "@/config/stripe"
import { NextRequest } from "next/server"
import Stripe from "stripe"
import { updateCustomerSubscriptionId } from "@/libs/supabase/update-customer-subscription-id"

const relevantEvents = new Set([
	"checkout.session.completed",
	"customer.subscription.created",
	"customer.subscription.updated",
	"customer.subscription.deleted",
])

export const POST = async (req: NextRequest) => {
	const body = await req.text()
	const sig = req.headers.get("stripe-signature") as string
	const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
	let event: Stripe.Event

	try {
		if (!sig || !webhookSecret)
			return new Response("Webhook secret not found.", { status: 400 })
		event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
	} catch (err: any) {
		return new Response(`Webhook Error: ${err.message}`, { status: 400 })
	}

	if (relevantEvents.has(event.type)) {
		try {
			switch (event.type) {
				case "customer.subscription.created":
				case "customer.subscription.updated":
				case "customer.subscription.deleted":
					const subscription = event.data
						.object as Stripe.Subscription

					const response = await updateCustomerSubscriptionId({
						customerId: subscription.customer as string,
						subscriptionId: subscription.id,
					})

					if (!response.ok)
						return new Response(response.message, { status: 400 })

					break
				case "checkout.session.completed":
					const checkoutSession = event.data
						.object as Stripe.Checkout.Session

					if (checkoutSession.mode === "subscription") {
						const subscription =
							await stripe.subscriptions.retrieve(
								checkoutSession.subscription as string,
							)

						const response = await updateCustomerSubscriptionId({
							customerId: subscription.customer as string,
							subscriptionId: subscription.id,
						})

						if (!response.ok)
							return new Response(response.message, {
								status: 400,
							})
					}
					break
				default:
					throw new Error("Unhandled relevant event!")
			}
		} catch (error) {
			return new Response(
				"Webhook handler failed. View your Next.js function logs.",
				{
					status: 400,
				},
			)
		}
	} else {
		return new Response(`Unsupported event type: ${event.type}`, {
			status: 400,
		})
	}
console.log(Response)
	return new Response(JSON.stringify({ received: true }))
}
