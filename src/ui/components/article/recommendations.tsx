import { BlogCard, Props as RecipeCard } from "@/design-system/blog-card"
import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"

const RECOMMENDATIONS_LIST: RecipeCard[] = Array(3).fill({
	cover: "/img/the-blueprint-blog-post.png",
	description:
		"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad similique cum pariatur culpa reprehenderit distinctio a placeat alias, error, ab, neque ipsam aliquam eius ullam commodi laboriosam earum hic corrupti.",
	src: "/article/example",
	title: "Resources Headline",
})

export const Recommendations = () => (
	<section className="py-10 sm:py-24 bg-black-haze-50">
		<Container className="space-y-10">
			<Typography as={"h2"} className="text-center">
				You Might Also Like
			</Typography>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
				{RECOMMENDATIONS_LIST.slice(0, 3).map((recipe, i) => (
					<BlogCard {...recipe} key={i} />
				))}
			</div>
		</Container>
	</section>
)
