import { Icon } from "@/design-system/icons"
import { Typography } from "@/design-system/typography"
import { twMerge } from "tailwind-merge"

export type Testimonial = {
	name: string
	job: string
	rate: 1 | 2 | 3 | 4 | 5
	description: string
}

type Props = Testimonial

const rateStarsStyle = {
	1: "[&>*:nth-child(-n+1)]:text-bright-sun-300",
	2: "[&>*:nth-child(-n+2)]:text-bright-sun-300",
	3: "[&>*:nth-child(-n+3)]:text-bright-sun-300",
	4: "[&>*:nth-child(-n+4)]:text-bright-sun-300",
	5: "[&>*:nth-child(-n+5)]:text-bright-sun-300",
}

export const TestimonialCard = ({ name, job, rate, description }: Props) => (
	<div className="p-8 border rounded-lg border-[#00000020] space-y-4 h-full">
		<div className="space-y-1">
			<Typography as={"h5"}>{name}</Typography>
			<Typography className="text-star-dust-400" variant={"body2"}>
				{job}
			</Typography>
		</div>
		<div
			className={twMerge(
				"flex space-x-2 items-center text-pampas-50",
				rateStarsStyle[rate],
			)}
		>
			{Array(5)
				.fill(null)
				.map((_, i) => (
					<Icon name="star" size={24} key={i} />
				))}
		</div>
		<Typography className="text-chicago-600">{description}</Typography>
	</div>
)
