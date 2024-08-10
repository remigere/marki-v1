import { Meal } from "@/constants/meals"
import { Typography } from "@/design-system/typography"

type Props = Pick<Meal, "description">

export const Description = ({ description }: Props) => (
	<section className="space-y-4 sm:space-y-6">
		<Typography as={"h2"} variant={"h4"}>
			Description
		</Typography>
		<Typography className="text-chicago-600">{description}</Typography>
	</section>
)
