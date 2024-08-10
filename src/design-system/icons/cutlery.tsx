type Props = {
	size: number
}

export const Cutlery = ({ size }: Props) => {
	return (
		<svg
			viewBox="0 0 19 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ height: size, width: size }}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5.75 1.20418H6.5V6.60691C6.52895 6.59645 6.55785 6.58527 6.58654 6.57332C6.79087 6.48818 6.95346 6.37712 7.06279 6.24046C7.1627 6.11557 7.25 5.93102 7.25 5.625V1.20418H8C8.41421 1.20418 8.75 1.20418 8.75 1.20418V5.625C8.75 6.25648 8.55605 6.77505 8.23409 7.17751C7.92154 7.5682 7.52163 7.80869 7.16346 7.95793C6.92993 8.05524 6.70083 8.11937 6.5 8.16192V17.25C6.5 17.25 6.16421 17.25 5.75 17.25C5.33579 17.25 5 17.25 5 17.25V8.16192C4.79917 8.11937 4.57007 8.05524 4.33654 7.95793C3.97837 7.80869 3.57846 7.5682 3.26591 7.17751C2.94395 6.77505 2.75 6.25648 2.75 5.625V1.20418H3.5H4.25V5.625C4.25 5.93102 4.3373 6.11557 4.43721 6.24046C4.54654 6.37712 4.70913 6.48818 4.91346 6.57332C4.94215 6.58527 4.97105 6.59645 5 6.60691V1.20418H5.75ZM14.75 0.75C15.1642 0.75 15.4877 1.1995 15.4877 1.61371V17.25C15.4877 17.25 15.1642 17.25 14.75 17.25C14.3358 17.25 14 17.25 14 17.25V8.625H11.75C11.3358 8.625 11 8.28921 11 7.875V4.5C11 3.61876 11.2225 2.90797 11.5947 2.3496C11.9638 1.79592 12.4506 1.43617 12.9146 1.20418C13.3756 0.973662 13.8276 0.862141 14.158 0.80708C14.3249 0.779253 14.4657 0.765049 14.5677 0.757765C14.6188 0.754114 14.6605 0.752176 14.6913 0.751149C14.7067 0.750635 14.7195 0.750348 14.7293 0.750189L14.7419 0.750035L14.7465 0.750007L14.7484 0.750002L14.7492 0.75C14.7492 0.75 14.75 0.75 14.75 1.5V0.75ZM14 2.38151C13.8653 2.42277 13.7243 2.47638 13.5854 2.54582C13.2994 2.68883 13.0362 2.89158 12.8428 3.18165C12.6525 3.46703 12.5 3.88124 12.5 4.5V7.125H14V2.38151Z"
				fill="currentColor"
			/>
		</svg>
	)
}
