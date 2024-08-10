type Props = {
	size: number
}

export const Lock = ({ size }: Props) => {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ height: size, width: size }}
		>
			<path
				d="M6 12.2308C6 9.46154 5.25 3 12 3C15.5 3 18 5.30769 18 9.46154V12.2308M6 12.2308H3V21H21V12.2308H18M6 12.2308H12H18"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 16V18"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	)
}
