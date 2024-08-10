import { Typography } from "@/design-system/typography"

type Props = {
	title: string
	paragraphs: string[] | string
}

export const Section = ({ title, paragraphs }: Props) => (
	<section className="space-y-2">
		<Typography as={"h2"} variant={"h3"} className="uppercase">
			{title}
		</Typography>
		<div className="space-y-4">
			{Array.isArray(paragraphs) ? (
				paragraphs.map((paragraph, i) => (
					<Typography
						key={i}
						variant={"body2"}
						className="text-chicago-600"
					>
						{paragraph}
					</Typography>
				))
			) : (
				<Typography variant={"body2"} className="text-chicago-600">
					{paragraphs}
				</Typography>
			)}
		</div>
	</section>
)
