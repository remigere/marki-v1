import { CONTACT_INFO } from "@/constants/contact-info"
import { Container } from "@/design-system/container"
import { Icon, IconName } from "@/design-system/icons"
import { Typography } from "@/design-system/typography"
import { ContactForm } from "@/ui/components/contact/contact-form"
import Link from "next/link"

type ContactInfo = {
	icon: IconName
	label: string
	href: string
	text: string
}

const INFOS: ContactInfo[] = [
	{
		icon: "email",
		label: "mail us",
		href: `mailto:${CONTACT_INFO.email}`,
		text: CONTACT_INFO.email,
	},
	{
		icon: "subtract",
		label: "call us",
		href: `tel:${CONTACT_INFO.phone}`,
		text: CONTACT_INFO.phone,
	},
	{
		icon: "location",
		label: "address",
		href: `https://www.google.com/maps?q=${CONTACT_INFO.address}`,
		text: CONTACT_INFO.address,
	},
]

export const Section = () => (
	<section className="py-10 sm:py-24">
		<Container className="md:flex max-md:space-y-10 gap-20">
			<div className="flex-grow">
				<div className="md:max-w-xl space-y-10">
					<div className="space-y-6">
						<Typography as={"h2"}>Get in Touch</Typography>
						<Typography
							variant={"body2"}
							className="text-chicago-600"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore.
						</Typography>
					</div>
					<ContactForm />
				</div>
			</div>
			<aside className="flex-grow items-center">
				<div className="p-5 sm:p-10 md:max-w-lg space-y-6 bg-black-haze-50 rounded-md">
					<Typography as={"h3"}>Contact Information</Typography>
					<div className="space-y-6">
						{INFOS.map(({ icon, label, href, text }, i) => (
							<Link
								href={href}
								className="group flex space-x-6"
								key={i}
							>
								<div className="w-20 h-20 min-w-20 md:w-28 md:h-28 md:min-w-28 bg-white rounded-md grid place-items-center text-red-600">
									<Icon name={icon} size={32} />
								</div>
								<div className="space-y-2 my-auto">
									<Typography as={"h4"} variant={"subtitle"}>
										{label}
									</Typography>
									<Typography className="group-hover:opacity-60 transition-all duration-150">
										{text}
									</Typography>
								</div>
							</Link>
						))}
					</div>
				</div>
			</aside>
		</Container>
	</section>
)
