import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import Image from "next/image"

export const Program = () => (
	<>
		<section className="py-10 sm:py-24">
			<Container className="grid md:grid-cols-2 max-md:gap-6 place-items-center">
				<div className="space-y-5 md:pr-14">
					<Typography as={"h2"}>The Alpha Program</Typography>
					<div className="space-y-8">
						<Typography variant={"body2"}>
							Our bodies contain tremendous amounts of information
							that can allow us to improve our health and
							longevity. However, unlocking that data to turn it
							into actionable insights can be a difficult and
							unwieldy process. For many people, it feels
							inaccessible; after all, most health insurances only
							cover the most basic blood tests. 
						</Typography>
						<Typography variant={"body2"}>
							Named after the earliest stages of technology
							development, the Marki Alpha Program leverages
							advances in AI to scale individualized health
							planning. Our models examine facets of your
							lifestyle with an analysis of your biomarkers to
							provide holistic recommendations to improve
							longevity. We want to make it easy for anyone to
							develop nutritional plans and shift lifestyle habits
							that improve your specific biomarkers.
						</Typography>
					</div>
				</div>
				<div className="relative aspect-[714/512] w-full rounded-lg overflow-hidden">
					<Image
						src={"/img/alpha-program/athletes.jpeg"}
						alt={"Athletes"}
						fill
					/>
				</div>
			</Container>
		</section>
		<section className="py-10 sm:py-24">
			<Container className="grid md:grid-cols-2 max-md:gap-6 place-items-center">
				<div className="space-y-5 md:pl-14 md:order-1">
					<Typography as={"h2"}>Why Nutrition?</Typography>
					<div className="space-y-8">
						<Typography variant={"body2"}>
							Nutrition is the cornerstone of an ongoing journey
							to improve health and longevity. While it is not the
							only pillar of a multifaceted approach, we believe
							it is perhaps the most critical one. A nutritional
							lifestyle that complements and improves your
							biomarkers can have a significant impact on key
							factors of longevity including gut health,
							inflammation, brain health, chronic disease, and
							weight. 
						</Typography>
						<Typography variant={"body2"}>
							Interested in learning more about your biomarkers
							and corresponding nutritional compatibility? Sign up
							now to join our program; we’ll send an update when
							the next cohort opens.
						</Typography>
					</div>
				</div>
				<div className="relative aspect-[714/512] w-full rounded-lg overflow-hidden">
					<Image
						src={"/img/alpha-program/bursting-basket.jpeg"}
						alt={
							"Basket filled with fruits and vegetables bursting"
						}
						fill
					/>
				</div>
			</Container>
		</section>
	</>
)
