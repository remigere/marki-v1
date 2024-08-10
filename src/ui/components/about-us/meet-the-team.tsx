import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import Image from "next/image"

export const MeetTheTeam = () => (
	<section
		className="bg-black text-white py-10 sm:py-24 space-y-12 bg-no-repeat"
		style={{
			backgroundImage:
				"url(/img/home/bg-vector-1.svg), url(/img/home/bg-vector-2.svg)",
			backgroundPosition: "bottom right, top left",
		}}
	>
		<Container className="flex max-md:flex-col items-center gap-6 md:gap-10 lg:gap-40">
			<div className="space-y-5">
				<Typography as={"h2"}>Meet Adrien</Typography>
				<div className="space-y-4">
					<Typography variant={"body2"}>
						My background in French and Moroccan Jewish culture,
						where culinary excellence is both a tradition and a
						pride, significantly informs my approach to food. This
						heritage has instilled in me a deep appreciation for
						quality and craftsmanship in cuisine.
					</Typography>
					<Typography variant={"body2"}>
						Starting my own health journey, I determined there was
						no solution to quickly and accessibly automate
						nutritional solutions for my personal health needs.
					</Typography>
					<Typography variant={"body2"}>
						I am deeply drawn to the challenge of solving complex
						problems. My affinity for mathematics is profound, and I
						find great joy in tackling exceptionally difficult
						problems. Longevity is a science and the prospect of
						making a significant impact on human lives fuels my
						motivation to understand and share the knowledge we gain
						through our collective health journeys.
					</Typography>
				</div>
			</div>
			<div className="space-y-6 w-full">
				<div className="relative aspect-[540/643] md:min-w-72 lg:min-w-[28rem] w-full rounded-md overflow-hidden">
					<Image
						className="object-cover"
						src={"/img/about-us/adrien.jpg"}
						alt={"Picture of Adrien"}
						fill
					/>
				</div>
				<div className="text-center space-y-3">
					<Typography as={"h3"}>Adrien Cohen</Typography>
					<Typography variant={"subtitle"}>Founder & CEO</Typography>
				</div>
			</div>
		</Container>
		<Container className="flex max-md:flex-col items-center gap-6 md:gap-10 lg:gap-40">
			<div className="space-y-6 w-full max-md:order-1">
				<div className="relative aspect-[540/643] md:min-w-72 lg:min-w-[28rem] w-full rounded-md overflow-hidden">
					<Image
						className="object-cover"
						src={"/img/about-us/stephane.jpeg"}
						alt={"Picture of Stephane"}
						fill
					/>
				</div>
				<div className="text-center space-y-3">
					<Typography as={"h3"}>Stephane Remi</Typography>
					<Typography variant={"subtitle"}>
						Co-Founder & CTO
					</Typography>
				</div>
			</div>
			<div className="space-y-5">
				<Typography as={"h2"}>Meet Stephane</Typography>
				<div className="space-y-4">
					<Typography variant={"body2"}>
						My health journey started five years ago. Discovering
						neuroscientist, Matthew Walker, led to one of my first
						(and perhaps best) health habits: getting rid of my
						alarm clock. I was later captivated by the work of Bryan
						Johnson to identify a protocol for longevity, and have
						been dedicated to it for the past year. I found it a
						relief that someone could scientifically develop their
						version of an optimal diet.
					</Typography>
					<Typography variant={"body2"}>
						However, it occurred to me that, while Bryan's protocol
						is brilliant, I wanted to determine a way to get closer
						to what fits my specific biomarkers.
					</Typography>
					<Typography variant={"body2"}>
						I have always valued science above anything else. This
						means respecting and understanding an analytical process
						with iteration and measurement to obtain truth. I want
						to enjoy the longest life possible. With technology and
						science, I knew that I could realize a way to help other
						discover their nutritional truths to get to longevity.
						The startup environment in the United States is the best
						in the world, so there's no better place to develop this
						service.
					</Typography>
				</div>
			</div>
		</Container>
	</section>
)
