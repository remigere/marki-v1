type Props = {
	size: number
}

export const Subtract = ({ size }: Props) => {
	return (
		<svg
			width="18"
			height="18"
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			strokeWidth={1.5}
			stroke="currentColor"
			style={{ height: size, width: size }}
		>
			<path
				d="M3.84731 1C2.71429 2.44066 1 5.06749 1 7.69806C1 9.85274 2.35629 11.2121 3.75797 12.6169C3.98213 12.8416 4.20747 13.0674 4.42858 13.2978C4.59299 13.4692 4.75598 13.6421 4.9187 13.8148C6.43138 15.4201 7.92009 17 10.3019 17C12.9325 17 15.308 15.908 17 14.1527L13.1431 10.2958L10.5841 12.8548L5.65096 7.92175L8.21001 5.3627L3.84731 1Z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		</svg>
	)
}
