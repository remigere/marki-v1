import { Icon, IconName } from "@/design-system/icons"
import { twMerge } from "tailwind-merge"

type Props = { icon: IconName } & React.ComponentProps<"button">

export const IconButton = ({ icon, className, ...rest }: Props) => {
	return (
		<button
			className={twMerge(
				"w-9 min-w-9 h-9",
				"max-md:w-full max-md:h-10",
				"rounded-md",
				"border border-alto-200",
				"grid place-items-center",
				"text-red-600",
				"bg-white",

				"focus:outline-none",
				"focus-visible:ring-4",
				"transition-all",

				"hover:bg-gray-50",
				"active:bg-gray-100",
				"focus-visible:bg-gray-100",
				"disabled:bg-gray-100 disabled:text-boulder-400",
				"ring-boulder-400",

				className,
			)}
			{...rest}
		>
			<Icon name={icon} />
		</button>
	)
}
