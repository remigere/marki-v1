import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import Image from "next/image"

export const OurStory = () => (
	<section className="py-10 md:py-24">
		<div className="max-md:flex-col max-md:gap-10 flex items-center">
			<Container className="w-full md:w-1/2 max-md:order-1 md:p-0">
				<aside className="relative aspect-[606/909] ml-auto md:max-w-lg rounded-md overflow-hidden">
					<Image src="/img/about-us/team.jpg" alt="Founders" fill />
				</aside>
			</Container>
			<div className="md:w-1/2 h-fit my-auto">
				<div className="max-w-3xl md:bg-black-haze-50 md:py-20 px-4 lg:px-10 xl:px-24 space-y-5 rounded-r-md">
					<Typography as={"h2"}>Our Story</Typography>
					<div className="space-y-4 text-chicago-600">
						<Typography variant={"body2"}>
							Cofounders Adrien Cohen and Stephane Remi are on a
							mission to improve the longevity of busy
							professionals, athletes, and, really, anyone
							desiring to commit to a healthy lifestyle. Adrien is
							a graduate of Telecom Paris and Ecole Polytechnique
							with degrees in engineering. Stephane developed his
							passion for engineering at Centrale Paris before
							receiving his MS at Stanford University.
						</Typography>
						<Typography variant={"body2"}>
							Little did Adrien and Stephane know when they met 10
							years ago that they would embark on similar health
							journeys. With a rigorous school schedule during the
							day, and working jobs in the evening, school life
							became an ongoing grind. Moving into the tech sector
							with strong science backgrounds, they knew their
							entrepreneurial ambitions needed to be met with
							science-based health programs.
						</Typography>
						<Typography variant={"body2"}>
							With an unwavering belief of technology as a force
							for good, Adrien and Stephane are developing a
							groundbreaking system to provide nutritional
							solutions customized at an individual level.
						</Typography>
					</div>
				</div>
			</div>
		</div>
	</section>
)
