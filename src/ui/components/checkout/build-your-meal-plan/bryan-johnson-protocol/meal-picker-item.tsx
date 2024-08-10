"use client"

import { IconButton } from "@/ui/components/checkout/build-your-meal-plan/bryan-johnson-protocol/icon-button"
import { Typography } from "@/design-system/typography"
import Image from "next/image"
import { twMerge } from "tailwind-merge"
import { useMealPlanStore } from "@/libs/zustand/meal-plan.store"
import { useMemo } from "react"
import Link from "next/link"

type Props = {
	photo: string
	slug: string
	title: string
}

export const MealPickerItem = ({ photo, slug, title }: Props) => {
	const daysAmount = useMealPlanStore((state) => state.daysAmount)
	const meals = useMealPlanStore((state) => state.meals)
	const updateMeals = useMealPlanStore((state) => state.updateMeals)

	const mealIndex = useMemo(
		() => meals.findIndex((meal) => meal.slug === slug),
		[meals, slug],
	)

	const amount = useMemo(
		() => meals.filter((meal) => meal.slug === slug)?.length || 0,
		[meals, slug],
	)

	const totalMealsAmount = useMemo(() => meals.length, [meals])

	const onDecrement = () => {
		if (meals.length === 0 || mealIndex === -1) return

		const newMeals = [...meals]
		newMeals.splice(mealIndex, 1)

		updateMeals(newMeals)
	}

	const onIncrement = () => {
		if (meals.length === daysAmount) return

		const newMeals = [...meals, { slug, title }]

		updateMeals(newMeals)
	}

	return (
		<div
			className={twMerge(
				"border border-dashed border-gallery-100",
				!!amount && amount > 0 && "bg-black-haze-50",
				"rounded-md",
				"py-2 px-3",
				"flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-3",
			)}
		>
			<Link
				className="flex items-center gap-3 hover:opacity-80 transition-all duration-150"
				href={`/menu/${slug}`}
			>
				<div className="w-14 min-w-14 h-11 rounded-md overflow-hidden relative">
					<Image
						src={photo}
						alt={`${title} photo`}
						fill
						className="object-center object-cover"
					/>
				</div>
				<Typography variant={"body2"}>{title}</Typography>
			</Link>
			<div className="flex items-center justify-between max-md:w-full max-md:gap-4">
				<IconButton
					icon="minus"
					onClick={onDecrement}
					disabled={amount === 0}
				/>
				<Typography
					variant={"h6"}
					className="w-9 min-w-9 h-9 grid place-items-center"
				>
					{amount}
				</Typography>
				<IconButton
					icon="plus"
					disabled={totalMealsAmount === daysAmount}
					onClick={onIncrement}
				/>
			</div>
		</div>
	)
}
