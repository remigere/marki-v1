import { Ingredient } from "@/constants/ingredients"
import { Typography } from "@/design-system/typography"
import Image from "next/image"

type Props = Ingredient

export const IngredientItem = ({ photoSrc, title }: Props) => (
	<div className="flex gap-4 items-center">
		<div className="relative w-8 h-8 min-w-8 bg-black-haze-50 overflow-hidden rounded-full">
			<Image
				src={photoSrc}
				alt={`${title} photo`}
				layout="responsive" // Changed from 'fill' to 'responsive'
				width={32} // Explicit width for responsive layout
				height={32} // Explicit height for responsive layout
				className="object-cover object-center"
			/>
		</div>
		<Typography className={"text-chicago-600"}>{title}</Typography>
	</div>
)