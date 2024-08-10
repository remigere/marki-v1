import { Typography } from "@/design-system/typography"
import { BlogCard, Props as NewsCard } from "@/design-system/blog-card"
import { Container } from "@/design-system/container"

const NEWS: NewsCard[] = [
	{
		cover: "/img/the-blueprint-blog-post.png",
		description:
			"Learn more about this fantastic experiment that resulted in a one-of-a-kind framework for longevity.",
		src: "/article/the-blueprint-protocol",
		title: "The Blueprint Protocol",
	},
	{
		cover: "/img/alpha-program/step-02.jpeg",
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad similique cum pariatur culpa reprehenderit distinctio a placeat alias, error, ab, neque ipsam aliquam eius ullam commodi laboriosam earum hic corrupti.",
		src: "/article/whats-in-a-biomarker",
		title: "What’s in a biomarker?",
	},
]

export const News = () => (
	<section className="py-10 sm:py-24">
		<Container className="space-y-5 sm:space-y-10">
			<div className="space-y-4">
				<Typography as={"h2"}>What’s new</Typography>
				<Typography className="text-chicago-600">
					Content to keep you informed of our sources and our work.
				</Typography>
			</div>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
				{NEWS.map((article, i) => (
					<BlogCard {...article} key={i} />
				))}
			</div>
		</Container>
	</section>
)
