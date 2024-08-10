import { Icon, IconName } from "@/design-system/icons"
import { Typography } from "@/design-system/typography"

type Props = {
	href: string
	icon: IconName
	title: string
	description: string
}

export const GetInTouchItem = ({ href, icon, title, description }: Props) => {
	return (
		<a
			href={href}
			className="flex items-center gap-x-4 group"
			target="_blank"
			rel="noreferrer"
		>
			<div className="rounded-md p-3.5 bg-pampas-50 bg-opacity-10">
				<Icon name={icon} size={24} />
			</div>
			<div className="flex flex-col gap-y-1.5">
				<Typography variant={"subtitle"}>{title}</Typography>
				<Typography
					variant={"body2"}
					className="group-hover:text-red-600 transition-all duration-150"
				>
					{description}
				</Typography>
			</div>
		</a>
	)
}
