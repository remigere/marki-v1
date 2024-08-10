type Props = {
	size: number
}

export const CircleArrowLeft = ({ size }: Props) => {
	return (
		<svg
			viewBox="0 0 57 56"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ height: size, width: size }}
		>
			<path
				d="M28.4997 55.0833C13.542 55.0833 1.41634 42.9577 1.41634 28C1.41634 13.0422 13.542 0.916626 28.4997 0.916626C43.4574 0.916626 55.583 13.0422 55.583 28C55.583 42.9577 43.4574 55.0833 28.4997 55.0833Z"
				stroke="#4A4A4A"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M28.5 38.8333L17.6667 28L28.5 17.1666"
				stroke="#4A4A4A"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M39.333 28H17.6663"
				stroke="#4A4A4A"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
