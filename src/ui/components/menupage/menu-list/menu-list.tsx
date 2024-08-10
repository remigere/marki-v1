import { MEALS } from "@/constants/meals"
import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import { MealCard } from "@/ui/components/homepage/meals/meal-card"

export const MenuList = () => (
	<section>
		<Container className="py-10 sm:py-24 space-y-6 sm:space-y-10">
			<Typography as={"h2"}>The Marki Menu</Typography>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-7">
				{Object.entries(MEALS).map(
					([
						slug,
						{ nutritionValues, photoSrc, description, title },
					]) => (
						<MealCard
							calories={
								nutritionValues.find(
									(item) => item.label === "Calories",
								)?.value ?? 0
							}
							cover={photoSrc}
							description={description}
							title={title}
							slug={slug}
							isNew
							key={slug}
						/>
					),
				)}
			</div>
		</Container>
	</section>
)
