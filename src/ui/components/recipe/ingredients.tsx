import { Recipe } from "@/constants/recipes"
import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"

type Props = Pick<Recipe, "quantizedIngredients">

function capitalizeWords(ingredient: string): string {
    return ingredient.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

export const Ingredients = ({ quantizedIngredients }: Props) => (
    <section className="bg-black py-10 sm:py-16 px-5">
        <Container className="bg-white rounded-md p-5 sm:py-12 md:px-10 space-y-5">
            <Typography as={"h2"} variant={"h4"}>
                Ingredients
            </Typography>
            <ul className="list-disc grid sm:grid-cols-2 gap-3">
                {quantizedIngredients.map((ingredient, i) => (
                    <li key={i} className="ml-4 uppercase">
                        <Typography as={"div"}>{capitalizeWords(ingredient)}</Typography>
                    </li>
                ))}
            </ul>
        </Container>
    </section>
)