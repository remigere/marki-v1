import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import Image from "next/image"
import { WaitlistForm } from "@/ui/components/alpha-program/waitlist-form"

export const Hero = () => (
	<section className="py-14 sm:py-36 relative">
		<div className="bg-black absolute inset-0 -z-10">
			<Image
				src={"/img/alpha-program/alpha-program-bg.jpeg"}
				alt={"Man showing his arm muscles"}
				fill
				className="object-cover object-center opacity-30"
			/>
		</div>
		<Container>
			<div
				className="space-y-5 sm:space-y-10 max-w-2xl mx-auto"
				id={"alpha-hero"}
			>
				<div className="space-y-3 sm:space-y-6 text-center text-white">
					<Typography as={"h1"} className="z-10">
						Measure Your Results to Optimize Health
					</Typography>
					<Typography>
						Health is not an all-in-one solution. We’re using
						advanced technology to change the way we manage our
						health. Sign up to maximize your health and longevity
						through tailored lifestyle and biomarker monitoring.
						Together, let’s experience a better quality of life.
					</Typography>
				</div>

				<WaitlistForm />
			</div>
		</Container>
	</section>
)
