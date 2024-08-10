import { MEALS } from "@/constants/meals"
import { MealPickerItem } from "@/ui/components/checkout/build-your-meal-plan/bryan-johnson-protocol/meal-picker-item"

const AVAILABLE_MEALS_SLUGS = [
	"buddha-bowl",
	"roasted-veggie-lettuce-wraps",
	"blood-orange-and-fennel-salad",
	"roasted-beets-and-green-lentils-and-wilted-chard",
	"roasted-cabbage-steaks-and-sweet-potato-mash",
	"sweet-potato-and-mushroom-toast",
	"chickpea-curry-over-greens",
	"beet-poke",
	"collard-green-wraps-and-red-pepper-dip",
	"roasted-bok-choy-and-japanese-sweet-potato",
]

export const MealPicker = () => {
	return (
		<div className="space-y-3">
			{AVAILABLE_MEALS_SLUGS.map((slug, i) => (
				<MealPickerItem
					photo={MEALS[slug].photoSrc}
					title={MEALS[slug].title}
					slug={slug}
					key={i}
				/>
			))}
		</div>
	)
}
