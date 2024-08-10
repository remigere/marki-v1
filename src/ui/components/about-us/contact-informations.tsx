import { CONTACT_INFO } from "@/constants/contact-info"
import { Container } from "@/design-system/container"
import { Icon, IconName } from "@/design-system/icons"
import { Link } from "@/design-system/link"
import { Typography } from "@/design-system/typography"

type ContactInformation = {
	icon: IconName
	label: string
	content: React.ReactNode
	link: string
}

const INFORMATIONS: ContactInformation[] = [
	{
		icon: "email",
		label: "mail us",
		content: <Typography as={"div"}>{CONTACT_INFO.email}</Typography>,
		link: `mailto:${CONTACT_INFO.email}`,
	},
	{
		icon: "subtract",
		label: "call us",
		content: <Typography as={"div"}>{CONTACT_INFO.phone}</Typography>,
		link: `tel:${CONTACT_INFO.phone}`,
	},
	{
		icon: "location",
		label: "address",
		content: <Typography as={"div"}>{CONTACT_INFO.address}</Typography>,
		link: `https://www.google.com/maps?q=${CONTACT_INFO.address}`,
	},
	{
		icon: "chat",
		content: (
			<Typography as={"div"}>
				Send us a message{" "}
				<span className="text-red-600 underline">here</span>
			</Typography>
		),
		label: "submit a request",
		link: "/contact",
	},
]

export const ContactInformations = () => (
	<section className="bg-black-haze-50 py-10 sm:py-24">
		<Container className="grid place-items-center gap-6 sm:gap-10">
			<Typography as={"h2"}>Questions? We are here to help!</Typography>
			<div className="gap-6 md:gap-10 grid sm:grid-cols-2 md:grid-cols-4 max-w-5xl">
				{INFORMATIONS.map(({ content, icon, label, link }, i) => (
					<Link
						href={link}
						key={i}
						className="py-6 text-center gap-5 space-y-6 group"
					>
						<div className="grid place-items-center bg-white rounded-md w-24 h-24 mx-auto">
							<Icon name={icon} size={24} />
						</div>
						<div className="space-y-1.5">
							<Typography
								variant={"subtitle"}
								className="md:max-w-56 mx-auto"
							>
								{label}
							</Typography>
							<div className="group-hover:opacity-60 transition-all duration-150">
								{content}
							</div>
						</div>
					</Link>
				))}
			</div>
		</Container>
	</section>
)
