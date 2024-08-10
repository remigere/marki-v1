import { Meal } from "@/constants/meals"
import { Typography } from "@/design-system/typography"

type Props = Pick<Meal, "ingredients">

// Helper function to convert string to Title Case
const toTitleCase = (str: string) => {
    if (!str) return ""; // Return an empty string if input is undefined or null
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

export const IngredientsList = ({ ingredients }: Props) => (
    <section className="space-y-4 sm:space-y-6">
        <Typography as={"h2"} variant={"h4"}>
            All Ingredients:
        </Typography>

        <Typography className={"text-chicago-600"}>
            {ingredients.map(({ title }) => toTitleCase(title)).join(", ")}
        </Typography>
    </section>
)