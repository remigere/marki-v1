"use client"

import { Typography } from "@/design-system/typography"
import { useMealPlanStore } from "@/libs/zustand/meal-plan.store"
import { useMemo } from "react"
import { useRouter } from "next/navigation"
import { ProceedOrderButton } from "@/ui/components/checkout/build-your-meal-plan/proceed-order-button"

const PLAN = "Bryan Johnson Protocol"
const DELIVERY_FEE = 19

export const OrderSummary = () => {
	const router = useRouter()

	const daysAmount = useMealPlanStore((state) => state.daysAmount)
	const meals = useMealPlanStore((state) => state.meals)
	const mandatoryMeals = useMealPlanStore((state) => state.mandatoryMeals)
	console.log(mandatoryMeals)
	
	const uniqueMeals = useMemo(
		() =>
			meals.filter(
				(item, index, self) =>
					index ===
					self.findIndex(
						(t) => t.slug === item.slug && t.title === item.title,
					),
			),
		[meals],
	)
	console.log(uniqueMeals)
	const TOTAL = useMemo(() => {
		return (2 * (daysAmount * 18)) + (uniqueMeals.reduce((acc, meal) => acc + meals.filter(m => m.slug === meal.slug).length, 0) * 18) + DELIVERY_FEE;
	}, [ meals,daysAmount, uniqueMeals]);
	const SUBTOTAL = useMemo(() => {
		return (2 * daysAmount * 18) + (uniqueMeals.reduce((acc, meal) => acc + meals.filter(m => m.slug === meal.slug).length, 0) * 18);
	}, [ meals, daysAmount,uniqueMeals]);
	return (
		<div className="space-y-6">
			<div className="bg-white rounded-md shadow-lg">
				<Typography as={"h2"} variant={"h3"} className="py-6 px-8">
					Your cart
				</Typography>
				<Typography
					variant={"subtitle"}
					className="border-y border-alto-200 bg-black-haze-50 px-8 py-3"
				>
					Order summary
				</Typography>
				<ul className="px-8 pt-4">
					<li className="flex items-center justify-between py-4 border-b border-dashed border-gallery-100">
						<Typography as={"h5"} className="text-red-600">
							{PLAN}
						</Typography>
						<Typography
							variant={"subtitle"}
							className="text-chicago-600"
						>
							x{daysAmount} days
						</Typography>
					</li>
					{mandatoryMeals.map(({ title }, i) => (
						<li
							key={i}
							className="py-4 border-b border-dashed border-gallery-100 flex items-baseline gap-2"
						>
							<Typography
								className="w-8 h-8 min-w-8 rounded-sm bg-black-haze-50 grid place-items-center"
								as={"h6"}
							>
								{daysAmount}x
							</Typography>
							<Typography variant={"body2"}>{title}</Typography>
						</li>
					))}
					{uniqueMeals.map(({ title, slug }, i) => (
						<li
							key={i}
							className="py-4 border-b border-dashed border-gallery-100 flex items-baseline gap-2"
						>
							<Typography
								className="w-8 h-8 min-w-8 rounded-sm bg-black-haze-50 grid place-items-center"
								as={"h6"}
							>
								{
									meals.filter((meal) => meal.slug === slug)
										.length
								}
								x
							</Typography>
							<Typography variant={"body2"}>{title}</Typography>
						</li>
					))}
					<li className="flex items-center justify-between py-4 border-b border-dashed border-gallery-100">
						<Typography as={"h6"}>Subtotal</Typography>
						<Typography as={"h6"}>${SUBTOTAL}</Typography>
					</li>
					<li className="flex items-center justify-between py-4 border-b border-dashed border-gallery-100">
						<Typography variant={"body2"}>Delivery fee</Typography>
						<Typography as={"h6"}>${DELIVERY_FEE}</Typography>
					</li>
				</ul>
				<div className="flex items-center justify-between py-5 px-8">
					<Typography as={"h4"}>Total</Typography>
					<Typography as={"h4"}>${TOTAL}/week</Typography>
				</div>
			</div>
			<div className="hidden sm:block">
				<ProceedOrderButton />
			</div>
		</div>
	)
}
