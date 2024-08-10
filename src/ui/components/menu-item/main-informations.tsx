import { Meal, NutritionValue } from "@/constants/meals"
import { Button } from "@/design-system/button"
import { Typography } from "@/design-system/typography"
import Image from "next/image"
import Link from "next/link"

type Props = Pick<Meal, "photoSrc" | "title" | "servingSize"> & {
	calories: Pick<NutritionValue, "value" | "unit">
	protein: Pick<NutritionValue, "value" | "unit">
}

export const MainInformations = ({
	calories,
	photoSrc,
	protein,
	servingSize,
	title,
}: Props) => {
	return (
		<section className="space-y-4 sm:space-y-6">
			<div className="aspect-[343/224] bg-alto-200 rounded-md overflow-hidden relative">
			<Image
					src={photoSrc}
					alt={`${title} in a plate`}
					fill
					className="object-cover object-center"
					objectFit="cover"
				/>
			</div>
			<div className="grid grid-cols-3 gap-4 text-center">
				<div className="space-y-1.5 py-3 sm:py-6 rounded-md bg-black-haze-50">
					<Typography
						variant={"subtitle"}
						className="text-chicago-600 max-sm:text-[10px]"
					>
						serving size:
					</Typography>
					<Typography
						variant={"h6"}
					>{`${servingSize.value}${servingSize.unit}`}</Typography>
				</div>
				<div className="space-y-1.5 py-3 sm:py-6 rounded-md bg-black-haze-50">
					<Typography
						variant={"subtitle"}
						className="text-chicago-600 max-sm:text-[10px]"
					>
						calories:
					</Typography>
					<Typography
						variant={"h6"}
					>{`${calories.value}${calories.unit}`}</Typography>
				</div>
				<div className="space-y-1.5 py-3 sm:py-6 rounded-md bg-black-haze-50">
					<Typography
						variant={"subtitle"}
						className="text-chicago-600 max-sm:text-[10px]"
					>
						protein:
					</Typography>
					<Typography
						variant={"h6"}
					>{`${protein.value}${protein.unit}`}</Typography>
				</div>
			</div>
			<div className="space-y-4">
				<Button
					className="w-full"
					as={Link}
					href={"/checkout/build-your-meal-plan"}
				>
					Order Now
				</Button>
				<Typography
					variant={"details"}
					className="text-chicago-600 max-sm:text-center"
				>
					*Order now to receive one week of free meals
				</Typography>
			</div>
		</section>
	)
}
