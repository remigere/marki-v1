import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import { Item } from "@/ui/components/homepage/about-us/item"

export const Vision = () => {
	return (
		<section className="grid md:grid-cols-2">
			<Container className="bg-black-haze-50 py-10 sm:py-24 space-y-5">
				<Typography as={"h2"} className="max-w-lg mx-auto">
					Our Vision
				</Typography>
				<Typography
					variant={"h3"}
					as={"p"}
					className="max-w-lg mx-auto"
				>
					To improve quality of life for millions of people by
					providing accessible, consistently proactive health
					solutions that shifts the status quo from the current
					narrative: trends, fad diets, and reactive measures.
				</Typography>
			</Container>
			<Container className="bg-black text-white py-10 sm:py-24 space-y-5">
				<Typography as={"h2"} className="max-w-lg mx-auto">
					The Mission
				</Typography>
				<section className="space-y-4 max-w-lg mx-auto">
					<Item icon="smile">
						Develop a science-based knowledge foundation that
						changes the status quo
					</Item>

					<Item icon="medico-hexagon">
						Deliver nutritionally-optimized meals to sustain better
						health and longevity
					</Item>

					<Item icon="verified">
						Create spaces for our community to enhance the quality
						of their lives
					</Item>
				</section>
			</Container>
		</section>
	)
}
