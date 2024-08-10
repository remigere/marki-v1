import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import Image from "next/image"
import { twMerge } from "tailwind-merge"

export const Banner = () => (
	<div
		className="bg-tory-blue-800 text-white py-11 sm:py-24 bg-no-repeat relative overflow-hidden"
		style={{
			backgroundImage:
				"url(/img/home/bg-vector-3.svg), url(/img/home/bg-vector-2.svg)",
			backgroundPosition: "bottom right, top left",
		}}
	>
		<div
			className={twMerge(
				"aspect-[750/756] absolute left-0 top-0 translate-x-1/4 xl:translate-x-1/2 -translate-y-1/3 max-md:hidden w-52 md:w-64 xl:w-80",
			)}
		>
			<Image
				src={"/img/menu/bowl-1.png"}
				alt="bowl with vegetables illustration"
				fill
				sizes="(max-width: 768px) 20rem, 448px"
			/>
		</div>
		<div
			className={twMerge(
				"aspect-[449/450] absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 max-md:hidden w-60 lg:w-80",
			)}
		>
			<Image
				src={"/img/menu/bowl-3.png"}
				alt="bowl with vegetables illustration"
				fill
				sizes="(max-width: 768px) 20rem, 448px"
			/>
		</div>
		<Container className="text-center">
			<Typography as={"h1"} variant={"h2"}>
				Questions?
				<br />
				We are here to help!
			</Typography>
		</Container>
	</div>
)
