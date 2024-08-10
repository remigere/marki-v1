import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import { NewsletterForm } from "@/design-system/footer/newsletter-form"

export const Newsletter = () => {
	return (
		<section className="border-b border-white border-opacity-20">
			<Container className="grid lg:grid-cols-2 gap-x-14 gap-y-6 py-10 lg:py-14">
				<section className="space-y-4">
					<Typography as={"h3"} className="text-white">
						Join the Alpha Program waitlist
					</Typography>

					<p className="text-white text-sm lg:text-lg">
						Interested in joining a future Alpha Program cohort?
						Sign up to receive notices on new cohorts and updates on
						the development of our Alpha Program.
					</p>
				</section>

				<NewsletterForm />
			</Container>
		</section>
	)
}
