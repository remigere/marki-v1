type Props = {
	size: number
}

export const Plus = ({ size }: Props) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			strokeWidth={1.5}
			stroke="currentColor"
			style={{ height: size, width: size }}
		>
			<line
				x1="12.0999"
				y1="4"
				x2="12.0999"
				y2="20"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<line
				x1="4"
				y1="11.9004"
				x2="20"
				y2="11.9004"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
