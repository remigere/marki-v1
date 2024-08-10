import { twMerge } from "tailwind-merge"

type Props = React.HTMLAttributes<HTMLDivElement>

export const Container = ({ className, ...rest }: Props) => (
	<div
		className={twMerge(
			"mx-auto max-w-[91.25rem] container px-4 md:px-6",
			className,
		)}
		{...rest}
	/>
)
