type Props = {
	size: number
}

export const Facebook = ({ size }: Props) => {
	return (
		<svg
			viewBox="0 0 20 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ height: size, width: size }}
		>
			<path
				d="M14.4345 11.165L14.9854 7.57282H11.5388V5.24272C11.5388 4.25995 12.0204 3.30097 13.5641 3.30097H15.1311V0.242718C15.1311 0.242718 13.709 0 12.3493 0C9.51068 0 7.65534 1.72039 7.65534 4.83495V7.57282H4.5V11.165H7.65534V19.849C8.94201 20.0503 10.2522 20.0503 11.5388 19.849V11.165H14.4345Z"
				fill="#1877F2"
			/>
		</svg>
	)
}
