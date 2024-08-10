import { twMerge } from "tailwind-merge"
import { cva, type VariantProps } from "class-variance-authority"
import { manrope } from "@/ui/utils/fonts"

type PolymorphicProps<Element extends React.ElementType, Props> = Props &
	Omit<React.ComponentProps<Element>, "as"> & {
		as?: Element
	}

const button = cva(
	[
		"h-fit",
		"w-fit",
		"whitespace-nowrap",
		"leading-none",
		"flex",
		"items-center",
		"justify-center",
		"focus:outline-none",
		"focus-visible:ring-4",
		"transition-all",
		"disabled:cursor-not-allowed",
		"font-semibold",
		manrope.className,
	],
	{
		variants: {
			intent: {
				primary: [
					"bg-red-600",
					"text-white",
					"hover:bg-red-500",
					"active:bg-red-700",
					"focus-visible:bg-red-700",
					"disabled:bg-red-200",
					"ring-red-400",
				],
				secondary: [
					"bg-black",
					"text-white",
					"hover:bg-gray-900",
					"active:bg-gray-800",
					"focus-visible:bg-gray-800",
					"disabled:bg-alto-200",
					"ring-boulder-400",
				],
				tertiary: [
					"bg-white",
					"text-black",
					"hover:bg-gray-100",
					"active:bg-alto-200",
					"focus-visible:bg-alto-200",
					"disabled:bg-alto-200",
					"ring-boulder-400",
				],
				ghost: [
					"bg-transparent",
					"hover:bg-black-haze-50",
					"active:bg-black-haze-100",
					"focus-visible:bg-black-haze-100",
					"disabled:bg-black-haze-200",
					"ring-black-haze-400",
				],
			},
			size: {
				base: ["py-4", "px-7", "rounded-md"],
			},
		},

		defaultVariants: {
			intent: "primary",
			size: "base",
		},
	},
)

type Props = VariantProps<typeof button>

const defaultElement = "button"

export const Button = <
	Element extends React.ElementType = typeof defaultElement,
>(
	props: PolymorphicProps<Element, Props>,
) => {
	const {
		as: Component = defaultElement,
		className,
		intent,
		size,
		btnType,
		...rest
	} = props
	return (
		<Component
			className={twMerge(button({ className, intent, size }))}
			{...rest}
		/>
	)
}
