"use client"

import { Typography } from "@/design-system/typography"
import { useMealPlanStore } from "@/libs/zustand/meal-plan.store"
import Image from "next/image"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

type Props = {
	photo: string
	title: string
	slug: string
}

export const MandatoryMealItem = ({ photo, title, slug }: Props) => {
	const daysAmount = useMealPlanStore((state) => state.daysAmount)

	return (
		<div
			className={twMerge(
				"border border-dashed border-gallery-100",
				"bg-black-haze-50",
				"rounded-md",
				"py-2 px-3",
				"flex items-center justify-between",
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
			<Typography
				variant={"details"}
				className="px-5 py-2 border rounded-md text-red-600 border-gallery-100"
			>
				x{daysAmount}
			</Typography>
		</div>
	)
}
