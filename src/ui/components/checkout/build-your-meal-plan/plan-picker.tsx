import { Icon, IconName } from "@/design-system/icons"
import { Typography } from "@/design-system/typography"
import { twMerge } from "tailwind-merge"

type Plan = {
	icon: IconName
	title: string
	description: string
	comingSoon?: boolean
	isSelected?: boolean
}

const PLANS: Plan[] = [
	{
		icon: "plant",
		title: "The Blueprint Protocol",
		description:
			"Bryan Johnson consumes three meals daily: Super Veggie, Nutty Pudding, and a third meal chosen from ten protocol options.",
		isSelected: true,
	},
	{
		icon: "flash",
		title: "The Foodie Experience",
		description:
			"Choose from six nutritious meals meticulously crafted by Marki, inspired by the dietary approach of Brian Johnson.",
		comingSoon: true,
	},
	{
		icon: "shopping-basket-fill",
		title: "A la carte",
		description: "Choose from the available meal selections.",
		comingSoon: true,
	},
]

export const PlanPicker = () => {
	return (
		<section className="space-y-4 py-6 sm:py-11 px-4 sm:px-12 border-b border-alto-200">
			<Typography as={"h2"} variant={"h3"}>
				Select your nutritional lifestyle that best suits you
			</Typography>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4">
				{PLANS.map(
					(
						{ description, icon, title, comingSoon, isSelected },
						i,
					) => (
						<button
							key={i}
							className={twMerge(
								"border-2 border-alto-200",
								"text-left flex flex-col",
								"transition-all duration-150 group",
								"p-5 rounded-md",
								isSelected && "border-red-600",
								!comingSoon && "hover:border-red-600",
								"disabled:opacity-50 disabled:border-alto-200 disabled:text-chicago-600 disabled:relative",
							)}
							disabled={comingSoon}
						>
							{comingSoon && (
								<div className="absolute top-0 left-0 w-full h-full bg-alto-200 bg-opacity-50 grid place-items-center rounded-md">
									<Typography
										variant={"h4"}
										className="text-cod-gray-950"
									>
										Coming soon
									</Typography>
								</div>
							)}
							<div
								className={twMerge(
									"rounded-full text-tory-blue-800 bg-zumthor-50 w-11 h-11 mb-5 grid place-items-center max-sm:hidden",
									!comingSoon &&
										"group-hover:text-red-600 group-hover:bg-red-50 transition-all duration-150",
									isSelected && "text-red-600 bg-red-50",
								)}
							>
								<Icon name={icon} size={24} />
							</div>
							<Typography
								as={"div"}
								variant={"h5"}
								className="mb-2"
							>
								{title}
							</Typography>
							<Typography
								variant={"body2"}
								className="text-chicago-600"
							>
								{description}
							</Typography>
						</button>
					),
				)}
			</div>
		</section>
	)
}
