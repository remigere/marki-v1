type Props = {
	size: number
}

export const Arrow = ({ size }: Props) => {
	return (
		<svg
			width="7"
			height="12"
			viewBox="0 0 7 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			strokeWidth={1.5}
			stroke="currentColor"
			style={{ height: size, width: size }}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M1.28033 0.21967L6.0533 4.99264C6.34619 5.28553 6.34619 5.76041 6.0533 6.0533L1.28033 10.8263C0.987436 11.1192 0.512562 11.1192 0.219669 10.8263C-0.0732243 10.5334 -0.0732242 10.0585 0.219669 9.76561L4.46231 5.52297L0.21967 1.28033C-0.0732234 0.987437 -0.0732234 0.512563 0.21967 0.21967C0.512563 -0.0732233 0.987437 -0.0732233 1.28033 0.21967Z"
				fill="none"
			/>
		</svg>
	)
}
