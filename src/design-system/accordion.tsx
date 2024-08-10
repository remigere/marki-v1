import { Icon } from "@/design-system/icons"
import { Typography } from "@/design-system/typography"
import * as Accordion from "@radix-ui/react-accordion"
import { RefAttributes, forwardRef } from "react"
import { twMerge } from "tailwind-merge"

export const AccordionRoot = ({
	className,
	...props
}: (Accordion.AccordionSingleProps | Accordion.AccordionMultipleProps) &
	RefAttributes<HTMLDivElement>) => (
	<Accordion.Root className={twMerge(className)} {...props} />
)

export const AccordionItem = forwardRef(
	(
		{
			children,
			className,
			...props
		}: Accordion.AccordionItemProps & RefAttributes<HTMLDivElement>,
		forwardedRef: React.ForwardedRef<HTMLDivElement>,
	) => (
		<Accordion.Item
			className={twMerge(
				"overflow-hidden w-full border-b border-[#00000020]",
				className,
			)}
			{...props}
			ref={forwardedRef}
		>
			{children}
		</Accordion.Item>
	),
)

AccordionItem.displayName = "AccordionItem"

export const AccordionTrigger = forwardRef(
	(
		{
			children,
			className,
			...props
		}: Accordion.AccordionTriggerProps & RefAttributes<HTMLButtonElement>,
		forwardedRef: React.ForwardedRef<HTMLButtonElement>,
	) => (
		<Accordion.Header className="flex">
			<Accordion.Trigger
				className={twMerge(
					"group flex py-6 w-full items-center text-left justify-between outline-none",
					className,
				)}
				{...props}
				ref={forwardedRef}
			>
				<Typography as={"h4"}>{children}</Typography>
				<div
					className="group-data-[state=open]:hidden ml-4 text-red-600"
					aria-hidden
				>
					<Icon name="plus" size={24} />
				</div>
				<div
					className="group-data-[state=closed]:hidden ml-4 text-red-600"
					aria-hidden
				>
					<Icon name="minus" size={24} />
				</div>
			</Accordion.Trigger>
		</Accordion.Header>
	),
)

AccordionTrigger.displayName = "AccordionTrigger"

export const AccordionContent = forwardRef(
	(
		{
			children,
			className,
			...props
		}: Accordion.AccordionContentProps & RefAttributes<HTMLDivElement>,
		forwardedRef: React.ForwardedRef<HTMLDivElement>,
	) => (
		<Accordion.Content
			className={twMerge(
				"data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden",
				className,
			)}
			{...props}
			ref={forwardedRef}
		>
			<div className="text-xl text-chicago-600 pb-6 space-y-4">
				{children}
			</div>
		</Accordion.Content>
	),
)

AccordionContent.displayName = "AccordionContent"
