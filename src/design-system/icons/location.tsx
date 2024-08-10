type Props = {
	size: number
}

export const Location = ({ size }: Props) => {
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
			<path
				d="M12 3C8.13401 3 5 6.0493 5 9.81081C5 13.5723 12 21 12 21C12 21 19 13.5723 19 9.81081C19 6.0493 15.866 3 12 3Z"
				stroke="currentColor"
				strokeWidth="2"
			/>
			<ellipse
				cx="12"
				cy="9.81052"
				rx="3"
				ry="2.91892"
				stroke="currentColor"
				strokeWidth="2"
			/>
		</svg>
	)
}
