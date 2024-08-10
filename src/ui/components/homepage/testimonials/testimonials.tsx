import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import { Carousel } from "@/ui/components/homepage/testimonials/carousel"
import {
	Testimonial,
	TestimonialCard,
} from "@/ui/components/homepage/testimonials/testimonial-card"

const TESTIMONIALS: Testimonial[] = [
	{
		description:
			"It feels like this is a different food service. Perfect delivery and freshness.",
		job: "Entrepreneur",
		name: "Yosun",
		rate: 5,
	},
	{
		description:
			"I liked both super veggie and nutty pudding. I will book for a week again today.",
		job: "Engineer",
		name: "Harsh",
		rate: 5,
	},
	{
		description:
			"The meals are fantastic. Thanks so much and keep up the good work!",
		job: "Hedge Fund Manager",
		name: "Daniel",
		rate: 5,
	},
]

export const Testimonials = () => (
	<section className="py-10 sm:py-24">
		<Container>
			<Typography as={"h2"} className="text-center mb-10">
				Testimonials
			</Typography>
			<Carousel testimonials={[...TESTIMONIALS, ...TESTIMONIALS]} />
		</Container>
	</section>
)
