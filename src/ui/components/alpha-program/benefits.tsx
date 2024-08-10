import { Container } from "@/design-system/container"
import { Icon, IconName } from "@/design-system/icons"
import { Typography } from "@/design-system/typography"

const BENEFITS: { icon: IconName; description: string }[] = [
	{
		icon: "personal",
		description: "Personal health discovery",
	},
	{
		icon: "low-cost",
		description: "Low cost of entry",
	},
	{
		icon: "innovative",
		description: "Participate in innovative tech",
	},
	{
		icon: "bio",
		description: "A complete biomarker assessment",
	},
	{
		icon: "energy",
		description: "Improve health, longevity and daily energy levels",
	},
]

export const Benefits = () => (
	<section className="py-10 sm:py-24">
		<Container className="space-y-6 sm:space-y-10">
			<Typography as={"h2"} className="text-center">
				Benefits of the{" "}
				<span className="text-red-600">Alpha Program</span>
			</Typography>
			<div className="md:flex gap-6 xl:gap-10 justify-center flex-wrap max-md:justify-between max-md:mx-auto">
				{BENEFITS.map(({ description, icon }, i) => (
					<div
						key={i}
						className="md:max-w-60 md:text-center max-md:py-3 max-md:space-x-4 md:space-y-5 flex md:flex-col items-center"
					>
						<div className="min-w-24">
							<Icon name={icon} size={96} />
						</div>
						<Typography as={"h4"}>{description}</Typography>
					</div>
				))}
			</div>
		</Container>
	</section>
)
