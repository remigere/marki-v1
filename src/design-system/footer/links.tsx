import { Container } from "@/design-system/container"
import { Link } from "@/design-system/link"
import { Image } from "@/design-system/image"
import { CONTACT_INFO } from "@/constants/contact-info"
import { GetInTouchItem } from "@/design-system/footer/links/get-in-touch-item"
import { CompanyLinkItem } from "@/design-system/footer/links/company-link-item"
import { Typography } from "@/design-system/typography"

export const Links = () => {
	return (
		<section className="border-b border-white border-opacity-20">
			<Container className="flex flex-col lg:flex-row lg:justify-between gap-x-14 gap-y-6 py-10 lg:py-14">
				<Link href="/" className="relative">
					<Image
						src={"/img/marki_logo_white.png"}
						alt="Marki logo"
						width={249}
						height={90}
					/>
				</Link>

				<section className="flex flex-col lg:flex-row gap-7">
					<section className="flex flex-col gap-y-5 text-white w-[310px]">
						<Typography as={"h5"}>Company</Typography>

						<ul className="flex flex-col gap-y-3">
							<CompanyLinkItem href="/menu">Menu</CompanyLinkItem>
							<CompanyLinkItem href="/about-us">
								About us
							</CompanyLinkItem>
							<CompanyLinkItem href="/resources">
								Resources
							</CompanyLinkItem>
							<CompanyLinkItem href="/alpha-program">
								Alpha program
							</CompanyLinkItem>
							<CompanyLinkItem href="/contact">
								Contact us
							</CompanyLinkItem>
						</ul>
					</section>

					<section className="space-y-5 text-white w-[310px] max-w-full">
						<Typography as={"h5"}>Get in touch</Typography>

						<ul className="space-y-4">
							<GetInTouchItem
								href={`mailto:${CONTACT_INFO.email}`}
								icon="email"
								title="Mail us"
								description={CONTACT_INFO.email}
							/>

							<GetInTouchItem
								href={`tel:${CONTACT_INFO.phone}`}
								icon="subtract"
								title="Call us"
								description={CONTACT_INFO.phone}
							/>

							<GetInTouchItem
								href={`https://www.google.com/maps?q=${CONTACT_INFO.address}`}
								icon="location"
								title="Address"
								description={CONTACT_INFO.address}
							/>
						</ul>
					</section>
				</section>
			</Container>
		</section>
	)
}
