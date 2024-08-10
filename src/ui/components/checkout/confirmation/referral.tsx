import { Button } from "@/design-system/button"
import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import Link from "next/link"
import Image from "next/image"

export const Referral = () => (
	<section className="py-10 md:py-24 max-md:bg-black-haze-50">
		<Container>
			<div className="rounded-md overflow-hidden text-white grid place-items-center gap-8 py-12 max-md:px-6 md:py-28 relative">
				<div className="bg-black absolute inset-0">
					<Image
						src={"/img/checkout/referral-bg.jpeg"}
						alt={"Man showing his arm muscles"}
						fill
						className="object-cover object-bottom opacity-40"
					/>
				</div>
				<div className="max-w-3xl text-center space-y-4 z-10">
					<Typography as={"h2"}>
						Refer us to a friend and get 15$ off for every friend
					</Typography>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</Typography>
				</div>
				<Button as={Link} href={"#"} className="z-10">
					Invite friends
				</Button>
			</div>
		</Container>
	</section>
)
