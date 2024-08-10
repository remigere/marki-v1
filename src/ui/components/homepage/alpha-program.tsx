import { Button } from "@/design-system/button"
import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import Image from "next/image"
import Link from "next/link"

export const AlphaProgram = () => (
	<section
		className="bg-tory-blue-800 text-white py-10 md:py-32 bg-no-repeat"
		style={{
			backgroundImage:
				"url(/img/home/bg-vector-3.svg), url(/img/home/bg-vector-4.svg)",
			backgroundPosition: "bottom right, top left",
		}}
	>
		<Container className="grid md:grid-cols-2 gap-10 lg:gap-20">
			<div className="relative aspect-[673/450] mb-12">
				<Image
					src="/img/home/people.jpeg"
					alt="Group of 4 people"
					fill
					className="rounded-lg overflow-hidden"
					sizes="(min-width: 768px) 50vw, 100vw"
				/>
				<div className="rounded-lg overflow-hidden aspect-[180/120] w-32 md:w-48 absolute left-16 bottom-0 translate-y-12">
					<Image
						src="/img/home/new-chapter.jpeg"
						alt="New chapter written on a writing machine"
						fill
						sizes="(min-width: 768px) 12rem, 8rem"
					/>
				</div>
			</div>

			<div>
				<Typography variant="h1" as="h2">
					Alpha
				</Typography>
				<div className="space-y-8 mt-5 mb-8">
					<Typography>
						Some of the most prevalent illnesses in the United
						States including chronic diseases, diabetes, and strokes
						are heavily affected by conditions such as high blood
						pressure, obesity, and inflammation. By prioritizing key
						pillars of our health including fitness, sleep,
						environment, and nutrition, we can create significant
						resilience to these illnesses while raising our overall
						well-being.
					</Typography>
					<Typography>
						Great nutrition is a cornerstone to improving health and
						longevity. Delivering science-based meals is just the
						beginning of what we do. Marki is leveraging generative
						AI and predictive analysis to push the limits on
						individualized health planning based on your biomarkers
						and lifestyle. Based on the inputs you provide us, we
						can output models for better health and longevity.
					</Typography>
					<Typography>
						Interested in learning more about your biomarkers and
						corresponding nutritional compatibility and lifestyle
						adjustments? Sign up now to join our program; our first
						cohort is full and we’ll send an update when the next
						cohort opens.
					</Typography>
				</div>
				<Button as={Link} href="/alpha-program">
					Sign up now
				</Button>
			</div>
		</Container>
	</section>
)
