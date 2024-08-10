import { MEALS } from "@/constants/meals"
import { Button } from "@/design-system/button"
import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import { Carousel } from "@/ui/components/homepage/meals/carousel"
import Link from "next/link"

export const Meals = () => {
	return (
		<section className="sm:pt-24 sm:pb-40 py-10">
			<Container className="space-y-10">
				<div className="space-y-5 text-center">
					<Typography as={"h2"}>
						So delicious it can't be healthy…can it?
					</Typography>
					<Typography
						variant={"body1"}
						className="max-w-2xl mx-auto text-chicago-600"
					>
						Explore our nutritionally-optimized meals, designed to
						support longevity. Let us delight you with delicious
						options.
					</Typography>
				</div>
				<div className="space-y-10">
					<Carousel
						meals={Object.entries(MEALS).map(
							([
								slug,
								{
									nutritionValues,
									photoSrc,
									description,
									title,
								},
							]) => ({
								nutritionValues,
								cover: photoSrc,
								calories:
									nutritionValues.find(
										(item) => item.label === "Calories",
									)?.value ?? 0,
								description,
								title,
								slug,
							}),
						)}
					/>
					<Button
						as={Link}
						href={"/checkout/build-your-meal-plan"}
						className="mx-auto"
					>
						Select your meals
					</Button>
				</div>
			</Container>
		</section>
	)
}
