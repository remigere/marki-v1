import { Container } from "@/design-system/container"
import Link from "next/link"
import { Button } from "@/design-system/button"
import { Typography } from "@/design-system/typography"

export const HowItWorksCta = () => (
	<section className="pb-10 md:pb-24 text-center bg-black-haze-50 pt-6 md:pt-10">
		<Container className="space-y-6">
			<Typography variant={"body2"} className="text-chicago-600">
				Marki will continue to evolve your plan based on ongoing
				results.
			</Typography>
			<Button as={Link} href="#alpha-hero" className="mx-auto">
				Join the waitlist
			</Button>
		</Container>
	</section>
)
