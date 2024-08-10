type Props = {
	size: number
}

export const Flash = ({ size }: Props) => {
	return (
		<svg
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ height: size, width: size }}
		>
			<path
				d="M13.5 10H20.5L11.5 23V14H4.5L13.5 1V10Z"
				fill="currentColor"
			/>
		</svg>
	)
}
