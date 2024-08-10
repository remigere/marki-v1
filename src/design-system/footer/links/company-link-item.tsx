import { Icon } from "@/design-system/icons"
import { Link } from "@/design-system/link"
import { Typography } from "@/design-system/typography"
import { ReactNode } from "react"

type Props = {
	href: string
	children: ReactNode
}

export const CompanyLinkItem = ({ href, children }: Props) => {
	return (
		<Link href={href} className="flex items-center space-x-3 py-1">
			<Icon name="arrow" size={12} />{" "}
			<Typography
				variant={"body2"}
				className="hover:text-red-600 transition-all duration-150"
			>
				{children}
			</Typography>
		</Link>
	)
}
