import { Typography } from "@/design-system/typography"
import { manrope } from "@/ui/utils/fonts"
import { twMerge } from "tailwind-merge"

export type Feature = {
	icon: React.ReactNode
	description: string
}

type Props = Feature

export const FeatureCard = ({ icon, description }: Props) => (
	<div className="p-6 space-x-6 flex flex-row items-center bg-black-haze-50 rounded-lg">
		{icon} <Typography as={"h4"}>{description}</Typography>
	</div>
)
