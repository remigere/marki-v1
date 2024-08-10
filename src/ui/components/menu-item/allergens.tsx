import { Meal } from "@/constants/meals"
import { Typography } from "@/design-system/typography"
import { IngredientItem } from "@/ui/components/menu-item/ingredient-item"

type Props = Pick<Meal, "allergens">

// Helper function to convert string to Title Case
const toTitleCase = (str: string) => {
    if (!str) return ""; // Return an empty string if input is undefined or null
    return str.replace(/\w\S*/g, (txt) => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

export const Allergens = ({ allergens }: Props) => {
    if (!allergens || allergens.length === 0) {
        return (
            <section className="space-y-4 sm:space-y-6">
                <Typography as={"h2"} variant={"h4"}>
                    Common Allergens:
                </Typography>
                <Typography className="text-chicago-600">
                    No allergens
                </Typography>
            </section>
        );
    }

    return (
        <section className="space-y-4 sm:space-y-6">
            <Typography as={"h2"} variant={"h4"}>
                Common Allergens:
            </Typography>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-6">
                {allergens.map((ingredient, i) => (
                    <IngredientItem {...ingredient} title={toTitleCase(ingredient.title)} key={i} />
                ))}
            </div>
        </section>
    );
}