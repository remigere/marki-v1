import { Icon } from "@/design-system/icons"
import { Typography } from "@/design-system/typography"
import Image from "next/image"
import Link from "next/link"

export type Props = {
	cover: string
	title: string
	description: string
	src: string
	banner?: string
}

export const BlogCard = ({ cover, title, description, src, banner }: Props) => (
	<Link
		href={src}
		className="border border-alto-200 bg-white overflow-hidden rounded-md group"
	>
		<section className="relative aspect-[467/260]">
			<Image
				src={cover}
				alt={`${title} cover`}
				fill
				className="object-cover object-center"
			/>
			{!!banner && (
				<Typography
					as={"h3"}
					variant="subtitle"
					className="absolute bottom-0 left-0 w-full text-white bg-red-600 py-2 text-center"
				>
					{banner}
				</Typography>
			)}
		</section>

		<section>
			<section className="space-y-3 sm:space-y-5 p-5 sm:px-6 sm:py-8">
				<section className="space-y-2 sm:space-y-3">
					<Typography as={"h3"}>{title}</Typography>
					<Typography
						variant="body2"
						className="text-chicago-600 line-clamp-2"
					>
						{description}
					</Typography>
				</section>

				<span className="flex items-center space-x-2.5 group-hover:opacity-60 transition-all duration-150">
					<Typography as={"span"} variant={"h5"}>
						Read More
					</Typography>
					<span className="transition-all duration-150 group-hover:translate-x-2">
						<Icon name="long-arrow-right" />
					</span>
				</span>
			</section>
		</section>
	</Link>
)
