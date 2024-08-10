import { RECIPES } from "@/constants/recipes"
import { Ingredients } from "@/ui/components/recipe/ingredients"
import { Instructions } from "@/ui/components/recipe/instructions"
import { Recommendations } from "@/ui/components/recipe/recommendations"
import { notFound } from "next/navigation"

const Recipe = ({ params }: { params: { slug: string } }) => {
	if (!params.slug || !RECIPES[params.slug]) return notFound()

	const recipe = RECIPES[params.slug]

	return (
		<>
			<Instructions {...recipe} />
			<Ingredients {...recipe} />
			<Recommendations currentRecipeSlug={params.slug} />
		</>
	)
}

export default Recipe
