import { RECIPES } from "@/constants/recipes"
import { BlogCard, Props as RecipeCard } from "@/design-system/blog-card"
import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"

type Props = {
	currentRecipeSlug: string
}

export const Recommendations = ({ currentRecipeSlug }: Props) => {
	function getRandomRecipes(currentSlug: string) {
		// Obtenez toutes les recettes, sauf celle avec le slug donné
		const filteredRecipes = Object.entries(RECIPES)
			.map(([slug, recipe]) => ({ ...recipe, slug }))
			.filter(({ slug }) => slug !== currentSlug)

		// Mélangez les recettes filtrées
		filteredRecipes.sort(() => Math.random() - 0.5)

		// Prenez les trois premières recettes mélangées
		const randomRecipes = filteredRecipes.slice(0, 3)

		return randomRecipes
	}

	return (
		<section className="py-10 sm:py-24 bg-black-haze-50">
			<Container className="space-y-10">
				<Typography as={"h2"} className="text-center">
					You Might Also Like
				</Typography>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
					{getRandomRecipes(currentRecipeSlug).map(
						({ image, slug, steps, title }, i) => (
							<BlogCard
								cover={image}
								description={
									steps.length >= 2
										? `1. ${steps[0]} 2. ${steps[1]}`
										: steps[0]
								}
								src={`/recipe/${slug}`}
								title={title}
								key={i}
							/>
						),
					)}
				</div>
			</Container>
		</section>
	)
}
