"use client"

import { Typography } from "@/design-system/typography"
import { useMealPlanStore } from "@/libs/zustand/meal-plan.store"
import { twMerge } from "tailwind-merge"
import { BLUEPRINT_PROTOCOL_PLAN } from "@/core/plans/plans"

export const DaysAmountPicker = () => {
	const daysAmount = useMealPlanStore((state) => state.daysAmount)
	const updateDaysAmount = useMealPlanStore((state) => state.updateDaysAmount)

	const meals = useMealPlanStore((state) => state.meals)
	const updateMeals = useMealPlanStore((state) => state.updateMeals)

	const onSelectDayAmount = (amount: number) => {
		updateDaysAmount(amount)

		if (meals.length <= amount) return

		updateMeals(meals.slice(0, amount))
	}

	return (
		<section className="space-y-4 py-6 sm:py-11 px-4 sm:px-12 border-b border-alto-200">
			<Typography as={"h2"} variant={"h3"}>
				Select number of days you want to follow the Blueprint Protocol?
			</Typography>
			<div className="flex gap-2 flex-wrap">
				{BLUEPRINT_PROTOCOL_PLAN.map(({ value, label, price }, i) => (
					<button
						key={i}
						className={twMerge(
							"border-2 border-alto-200 p-2 flex-1 hover:border-red-600 transition-all duration-150 rounded-md",
							daysAmount === value && "border-red-600",
						)}
						onClick={() => onSelectDayAmount(value)}
					>
						<Typography
							as={"div"}
							variant={"h5"}
							className="text-red-600 whitespace-nowrap"
						>
							{label}
						</Typography>
						<Typography variant={"details"}>{price}</Typography>
					</button>
				))}
			</div>
		</section>
	)
}
