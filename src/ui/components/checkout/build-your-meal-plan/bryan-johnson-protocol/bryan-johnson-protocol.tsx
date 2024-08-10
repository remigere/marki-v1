import { MandatoryMealItem } from "@/ui/components/checkout/build-your-meal-plan/bryan-johnson-protocol/mandatory-meal-item"
import { MealPicker } from "@/ui/components/checkout/build-your-meal-plan/bryan-johnson-protocol/meal-picker"
import { Typography } from "@/design-system/typography"
import { MEALS } from "@/constants/meals"

const MANDATORY_MEALS = {
	"first-meal": "super-veggie",
	"second-meal": "nutty-pudding",
}

export const BryanJohnsonProtocol = () => {
	return (
		<section className="space-y-4 py-6 sm:py-11 px-4 sm:px-12">
			<Typography as={"h2"} variant={"h3"}>
				Bryan Johnson Protocol
			</Typography>
			<div className="space-y-5">
				<div className="space-y-3">
					<Typography variant={"h6"}>Meal #1</Typography>
					<MandatoryMealItem
						photo={MEALS[MANDATORY_MEALS["first-meal"]].photoSrc}
						title={MEALS[MANDATORY_MEALS["first-meal"]].title}
						slug={MANDATORY_MEALS["first-meal"]}
					/>
				</div>
				<div className="space-y-3">
					<Typography variant={"h6"}>Meal #2</Typography>
					<MandatoryMealItem
						photo={MEALS[MANDATORY_MEALS["second-meal"]].photoSrc}
						title={MEALS[MANDATORY_MEALS["second-meal"]].title}
						slug={MANDATORY_MEALS["second-meal"]}
					/>
				</div>
				<div className="space-y-3">
					<div className="space-y-1">
						<Typography variant={"h6"}>Meal #3</Typography>
						<Typography
							variant={"body2"}
							className="text-chicago-600"
						>
							Choose 5 meals from the list
						</Typography>
					</div>
					<MealPicker />
				</div>
			</div>
		</section>
	)
}
