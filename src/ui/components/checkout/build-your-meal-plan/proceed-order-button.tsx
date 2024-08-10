"use client"

import { Button } from "@/design-system/button"
import { useMealPlanStore } from "@/libs/zustand/meal-plan.store"
import { useMemo, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { createClient } from "@/libs/supabase/client"
import { BLUEPRINT_PROTOCOL_PLAN } from "@/core/plans/plans"

const STEPS = [
  "/checkout/build-your-meal-plan",
  "/signup",
  "/checkout/delivery-address",
  "/checkout/payment-form",
  "/checkout/pick-meals",
]

export const ProceedOrderButton = () => {
  const { push } = useRouter()
  const pathname = usePathname()
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  const daysAmount = useMealPlanStore((state) => state.daysAmount)
  const meals = useMealPlanStore((state) => state.meals)

  const totalMealsAmount = useMemo(() => meals.length, [meals])

  const priceId = BLUEPRINT_PROTOCOL_PLAN.find(
    (value) => value.value === daysAmount,
  )?.stripePriceId

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient()
      const { data } = await supabase.auth.getUser()
      setIsUserLoggedIn(!!data.user)
    }

    checkAuth()
  }, [])

  const onContinue = async () => {
    // Determine the current step
    const currentStepIndex = STEPS.findIndex((step) => step === pathname)

    // Determine the next step based on user authentication
    let nextStep
    if (isUserLoggedIn) {
      // Skip the signup step if the user is logged in
      nextStep = STEPS.find((step, index) => index > currentStepIndex && step !== "/signup")
    } else {
      nextStep = STEPS[currentStepIndex + 1]
    }

    // If next step exists, navigate to it
    if (nextStep) {
      push(nextStep)
    }
  }

  // Hide the button on the payment step
  if (pathname === "/checkout/payment-form") {
    return null
  }

  return (
    <Button
      className="w-full"
      onClick={onContinue}
      disabled={totalMealsAmount !== daysAmount}
    >
      Proceed with my order
    </Button>
  )
}
