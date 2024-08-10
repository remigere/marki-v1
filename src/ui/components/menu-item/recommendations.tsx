import { Meal, MEALS } from "@/constants/meals"
import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import { MealCard } from "@/ui/components/homepage/meals/meal-card"

type Props = {
	currentRecipeSlug: string
}

export const Recommendations = ({ currentRecipeSlug }: Props) => {
	const getRandomMeals = (currentSlug: string) => {
		// Obtenez toutes les recettes, sauf celle avec le slug donné
		const filteredMeals = Object.entries(MEALS)
			.map(([slug, meal]) => ({ ...meal, slug }))
			.filter(({ slug }) => slug !== currentSlug)

		// Mélangez les recettes filtrées
		filteredMeals.sort(() => Math.random() - 0.5)

		// Prenez les trois premières recettes mélangées
		const randomMeals = filteredMeals.slice(0, 3)

		return randomMeals
	}

	return (
		<section className="py-10 sm:py-24 bg-black-haze-50">
			<Container className="space-y-10">
				<Typography as={"h2"} className="text-center">
					You Might Also Like
				</Typography>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-7">
					{getRandomMeals(currentRecipeSlug).map(
						(
							{
								description,
								nutritionValues,
								photoSrc,
								slug,
								title,
							},
							i,
						) => (
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
								key={i}
							/>
						),
					)}
				</div>
			</Container>
		</section>
	)
}
