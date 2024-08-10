import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import { twMerge } from "tailwind-merge"
import { Image } from "@/design-system/image"

export const Hero = () => {
	return (
		<section
			className="bg-bright-sun-300 overflow-hidden relative bg-no-repeat h-[26rem] md:h-[32rem] grid place-items-center"
			style={{
				backgroundImage:
					"url(/img/home/bg-vector-5.svg), url(/img/home/bg-vector-6.svg)",
				backgroundPosition: "bottom right, top left",
			}}
		>
			<div
				className={twMerge(
					"aspect-[750/745] absolute right-0 top-0 w-44 md:w-80 lg:w-[30rem] -translate-y-1/4 translate-x-1/4",
				)}
			>
				<Image
					src={"/img/menu/bowl-1.png"}
					alt="bowl with strawberries illustration"
					fill
					sizes="(max-width: 768px) 16rem, 384px"
				/>
			</div>
			<div
				className={twMerge(
					"aspect-[750/756] absolute bottom-0 w-36 md:w-60 lg:w-80 max-md:-translate-x-1/4 md:left-[15%] translate-y-1/4 md:translate-y-1/2",
				)}
			>
				<Image
					src={"/img/menu/bowl-2.png"}
					alt="bowl with vegetables illustration"
					fill
					sizes="(max-width: 768px) 20rem, 448px"
				/>
			</div>
			<div
				className={twMerge(
					"aspect-[449/450] absolute inset-0 max-md:hidden md:w-64 lg:w-96 left-[5%] -translate-y-[40%]",
				)}
			>
				<Image
					src={"/img/menu/bowl-3.png"}
					alt="bowl with vegetables illustration"
					fill
					sizes="(max-width: 768px) 20rem, 448px"
				/>
			</div>
			<Container className="grid place-items-center gap-3 md:gap-6 text-center">
				<Typography as={"h1"} className="max-w-2xl z-10">
					Explore Marki
				</Typography>
				<Typography className="max-w-md z-10">
					Share in the vision of better health standards for all
				</Typography>
			</Container>
		</section>
	)
}
