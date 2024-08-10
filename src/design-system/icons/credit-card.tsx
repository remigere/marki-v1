type Props = {
	size: number
}

export const CreditCard = ({ size }: Props) => {
	return (
		<svg
			viewBox="0 0 19 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ height: size, width: size }}
		>
			<path
				d="M16.25 6.75V4.5H2.75V6.75M16.25 6.75V13.5H2.75V6.75M16.25 6.75H2.75"
				stroke="currentColor"
				strokeWidth="1.3"
			/>
			<path
				d="M5 9.75H5.75"
				stroke="currentColor"
				strokeWidth="1.3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
