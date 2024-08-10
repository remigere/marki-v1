import { Typography } from "@/design-system/typography"

type Props = {
	title: string
	description: string
}

export const Headings = ({ title, description }: Props) => (
	<div className="space-y-6">
		<Typography as={"h1"}>{title}</Typography>
		<Typography className="text-chicago-600">{description}</Typography>
	</div>
)
