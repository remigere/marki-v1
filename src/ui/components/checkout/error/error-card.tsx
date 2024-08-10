import { Button } from "@/design-system/button"
import { Container } from "@/design-system/container"
import { Icon } from "@/design-system/icons"
import { Typography } from "@/design-system/typography"
import Link from "next/link"

export const ErrorCard = () => (
	<section className="bg-black-haze-50">
		<Container className="max-md:py-10">
			<div className="bg-white shadow-lg rounded-md overflow-hidden py-10 md:py-14 px-4 md:px-24 w-fit mx-auto md:-translate-y-24 grid place-items-center">
				<Icon name="close" size={80} />
				<div className="text-center space-y-4 md:space-y-6 mt-3 md:mt-8 mb-5 md:mb-10">
					<Typography as={"h1"} variant={"h2"}>
						There is a problem with your order
					</Typography>
					<Typography>
						Please contact our customer service for more
						information.
					</Typography>
				</div>
				<Button as={Link} href="/checkout/build-your-meal-plan">
					Retry
				</Button>
			</div>
		</Container>
	</section>
)
