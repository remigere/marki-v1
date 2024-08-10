import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import Image from "next/image"

export const HowItWorks = () => {
	return (
		<section className="pt-10 md:pt-24 text-center bg-black-haze-50 relative -z-10">
			<Container className="grid place-items-center gap-6 md:gap-10">
				<Typography as={"h2"}>How It Works</Typography>
				<div className="max-w-3xl lg:max-w-5xl grid md:grid-cols-3 relative gap-4 lg:gap-10 xl:gap-36">
					<div className="space-y-6 relative">
						<div className="aspect-square relative rounded-full overflow-hidden max-lg:max-w-40 mx-auto">
							<Image
								src={"/img/alpha-program/step-01.jpeg"}
								alt={"laptop with someones hands on it"}
								fill
								className="object-cover"
								sizes={"(max-width: 768px) 10rem, 245px"}
							/>
						</div>
						<div className="space-y-3 max-md:max-w-72">
							<div className="w-[50%] bg-black-haze-50 h-5 z-10">
								<Typography
									as="span"
									variant={"subtitle"}
									className="text-tory-blue-800 bg-black-haze-50 px-3 block absolute mx-auto left-0 right-0 w-fit z-10"
								>
									step 01
								</Typography>
							</div>
							<Typography as={"h4"}>
								Complete our intake form
							</Typography>
						</div>
					</div>
					<div className="space-y-6">
						<div className="aspect-square relative rounded-full overflow-hidden max-lg:max-w-40 mx-auto">
							<Image
								src={"/img/alpha-program/step-02.jpeg"}
								alt={"quiz with the answer yes checked"}
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
									className="text-tory-blue-800 bg-black-haze-50 px-3 block w-fit mx-auto"
								>
									step 02
								</Typography>

								<Typography as={"h4"}>
									Schedule a blood test for a complete
									biomarker assessment
								</Typography>
							</div>
						</div>
					</div>
					<div className="space-y-6 relative">
						<div className="aspect-square relative rounded-full overflow-hidden max-lg:max-w-40 mx-auto">
							<Image
								src={"/img/alpha-program/step-03.jpeg"}
								alt={
									"scientist looking at a tablet with data on it"
								}
								fill
								className="object-cover"
								sizes={"(max-width: 768px) 10rem, 245px"}
							/>
						</div>
						<div className="space-y-3 max-md:max-w-72">
							<div className="ml-auto w-[50%] bg-black-haze-50 h-5">
								<Typography
									as="span"
									variant={"subtitle"}
									className="text-tory-blue-800 bg-black-haze-50 px-3 block absolute mx-auto left-0 right-0 w-fit"
								>
									step 03
								</Typography>
							</div>
							<Typography as={"h4"}>
								Marki will analyze your results
							</Typography>
						</div>
					</div>
				</div>
				<div className="max-w-3xl lg:max-w-5xl grid md:grid-cols-3 relative gap-4 lg:gap-10 xl:gap-36">
					<div className="space-y-6 relative">
						<div className="aspect-square relative rounded-full overflow-hidden max-lg:max-w-40 mx-auto">
							<Image
								src={"/img/alpha-program/step-04.jpeg"}
								alt={"a doctor pointing at his mobile screen"}
								fill
								className="object-cover"
								sizes={"(max-width: 768px) 10rem, 245px"}
							/>
						</div>
						<div className="space-y-3 max-md:max-w-72">
							<div className="w-[50%] bg-black-haze-50 h-5 z-10">
								<Typography
									as="span"
									variant={"subtitle"}
									className="text-tory-blue-800 bg-black-haze-50 px-3 block absolute mx-auto left-0 right-0 w-fit z-10"
								>
									step 04
								</Typography>
							</div>
							<Typography as={"h4"}>
								Discuss your nutritional changes with a Marki
								nutritionist; Marki will deliver meals to your
								door
							</Typography>
						</div>
					</div>
					<div className="space-y-6">
						<div className="aspect-square relative rounded-full overflow-hidden max-lg:max-w-40 mx-auto">
							<Image
								src={"/img/alpha-program/step-05.jpeg"}
								alt={"bowl of strawberries"}
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
									className="text-tory-blue-800 bg-black-haze-50 px-3 block w-fit mx-auto"
								>
									step 05
								</Typography>

								<Typography as={"h4"}>
									 Enjoy food tailored to your body’s needs,
									optimized for longevity
								</Typography>
							</div>
						</div>
					</div>
					<div className="space-y-6 relative">
						<div className="aspect-square relative rounded-full overflow-hidden max-lg:max-w-40 mx-auto">
							<Image
								src={"/img/alpha-program/step-06.jpeg"}
								alt={"a man pointing at his watch"}
								fill
								className="object-cover"
								sizes={"(max-width: 768px) 10rem, 245px"}
							/>
						</div>
						<div className="space-y-3 max-md:max-w-72">
							<div className="ml-auto w-[50%] bg-black-haze-50 h-5">
								<Typography
									as="span"
									variant={"subtitle"}
									className="text-tory-blue-800 bg-black-haze-50 px-3 block absolute mx-auto left-0 right-0 w-fit"
								>
									step 06
								</Typography>
							</div>
							<Typography as={"h4"}>
								Continue to monitor your results over time
							</Typography>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
