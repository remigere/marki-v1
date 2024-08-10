import { Badge } from "@/design-system/badge"
import { Typography } from "@/design-system/typography"
import Image from "next/image"
import Link from "next/link"

export type Props = {
	calories: number
	cover: string
	description: string
	isNew?: boolean
	title: string
	slug: string
}

export const MealCard = ({
	calories,
	cover,
	description,
	isNew = false,
	title,
	slug,
}: Props) => {
	return (
		<Link href={`/menu/${slug}`} className="space-y-6 block">
			<div className="aspect-[343/224] bg-alto-200 rounded-lg overflow-hidden relative">
				<Image
					src={cover}
					fill
					alt={`${title} illustration`}
					className="object-cover object-center"
					sizes="343px"
				/>
				<div className="flex space-x-2 absolute bottom-4 left-4">
					<Badge>{calories} cal</Badge>
					{!!isNew && <Badge intent={"secondary"}>new</Badge>}
				</div>
			</div>
			<div className="space-y-2">
				<Typography as={"h4"}>{title}</Typography>
				<Typography
					className="text-chicago-600 line-clamp-2"
					variant="body2"
				>
					{description}
				</Typography>
			</div>
		</Link>
	)
}
