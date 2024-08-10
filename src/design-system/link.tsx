import NextLink, { LinkProps } from "next/link"
import { ReactNode } from "react"

type Props = LinkProps & {
	className?: string
	children?: ReactNode
}

export const Link = ({ children, ...props }: Props) => (
	<NextLink {...props}>{children}</NextLink>
)
