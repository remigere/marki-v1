import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import { FEATURES } from "@/ui/components/homepage/features/features"

export const Standards = () => (
	<section className="bg-black-haze-50 py-10 sm:py-24">
		<Container className="grid place-items-center gap-6 sm:gap-10">
			<Typography as={"h2"}>Our Standards</Typography>
			<div className="flex items-center justify-center gap-6 md:gap-10 xl:gap-20 flex-wrap">
				{FEATURES.map((feature, i) => (
					<div
						key={i}
						className="py-6 text-center gap-5 grid place-items-center"
					>
						<div className="grid place-items-center bg-white rounded-md w-24 h-24">
							{feature.icon}
						</div>
						<Typography as={"h4"} className="md:max-w-56">
							{feature.description}
						</Typography>
					</div>
				))}
			</div>
		</Container>
	</section>
)
