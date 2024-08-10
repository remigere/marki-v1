"use client"

import { useRedirectToStripePayment } from "@/ui/hooks/use-redirect-to-stripe-payment"
import { ReactNode, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { BLUEPRINT_PROTOCOL_PLAN } from "@/core/plans/plans"
import { useMealPlanStore } from "@/libs/zustand/meal-plan.store"

type Props = {
	isLoggedIn: boolean
	children: ReactNode
}

export const RedirectToStripePayment = ({ isLoggedIn, children }: Props) => {
	const router = useRouter()
	const params = useSearchParams()

	const hasRedirectToStripePaymentParam = params.has(
		"redirectToStripePayment",
	)

	const daysAmount = useMealPlanStore((state) => state.daysAmount)

	const priceId = BLUEPRINT_PROTOCOL_PLAN.find(
		(value) => value.value === daysAmount,
	)?.stripePriceId

	const { onRedirectToStripePayment } = useRedirectToStripePayment({
		priceId,
	})

	useEffect(() => {
		if (isLoggedIn && hasRedirectToStripePaymentParam)
			onRedirectToStripePayment()

		if (isLoggedIn && !hasRedirectToStripePaymentParam) router.push("/")
	}, [isLoggedIn, hasRedirectToStripePaymentParam])

	return <>{children}</>
}
