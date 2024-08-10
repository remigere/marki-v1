import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import Image from "next/image"
import { WaitlistForm } from "@/ui/components/alpha-program/waitlist-form"

export const Waitlist = () => (
	<section className="py-16 sm:py-24 relative">
		<div className="bg-resolution-blue-900 absolute inset-0 -z-10">
			<Image
				src={"/img/alpha-program/waitlist-bg.jpeg"}
				alt={"Man showing his shoulder muscles"}
				fill
				className="object-cover object-center opacity-50"
			/>
		</div>
		<Container>
			<div className="grid place-items-center gap-10">
				<div className="space-y-5 text-center text-white max-w-2xl">
					<Typography as={"h2"} variant={"h1"}>
						Join the waitlist
					</Typography>
					<Typography>
						If you love promotions and exploration, sign up to
						receive updates from Marki. We'll let you know when our
						next Alpha cohort opens up.
					</Typography>
				</div>

				<WaitlistForm className="max-w-xl w-full" />
			</div>
		</Container>
	</section>
)
