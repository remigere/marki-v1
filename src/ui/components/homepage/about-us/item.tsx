import { ReactNode } from "react"
import { Icon, IconName } from "@/design-system/icons"
import { Typography } from "@/design-system/typography"

type Props = {
	icon: IconName
	children: ReactNode
}

export const Item = ({ icon, children }: Props) => {
	return (
		<section className="p-[1px] rounded-md overflow-hidden bg-gradient-to-b from-[#535353] to-[#1A1A1A]">
			<section className="p-3 bg-[#1A1A1A] rounded-md flex items-center gap-x-4">
				<Icon name={icon} size={24} />
				<Typography variant={"h6"}>{children}</Typography>
			</section>
		</section>
	)
}
