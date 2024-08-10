import { Button } from "@/design-system/button"
import { Container } from "@/design-system/container"
import { Link } from "@/design-system/link"
import { Image } from "@/design-system/image"
import { Icon } from "@/design-system/icons"
import { Typography } from "@/design-system/typography"
import { BlogCard } from "@/design-system/blog-card"

export const Blog = () => {
	return (
		<section className="bg-black-haze-50 py-10 sm:py-24">
			<Container className="flex flex-col lg:flex-row gap-y-8 gap-x-24 justify-center items-center">
				<BlogCard
					cover="/img/the-blueprint-blog-post.png"
					description="Marki serves up an exciting, reverse-aging protocol."
					src="#"
					title="The Blueprint"
					banner="Featured blog Post"
				/>

				<section className="order-1 ld:order-2 flex flex-col gap-y-10">
					<section className="flex flex-col gap-y-6">
						<h2 className="font-semibold text-5xl">
							Serving Up Science
						</h2>

						<p className="text-chicago-600">
							We’re fans of knowledge. We’ll be developing and
							sharing data, insights, and science as we bridge
							gaps between technology and health.
						</p>
					</section>

					<Button as={Link} href="/resources" intent="secondary">
						Learn more
					</Button>
				</section>
			</Container>
		</section>
	)
}
