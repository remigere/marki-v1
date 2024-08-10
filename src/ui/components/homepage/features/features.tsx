import { Container } from "@/design-system/container"
import { Icon } from "@/design-system/icons"
import {
	Feature,
	FeatureCard,
} from "@/ui/components/homepage/features/feature-card"

export const FEATURES: Feature[] = [
	{
		icon: <Icon name="daily-meals" size={68} />,
		description: "Daily chef-prepared meals",
	},
	{
		icon: <Icon name="science" size={68} />,
		description: "Designed with nutritional science",
	},
	{
		icon: <Icon name="ingredients" size={68} />,
		description: "Finely-sourced ingredients",
	},
	{
		icon: <Icon name="delivered" size={68} />,
		description: "Delivered fresh to your door",
	},
]

export const Features = () => {
	return (
		<section>
			<Container className="py-14 grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
				{FEATURES.map((feature, i) => (
					<FeatureCard key={i} {...feature} />
				))}
			</Container>
		</section>
	)
}
