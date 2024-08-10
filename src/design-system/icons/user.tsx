type Props = {
	size: number
}

export const User = ({ size }: Props) => {
	return (
		<svg
			viewBox="0 0 19 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ height: size, width: size }}
		>
			<circle
				cx="9.5"
				cy="5.25"
				r="2.25"
				stroke="currentColor"
				strokeWidth="1.3"
			/>
			<path
				d="M15.5 15C15.5 12.1005 12.8137 9.75 9.5 9.75C6.18629 9.75 3.5 12.1005 3.5 15"
				stroke="currentColor"
				strokeWidth="1.3"
				strokeLinecap="round"
			/>
		</svg>
	)
}
