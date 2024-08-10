import { twMerge } from "tailwind-merge"

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = ({ className, ...rest }: Props) => (
	<textarea
		className={twMerge(
			"resize-none",
			"bg-white ring-red-600",
			"placeholder:text-chicago-600",
			"rounded-md py-3 px-5",
			"border border-[#CCC]",
			"hover:bg-black-haze-50 transition-all duration-150",
			"focus:outline-none",
			"focus-visible:ring-1",
			"disabled:bg-[#CCC] disabled:cursor-not-allowed",
			className,
		)}
		{...rest}
	/>
)
