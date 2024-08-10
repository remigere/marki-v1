import { Icon } from "@/design-system/icons"
import { Typography } from "@/design-system/typography"

type Props = {
	authorName: string
	publicationDate: string
}

export const Footer = ({ authorName, publicationDate }: Props) => (
	<section className="border-t border-[#D1D5DB] pt-8 flex justify-between gap-4 flex-wrap">
		<div className="text-chicago-600 flex">
			<Typography
				as={"span"}
				variant={"body2"}
				className="border-r border-[#D1D5DB] pr-2 mr-2"
			>
				{publicationDate}
			</Typography>
			<Typography as={"span"} variant={"body2"}>
				Written by {authorName}
			</Typography>
		</div>
		<button className="text-red-600 hover:opacity-60 transition-all duration-150 flex gap-2 items-center active:opacity-100">
			<Icon name="share" size={12} />
			<span>Share</span>
		</button>
	</section>
)
