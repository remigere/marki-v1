type Props = {
	size: number
}

export const CircleArrowRight = ({ size }: Props) => {
	return (
		<svg
			viewBox="0 0 56 56"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ height: size, width: size }}
		>
			<path
				d="M28.0833 55.1667C43.041 55.1667 55.1667 43.041 55.1667 28.0833C55.1667 13.1256 43.041 1 28.0833 1C13.1256 1 1 13.1256 1 28.0833C1 43.041 13.1256 55.1667 28.0833 55.1667Z"
				stroke="#4A4A4A"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M28.083 38.9167L38.9163 28.0833L28.083 17.25"
				stroke="#4A4A4A"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.25 28.0834H38.9167"
				stroke="#4A4A4A"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
