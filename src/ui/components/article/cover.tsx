import Image from "next/image"

type Props = {
	src: string
	alt: string
}

export const Cover = ({ alt, src }: Props) => (
	<div className="relative rounded-md overflow-hidden aspect-[334/182] sm:aspect-[880/524]">
		<Image
			src={src}
			alt={alt}
			fill
			className="object-cover object-center"
		/>
	</div>
)
