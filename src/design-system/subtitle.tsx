import { montserrat } from "@/ui/utils/fonts"
import { twMerge } from "tailwind-merge"

type PolymorphicProps<Element extends React.ElementType, Props> = Props &
	Omit<React.ComponentProps<Element>, "as"> & {
		as?: Element
	}

type Props = {}

const defaultElement = "span"

export const Subtitle = <
	Element extends React.ElementType = typeof defaultElement,
>(
	props: PolymorphicProps<Element, Props>,
) => {
	const { as: Component = defaultElement, className, ...rest } = props
	return (
		<Component
			className={twMerge(
				montserrat.className,
				"tracking-wider font-semibold uppercase text-xs",
				className,
			)}
			{...rest}
		/>
	)
}
