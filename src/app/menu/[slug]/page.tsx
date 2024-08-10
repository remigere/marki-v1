import { MEALS, Meal } from "@/constants/meals"
import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import { Allergens } from "@/ui/components/menu-item/allergens"
import { Composition } from "@/ui/components/menu-item/composition"
import { Description } from "@/ui/components/menu-item/description"
import { ExtraCta } from "@/ui/components/menu-item/extra-cta"
import { IngredientsList } from "@/ui/components/menu-item/ingredients-list"
import { MainInformations } from "@/ui/components/menu-item/main-informations"
import { Recommendations } from "@/ui/components/menu-item/recommendations"
import { TopIngredients } from "@/ui/components/menu-item/top-ingredients"
import { NextPage } from "next"
import { notFound } from "next/navigation"

// const MEAL: Meal = {
// 	allergens: [{ title: "Milk", photoSrc: "/img/meals/meal-3.jpeg" }],
// 	description:
// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus exercitationem deserunt nisi doloremque eius accusamus odio quisquam voluptates quia necessitatibus. Dolorum enim vitae cupiditate similique pariatur animi illum error harum.",
// 	ingredients: Array(15).fill({
// 		title: "Shiitake mushrooms",
// 		photoSrc: "/img/meals/meal-3.jpeg",
// 	}),
// 	nutritionValues: [
// 		{ label: "Calories", value: 740, unit: "kcal" },
// 		{ label: "Fat", value: 30, unit: "g" },
// 		{ label: "Saturated Fat", value: 10, unit: "g" },
// 		{ label: "Carbohydrate", value: 10, unit: "g" },
// 		{ label: "Sugar", value: 7, unit: "g" },
// 		{ label: "Dietary Fiber", value: 10, unit: "g" },
// 		{ label: "Protein", value: 31, unit: "g" },
// 		{ label: "Cholesterol", value: 150, unit: "mg" },
// 		{ label: "Sodium", value: 890, unit: "mg" },
// 	],
// 	photoSrc: "/img/meals/meal-3.jpeg",
// 	servingSize: { value: 99, unit: "g" },
// 	title: "Meal Headline",
// }

const MenuItem = ({ params }: { params: { slug: string } }) => {
	if (!params.slug || !MEALS[params.slug]) return notFound()

	const meal = MEALS[params.slug]

	return (
		<>
			<Container className="py-10 sm:py-12 space-y-6 sm:space-y-10">
				<Typography as={"h1"}>{meal.title}</Typography>
				<div className="flex gap-8">
					<div className="space-y-8 sm:space-y-14 flex-1">
						<MainInformations
							calories={
								meal.nutritionValues.find(
									(item) => item.label === "Calories",
								) ?? { value: 0, unit: "kcal" }
							}
							photoSrc={meal.photoSrc}
							protein={
								meal.nutritionValues.find(
									(item) => item.label === "Protein",
								) ?? { value: 0, unit: "g" }
							}
							servingSize={meal.servingSize}
							title={meal.title}
						/>
						<div className="lg:hidden">
							<Composition
								nutritionValues={meal.nutritionValues}
							/>
						</div>
						<Description description={meal.description} />
						<TopIngredients ingredients={meal.ingredients} />
						<IngredientsList ingredients={meal.ingredients} />
						<Allergens allergens={meal.allergens} />
						<ExtraCta />
					</div>

					<aside className="max-lg:hidden w-[28rem] min-w-[33%] h-fit lg:sticky top-36">
						<Composition nutritionValues={meal.nutritionValues} />
					</aside>
				</div>
			</Container>
			<Recommendations currentRecipeSlug={params.slug} />
		</>
	)
}

export default MenuItem
