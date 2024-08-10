import { Typography } from "@/design-system/typography"
import { montserrat } from "@/ui/utils/fonts"
import { VariantProps, cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

const badge = cva(
	[
		montserrat.className,
		"text-sm rounded-full font-bold uppercase py-1.5 px-3.5",
	],
	{
		variants: {
			intent: {
				primary: ["bg-black text-white"],
				secondary: ["bg-bright-sun-300 text-black"],
			},
		},

		defaultVariants: {
			intent: "primary",
		},
	},
)

type Props = VariantProps<typeof badge> & {
	children: React.ReactNode
}

export const Badge = ({ intent, children }: Props) => (
	<Typography
		className={twMerge(badge({ intent }))}
		variant={"subtitle"}
		as="div"
	>
		{children}
	</Typography>
)
