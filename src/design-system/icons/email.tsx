type Props = {
	size: number
}

export const Email = ({ size }: Props) => {
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
			<rect
				x="3"
				y="5"
				width="18"
				height="14"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinejoin="round"
			/>
			<path
				d="M6 8.6311L12 12.6311L18 8.6311"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="square"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
