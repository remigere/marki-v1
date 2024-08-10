import { useEffect, useState } from "react"
import { createCheckoutSession } from "@/libs/stripe/create-checkout-session"
import { PriceId } from "@/core/plans/plans"
import { useMealPlanStore } from "@/libs/zustand/meal-plan.store"

export const useRedirectToStripePayment = ({
	priceId,
}: {
	priceId?: PriceId
}) => {
	const meals = useMealPlanStore((state) => state.meals)

	const [stripeUrl, setStripeUrl] = useState<string>("")

	useEffect(() => {
		if (!stripeUrl) return

		window.location.href = stripeUrl
	}, [stripeUrl, priceId])

	const onRedirectToStripePayment = async () => {
		if (!priceId) return

		const metadata = {
			meals: meals.map((meal) => meal.title).join(", "),
		}

		const response = await createCheckoutSession({
			successUrl: `${window.location.origin}/checkout/pick-meals`,
			cancelUrl: `${window.location.origin}/checkout/error`,
			priceId,
			subscription_data: {
				metadata,
			},
		})

		if (response.ok && response.data.url) setStripeUrl(response.data.url)
	}

	return {
		onRedirectToStripePayment,
	}
}
