"use client"

import { useState } from "react"
import { twMerge } from "tailwind-merge"
import { cva, type VariantProps } from "class-variance-authority"
import { Icon, IconName } from "@/design-system/icons"

const input = cva(
	[
		"w-full",
		"bg-white ring-red-600",
		"placeholder:text-chicago-600",
		"rounded-md py-3 px-5",
		"border border-[#CCC] h-12",
		"hover:bg-black-haze-50 transition-all duration-150",
		"focus:outline-none",
		"focus-visible:ring-1",
		"disabled:bg-[#CCC] disabled:cursor-not-allowed",
	],
	{
		variants: {
			iconPosition: {
				none: "",
				left: "pl-14",
			},
		},
		defaultVariants: {
			iconPosition: "none",
		},
	},
)

type Props = VariantProps<typeof input> &
	React.InputHTMLAttributes<HTMLInputElement> & {
		icon?: IconName
		iconClassName?: string
		parentClassName?: string
	}

export const Input = ({
	className,
	icon,
	iconClassName,
	iconPosition,
	parentClassName,
	type = "text",
	...rest
}: Props) => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<div className={twMerge("relative", parentClassName)}>
			{!!icon && iconPosition === "left" && (
				<span
					className={twMerge(
						"absolute text-red-600 inset-y-O grid place-items-center h-full left-5",
						iconClassName,
					)}
				>
					<Icon name={icon} size={24} />
				</span>
			)}
			<input
				className={twMerge(input({ className, iconPosition }))}
				type={
					type === "password"
						? showPassword
							? "text"
							: "password"
						: type
				}
				{...rest}
			/>
			{type === "password" && (
				<button
					type="button"
					className={twMerge(
						"absolute grid place-items-center h-full top-0 right-5",
						iconClassName,
					)}
					onClick={() => setShowPassword(!showPassword)}
				>
					<Icon name={showPassword ? "eye-slash" : "eye"} size={24} />
				</button>
			)}
		</div>
	)
}
