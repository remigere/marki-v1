import { twMerge } from "tailwind-merge"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export const SSOButton = ({ className, ...rest }: Props) => (
	<button
		className={twMerge(
			"w-14 h-14 min-w-14",
			"bg-black-haze-50",
			"rounded-full overflow-hidden",
			"grid place-items-center",
			"hover:bg-black-haze-100 transition-all duration-150",
			"active:bg-black-haze-200",
			className,
		)}
		{...rest}
	></button>
)
