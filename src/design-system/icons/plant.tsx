type Props = {
	size: number
}

export const Plant = ({ size }: Props) => {
	return (
		<svg
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ height: size, width: size }}
		>
			<path
				d="M22.5 7V9.5C22.5 13.09 19.59 16 16 16H13.5V21H11.5V14L11.519 13C11.774 9.644 14.579 7 18 7H22.5ZM6.5 3C9.592 3 12.216 5.005 13.143 7.786C11.643 9.061 10.653 10.914 10.516 13H9.5C5.634 13 2.5 9.866 2.5 6V3H6.5Z"
				fill="currentcolor"
			/>
		</svg>
	)
}
