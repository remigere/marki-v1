type Props = {
	size: number
}

export const ListCheck = ({ size }: Props) => {
	return (
		<svg
			viewBox="0 0 19 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ height: size, width: size }}
		>
			<path
				d="M5.375 4.5H3.5V15.75H15.5V4.5H13.625"
				stroke="currentColor"
				strokeWidth="1.3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11.75 3.80357V2.25H7.25V3.80357"
				stroke="currentColor"
				strokeWidth="1.3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.875 10.125L8.375 11.625L12.125 7.875"
				stroke="currentColor"
				strokeWidth="1.3"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
