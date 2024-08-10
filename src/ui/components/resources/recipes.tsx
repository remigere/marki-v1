import { Typography } from "@/design-system/typography"
import { BlogCard, Props as RecipeCard } from "@/design-system/blog-card"
import { Container } from "@/design-system/container"
import { RECIPES } from "@/constants/recipes"

const RECIPES_LIST: RecipeCard[] = Array(15).fill({
	cover: "/img/meals/meal-2.jpeg",
	description:
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad similique cum pariatur culpa reprehenderit distinctio a placeat alias, error, ab, neque ipsam aliquam eius ullam commodi laboriosam earum hic corrupti.",
	src: "/recipe/1",
	title: "Super Veggies Recipy",
})

export const Recipes = () => (
	<section className="py-10 sm:py-24">
		<Container className="space-y-5 sm:space-y-10">
			<div className="space-y-4">
				<Typography as={"h2"}>Recipes</Typography>
				<Typography className="text-chicago-600">
					Our meals made available for the cooking aficionado.
				</Typography>
			</div>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
				{Object.entries(RECIPES).map(
					([slug, { image, steps, title }], i) => (
						<BlogCard
							key={i}
							cover={image}
							description={
								steps.length >= 2
									? `1. ${steps[0]} 2. ${steps[1]}`
									: steps[0]
							}
							src={`/recipe/${slug}`}
							title={title}
						/>
					),
				)}
			</div>
		</Container>
	</section>
)
