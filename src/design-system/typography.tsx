import { twMerge } from "tailwind-merge"
import { cva, type VariantProps } from "class-variance-authority"
import { inter, manrope, montserrat } from "@/ui/utils/fonts"

const elements = [
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"p",
	"span",
	"div",
] as const

type Elements = (typeof elements)[number]

type PolymorphicProps<Element extends React.ElementType, Props> = Props &
	Omit<React.ComponentProps<Element>, "as"> & {
		as?: Elements
	}

const typography = cva([], {
	variants: {
		variant: {
			h1: [
				"text-6xl leading-[4.5rem] font-semibold",
				"max-md:text-4xl max-md:leading-[3rem]",
			],
			h2: ["text-5xl leading-[3.5rem] font-semibold", "max-md:text-3xl"],
			h3: ["text-3xl leading-[2.5rem] font-medium", "max-md:text-xl"],
			h4: ["text-2xl leading-8 font-semibold", "max-md:text-lg"],
			h5: ["text-xl font-semibold"],
			h6: ["text-base font-semibold"],
			subtitle: [
				"text-sm font-semibold tracking-wider uppercase",
				"max-md:text-xs",
			],
			details: ["text-sm leading-6", "max-md:text-sm"],
			body1: ["text-xl", "max-md:text-base"],
			body2: ["text-base"],
		},
	},
	compoundVariants: [
		{
			variant: ["h1", "h2", "h3", "h4", "h5", "h6"],
			class: manrope.className,
		},
		{
			variant: ["subtitle"],
			class: montserrat.className,
		},
		{
			variant: ["body1", "body2"],
			class: inter.className,
		},
	],
	defaultVariants: {
		variant: "body1",
	},
})

type Props = VariantProps<typeof typography>

const defaultElement = "p"

export const Typography = <
	Element extends React.ElementType = typeof defaultElement,
>(
	props: PolymorphicProps<Element, Props>,
) => {
	const {
		as: Component = defaultElement,
		className,
		variant,
		...rest
	} = props

	const syncedVariant = elements.includes(Component) ? Component : variant

	return (
		<Component
			className={twMerge(
				typography({
					className,
					variant: variant ?? (syncedVariant as typeof variant),
				}),
			)}
			{...rest}
		/>
	)
}
