import { Image } from "@/design-system/image"
import { Typography } from "@/design-system/typography"
import { Button } from "@/design-system/button"
import { Link } from "@/design-system/link"
import { Item } from "@/ui/components/homepage/about-us/item"
import { Container } from "@/design-system/container"

export const AboutUs = () => {
	return (
		<section className="bg-black text-white grid lg:grid-cols-2">
			<Container className="py-10 sm:py-24 w-full space-y-10 lg:w-3/4 mx-auto">
				<section className="space-y-6">
					<Typography as="h2">About Us</Typography>

					<Typography variant={"body2"}>
						Time is precious. With degrees in engineering and
						backgrounds in startups, Adrien Cohen and Stephane Remi
						are on a mission to make personal longevity and quality
						of life optimizations an accessible mission.
					</Typography>
				</section>

				<section className="space-y-5">
					<Typography variant={"subtitle"}>Our mission:</Typography>

					<section className="space-y-2.5">
						<Item icon="smile">
							Develop a science-based knowledge foundation that
							changes the status quo
						</Item>

						<Item icon="medico-hexagon">
							Deliver nutritionally-optimized meals to sustain
							better health and longevity
						</Item>

						<Item icon="verified">
							Create spaces for our community to enhance the
							quality of their lives
						</Item>
					</section>
				</section>

				<Button as={Link} href="/about-us" intent="tertiary">
					Learn more
				</Button>
			</Container>

			<Image
				src="/img/about-us/team.jpg"
				alt="Founders"
				width={960}
				height={745}
				className="w-full h-full object-cover object-center"
			/>
		</section>
	)
}
