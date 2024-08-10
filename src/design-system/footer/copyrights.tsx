import { Container } from "@/design-system/container"
import { Link } from "@/design-system/link"
import { Image } from "@/design-system/image"

export const Copyrights = () => {
	return (
		<section className="py-9 text-white">
			<Container className="flex flex-col lg:flex-row justify-between gap-6">
				<section className="flex flex-col gap-y-2 md:flex-row md:divide-x">
					<p className="md:pr-6">
						Copyright 2024 Marki. All Rights Reserved.
					</p>

					<Link
						href="/privacy-policy"
						className="md:px-6 hover:opacity-60 transition-all duration-150"
					>
						Privacy Policy
					</Link>

					<Link
						href="#"
						className="md:px-6 hover:opacity-60 transition-all duration-150"
					>
						Terms of Service
					</Link>
				</section>

				<section className="flex gap-x-1.5">
					<Image
						src="/img/visa.svg"
						width={34}
						height={24}
						alt="Visa"
					/>
					<Image
						src="/img/amex.svg"
						width={34}
						height={24}
						alt="Amex"
					/>
					<Image
						src="/img/discover.svg"
						width={34}
						height={24}
						alt="Discover"
					/>
					<Image
						src="/img/master-card.svg"
						width={34}
						height={24}
						alt="Master Card"
					/>
					<Image
						src="/img/apple-pay.svg"
						width={34}
						height={24}
						alt="Apple Pay"
					/>
					<Image
						src="/img/paypal.svg"
						width={34}
						height={24}
						alt="Paypal"
					/>
					<Image
						src="/img/stripe.svg"
						width={34}
						height={24}
						alt="Stripe"
					/>
				</section>
			</Container>
		</section>
	)
}
