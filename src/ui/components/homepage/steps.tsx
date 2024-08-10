import { Button } from "@/design-system/button"
import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import Image from "next/image"
import Link from "next/link"

export const Steps = () => {
	return (
		<section className="py-10 md:py-24 text-center">
			<Container className="grid place-items-center gap-6 md:gap-10">
				<Typography as={"h2"}>
					Enjoy Better Health in Three Easy Steps
				</Typography>
				<div className="max-w-3xl lg:max-w-5xl grid md:grid-cols-3 relative gap-4 lg:gap-10 xl:gap-36">
					<div className="space-y-6 relative">
						<div className="aspect-square relative rounded-full overflow-hidden max-lg:max-w-40 mx-auto">
							<Image
								src={"/img/home/step-01.jpg"}
								alt={""}
								fill
								className="object-cover"
								sizes={"(max-width: 768px) 10rem, 245px"}
							/>
						</div>
						<div className="space-y-3 max-md:max-w-72">
							<div className="w-[50%] bg-white h-5 z-10">
								<Typography
									as="span"
									variant={"subtitle"}
									className="text-tory-blue-800 bg-white px-3 block absolute mx-auto left-0 right-0 w-fit z-10"
								>
									step 01
								</Typography>
							</div>
							<Typography as={"h4"}>
								Sign up to review your meal options
							</Typography>
						</div>
					</div>
					<div className="space-y-6">
						<div className="aspect-square relative rounded-full overflow-hidden max-lg:max-w-40 mx-auto">
							<Image
								src={"/img/home/step-02.jpg"}
								alt={""}
								fill
								className="object-cover"
								sizes={"(max-width: 768px) 10rem, 245px"}
							/>
						</div>
						<div className="max-md:max-w-72">
							<div className="w-full h-5 absolute left-0 right-0 -z-10 flex items-center justify-center max-md:hidden">
								<div
									className="w-full bg-no-repeat h-1"
									style={{
										backgroundSize:
											"2px 100%, 100% 2px, 2px 100% , 100% 2px",
										backgroundPosition: "0 0, 0 0, 100% 0",
										backgroundImage:
											"repeating-linear-gradient(0deg, #D1D5DB, #D1D5DB 10px, transparent 10px, transparent 23px, #D1D5DB 23px), repeating-linear-gradient(90deg, #D1D5DB, #D1D5DB 10px, transparent 10px, transparent 23px, #D1D5DB 23px), repeating-linear-gradient(180deg, #D1D5DB, #D1D5DB 10px, transparent 10px, transparent 23px, #D1D5DB 23px), repeating-linear-gradient(270deg, #D1D5DB, #D1D5DB 10px, transparent 10px, transparent 23px, #D1D5DB 23px)",
									}}
								/>
							</div>
							<div className="space-y-3">
								<Typography
									as="span"
									variant={"subtitle"}
									className="text-tory-blue-800 bg-white px-3 block w-fit mx-auto"
								>
									step 02
								</Typography>

								<Typography as={"h4"}>
									Subscribe and select your meal plan
								</Typography>
							</div>
						</div>
					</div>
					<div className="space-y-6 relative">
						<div className="aspect-square relative rounded-full overflow-hidden max-lg:max-w-40 mx-auto">
							<Image
								src={"/img/home/step-03.jpg"}
								alt={""}
								fill
								className="object-cover"
								sizes={"(max-width: 768px) 10rem, 245px"}
							/>
						</div>
						<div className="space-y-3 max-md:max-w-72">
							<div className="ml-auto w-[50%] bg-white h-5">
								<Typography
									as="span"
									variant={"subtitle"}
									className="text-tory-blue-800 bg-white px-3 block absolute mx-auto left-0 right-0 w-fit"
								>
									step 03
								</Typography>
							</div>
							<Typography as={"h4"}>
								Enjoy your fresh, ready-to-eat meal
							</Typography>
						</div>
					</div>
				</div>
				<Button
					as={Link}
					href="/checkout/build-your-meal-plan"
					className="max-md:hidden"
				>
					Order now
				</Button>
			</Container>
		</section>
	)
}
