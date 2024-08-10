import { Recipe } from "@/constants/recipes"
import { Badge } from "@/design-system/badge"
import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import Image from "next/image"
import { twMerge } from "tailwind-merge"

type Props = Pick<Recipe, "steps" | "calories" | "image" | "title">

export const Instructions = ({ calories, image, steps, title }: Props) => (
	<section className="py-10 lg:py-20">
		<Container>
			<div className="max-lg:flex-col max-lg:flex gap-4 relative">
				<div className="bg-black-haze-50 space-y-6 lg:space-y-8 max-lg:py-5 max-lg:px-4 p-12 lg:pr-40 max-w-2xl xl:max-w-4xl rounded-md">
					<div className="flex max-lg:gap-3 gap-5 items-center flex-wrap max-lg:flex-wrap-reverse">
						<Typography as={"h1"}>{title}</Typography>
						<Badge>{calories}kcal</Badge>
					</div>
					<div className="space-y-5">
						<Typography
							as={"h2"}
							variant={"h4"}
							className="w-8 h-8 min-w-8"
						>
							Instructions
						</Typography>
						<div className="space-y-4 lg:space-y-5">
							{steps.map((step, i) => (
								<div key={i} className="flex space-x-4">
									<Typography as={"h3"} variant={"h4"}>
										{i + 1}.
									</Typography>
									<Typography
										variant={"body2"}
										className="text-chicago-600"
									>
										{step}
									</Typography>
								</div>
							))}
						</div>
					</div>
				</div>
				<aside
					className={twMerge(
						"rounded-md overflow-hidden",
						"aspect-[600/400]",
						"max-lg:relative lg:absolute right-0 lg:top-10",
						"lg:w-[calc(100%-35rem)] xl:w-[calc(100%-49rem)]",
						"max-lg:order-first",
					)}
				>
					<Image src={image} alt={`${title} recipe image`} fill />
				</aside>
			</div>
		</Container>
	</section>
)
