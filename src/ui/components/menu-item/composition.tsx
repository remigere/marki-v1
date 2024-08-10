import { Meal } from "@/constants/meals"
import { Icon } from "@/design-system/icons"
import { Typography } from "@/design-system/typography"

type Props = Pick<Meal, "nutritionValues">

export const Composition = ({ nutritionValues }: Props) => (
	<div className="border border-gallery-100 rounded-md shadow-lg">
		<Typography
			as={"h2"}
			variant={"h4"}
			className="py-3 px-5 sm:p-6 border-b border-gallery-100"
		>
			Nutrition Value Per Serving
		</Typography>
		{nutritionValues.map(({ label, unit, value }, i) => (
			<div
				key={i}
				className="flex items-center justify-between border-b border-dashed border-gallery-100 py-3 px-5 sm:px-6 sm:py-4"
			>
				<Typography className="capitalize">{label}</Typography>
				<Typography className="font-bold">{`${value}${unit}`}</Typography>
			</div>
		))}
		<Typography
			variant={"details"}
			className="text-chicago-600 flex items-center gap-2 justify-center px-5 py-3 sm:p-5"
		>
			<Icon name="info" size={16} />
			<span>Nutritional info may vary slightly by time of delivery.</span>
		</Typography>
	</div>
)
