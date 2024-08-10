import { Button } from "@/design-system/button"
import { Container } from "@/design-system/container"
import { Icon } from "@/design-system/icons"
import { Typography } from "@/design-system/typography"
import { twMerge } from "tailwind-merge"
import { Image } from "@/design-system/image"
import Link from "next/link"

export const Hero = () => {
	return (
		<section
			className="bg-black py-10 md:py-36 text-white overflow-hidden relative bg-no-repeat"
			style={{
				backgroundImage:
					"url(/img/home/bg-vector-1.svg), url(/img/home/bg-vector-2.svg)",
				backgroundPosition: "bottom right, top left",
			}}
		>
			<Container className="grid md:grid-cols-2 gap-16 md:gap-40 max-md:place-items-center max-md:text-center">
				<div className="space-y-10">
					<div className="space-y-5">
						<Typography
							variant={"subtitle"}
							as={"div"}
							className="flex space-x-5 items-center text-left mx-auto"
						>
							<span>
								<Icon name="map-pin" size={24} />
							</span>
							<span>
								Now serving LA, Orange County, and the San
								Francisco Bay area
							</span>
						</Typography>
						<Typography as={"h1"}>
							Meals for Better Health and Longevity
						</Typography>
						<Typography className="max-w-96 max-sm:max-w-72 max-sm:mx-auto">
							Improve your longevity with fresh, ready-to-eat,
							science-based meals
						</Typography>
					</div>
					<div className="space-y-3">
						<Button
							className="max-md:mx-auto"
							as={Link}
							href={"/checkout/build-your-meal-plan"}
						>
							Create your habit today
						</Button>
						<Typography
							variant="details"
							className="text-[#FFFFFF75]"
						>
							*Get 30% off your first month
						</Typography>
					</div>
				</div>
				<div className="relative max-md:h-96">
					<div
						className={twMerge(
							"aspect-[750/745] absolute inset-0 max-w-sm",
							"max-md:w-[16rem] max-md:translate-y-[8rem]",
						)}
					>
						<Image
							src={"/img/home/bowl-1.png"}
							alt="bowl with strawberries illustration"
							fill
							sizes="(max-width: 768px) 16rem, 384px"
						/>
					</div>
					<div
						className={twMerge(
							"aspect-[750/756] absolute inset-0 max-w-md",
							"md:translate-x-[80%] md:-translate-y-1/2",
							"max-md:w-[20rem] max-md:-translate-x-[20rem]",
						)}
					>
						<Image
							src={"/img/home/bowl-2.png"}
							alt="bowl with vegetables illustration"
							fill
							sizes="(max-width: 768px) 20rem, 448px"
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
