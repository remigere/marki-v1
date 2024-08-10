import { MEALS } from "@/constants/meals"
import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import { Carousel } from "@/ui/components/homepage/meals/carousel"

export const ReviewWeeklyMenu = () => {
	return (
		<section className="sm:py-24 py-10">
			<Container className="space-y-10">
				<div className="space-y-5 text-center">
					<Typography as={"h2"}>Review our weekly menu</Typography>
					<Typography
						variant={"body1"}
						className="max-w-2xl mx-auto text-chicago-600"
					>
						Explore our flavorful, nutritionally-optimized meals,
						methodically crafted to support longevity.
					</Typography>
				</div>

				<Carousel
					meals={Object.entries(MEALS).map(
						([
							slug,
							{ nutritionValues, photoSrc, description, title },
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
			</Container>
		</section>
	)
}
