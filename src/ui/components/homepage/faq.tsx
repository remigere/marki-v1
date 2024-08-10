"use client"

import { Link } from "@/design-system/link"
import { Container } from "@/design-system/container"
import {
	AccordionContent,
	AccordionItem,
	AccordionRoot,
	AccordionTrigger,
} from "@/design-system/accordion"
import { Typography } from "@/design-system/typography"
import { twMerge } from "tailwind-merge"

const QUESTIONS: { question: React.ReactNode; answer: React.ReactNode }[] = [
	{
		question: "What date and time is my meal going to be delivered?",
		answer: (
			<Typography variant={"body2"}>
				Marki gives you the option to set your own delivery dates. We
				deliver meals Monday to Friday in the afternoons. To ensure the
				highest quality of your meals, orders of more than six meals per
				week are spread out across two deliveries per week to maintain
				freshness.
			</Typography>
		),
	},
	{
		question: "Can I change the date of my delivery?",
		answer: (
			<Typography variant={"body2"}>
				Yes, changing the date is simple. Just email us{" "}
				<a href="mailto:info@joinmarki.com" className="underline">
					info@joinmarki.com
				</a>{" "}
				or text{" "}
				<a href="tel:650-666-9413" className="underline">
					650-666-9413
				</a>
				.
			</Typography>
		),
	},
	{
		question: "How many deliveries will I receive each week?",
		answer: (
			<Typography variant={"body2"}>
				The quantity of meals you order will determine the frequency of
				your deliveries. Orders of one to five meals will be delivered
				once per week. Orders of over six meals will be delivered across
				two days during the week to maintain freshness.
			</Typography>
		),
	},
	{
		question: "What is the price of the meal plan?",
		answer: (
			<Typography variant={"body2"}>
				Meal plan pricing varies based on a number of factors including
				quantity, add-ons, and promotional discounts. Most Marki clients
				will start with a simple meal plan of three days per week rather
				than the typical five days a week for our repeat clients. The
				three-day-per-week plan is a great way to test the waters. For
				example, if you’re interested in the Blueprint Protocol, you may
				want to order the daily recommendations of Nutty Pudding and
				Super Veggies three days per week (6 meals total). The cost for
				that basic plan is approximately $100 per week.
			</Typography>
		),
	},
	{
		question: "Are your containers microwaveable?",
		answer: (
			<Typography variant={"body2"}>
				For convenience, you will have the option to receive your meals
				in microwaveable, compostable containers. At Marki, we are doing
				our part to minimize impact on the climate by using sustainable
				and BPA-free packaging.
			</Typography>
		),
	},
	{
		question: "How much can I customize my meals?",
		answer: (
			<>
				<Typography variant={"body2"}>
					Marki is a technology company that is developing a service
					to help clients customize their meal plans specifically for
					the improvement of their biomarkers. This, in turn, is
					intended to improve health and longevity.
				</Typography>
				<Typography variant={"body2"}>
					The technology is currently under development. If you’re
					interested in testing out our early development process,
					please{" "}
					<Link href={"/alpha-program"} className="underline">
						sign up for our Alpha program
					</Link>
					. Our cohorts are limited and we will do our best to
					accommodate you.
				</Typography>
			</>
		),
	},
	{
		question: "Are the meals organic?",
		answer: (
			<Typography variant={"body2"}>
				Yes, the meals are organic.
			</Typography>
		),
	},
	{
		question: "Do you use sustainable packaging?",
		answer: (
			<Typography variant={"body2"}>
				We are continuously exploring ways to deliver our meals as
				sustainably as possible. Currently, we have compostable,
				microwaveable packaging. We will also be using plastic seals in
				order to preserve meals longer for freshness.
			</Typography>
		),
	},
	{
		question: "Will your meals help me lose weight?",
		answer: (
			<>
				<Typography variant={"body2"}>
					While weight is an important variable for many of our
					clients, our long-term focus is on the improvements of your
					biomarkers. Our science-based meals are designed to promote
					better health and longevity. You may feel a huge improvement
					in mood and overall quality of life without shedding a
					single pound.
				</Typography>
				<Typography variant={"body2"}>
					That said, should weight loss be a key goal, fitness is a
					critical facet that, combined with our protocols, may have a
					significant impact on your goals. It is not necessarily the
					case, however, that you will lose weight only by improving
					your nutrition.
				</Typography>
				<Typography variant={"body2"}>
					Our Alpha program is designed to respond to your specific
					biomarkers and health goals. Through the Alpha, we may be
					able to help you with your weight loss goals. If you’re
					interested in the program,{" "}
					<Link href="/alpha-program" className="underline">
						sign up today
					</Link>{" "}
					to join a future cohort!
				</Typography>
			</>
		),
	},
	{
		question: "Do you accommodate allergies?",
		answer: (
			<Typography variant={"body2"}>
				At this time we do not accommodate allergies due to complexity.
				We do our very best to provide a variety of meals, and will
				continue to expand our menu to give you many delicious - and,
				hopefully, allergy-free - options to choose from.
			</Typography>
		),
	},
	{
		question: "What are the nutritional values for each meal?",
		answer: (
			<Typography variant={"body2"}>
				Each meal contains their own nutritional values which can be
				reviewed{" "}
				<Link href="/menu" className="underline">
					on our menu
				</Link>
				.
			</Typography>
		),
	},
	{
		question: "Where are you sourcing your ingredients?",
		answer: (
			<Typography variant={"body2"}>
				Food quality is critical to us. As a startup, we source
				primarily through high-quality grocers such as Whole Foods to
				maintain a high quality of ingredients. However, we have begun
				to source locally from farmers in the CA region and will
				continue to do so over time.
			</Typography>
		),
	},
	{
		question: "Do the meals expire?",
		answer: (
			<Typography variant={"body2"}>
				Nutritional values from food are the highest when they are
				fresh. Since we do not add any preservatives to our meals, they
				will expire three days after delivery.
			</Typography>
		),
	},
	{
		question: "How will I benefit from The Blueprint Protocol?",
		answer: (
			<Typography variant={"body2"}>
				The Blueprint Protocol is a science-based framework that
				promotes longevity. Please read our thorough{" "}
				<Link
					href={"/article/the-blueprint-protocol"}
					className="underline"
				>
					summary of the program
				</Link>
				.
			</Typography>
		),
	},
	{
		question: "What is the Alpha program?",
		answer: (
			<Typography variant={"body2"}>
				The Alpha program is our marquee nutritional technology that we
				are developing through testing of our cohorts. Through blood
				testing, it is intended to deliver nutritional guidance specific
				to your biomarkers that Marki can then deliver to your door. For
				more information, and to sign up for a future cohort, please{" "}
				<Link href="/alpha-program" className="underline">
					check out our Alpha program page
				</Link>
				.
			</Typography>
		),
	},
	{
		question:
			"What is the difference between your Alpha program and The Blueprint Protocol?",
		answer: (
			<>
				<Typography variant={"body2"}>
					The Blueprint Protocol was developed by Bryan Johnson over
					one year and $2-3M of testing with a team of researchers.
					His protocol was developed specifically in response to his
					biomarkers that was then extrapolated to develop a framework
					that could offer guidance to many people.
				</Typography>
				<Typography variant={"body2"}>
					The Marki Alpha program is intended to customize a
					nutritional program based on your specific biomarkers; not
					generalized for many people.
				</Typography>
			</>
		),
	},
	{
		question: "How does Marki help me with The Blueprint Protocol?",
		answer: (
			<Typography variant={"body2"}>
				Marki offers all of the meals for delivery that are recommended
				by the Blueprint.
			</Typography>
		),
	},
	{
		question: "Can I buy a gift card or gift meals to someone else?",
		answer: (
			<Typography variant={"body2"}>
				As an early-stage startup, we have not yet set up gift cards or
				meal gifting just yet. Please check back as we plan to add these
				features over the summer.
			</Typography>
		),
	},
	{
		question: "What is your return policy?",
		answer: (
			<Typography variant={"body2"}>
				We have a 7-day money-back guarantee.
			</Typography>
		),
	},
]

type Props = {
	className?: string
}

export const FAQ = ({ className }: Props) => {
	return (
		<section className={twMerge("bg-white py-10 sm:py-24", className)}>
			<Container className="grid md:grid-cols-3 gap-5 md:gap-24">
				<section className="space-y-6 md:col-span-1">
					<Typography as={"h2"}>Frequently Asked Question</Typography>
					<Typography>
						Got questions? We probably have the answer! If you don’t
						find what you’re looking for in our FAQ, please don’t
						hesitate to{" "}
						<Link
							href="/contact"
							className="text-red-600 underline"
						>
							contact us
						</Link>
						. We’d love to hear from you.
					</Typography>
				</section>

				<section className="md:col-span-2">
					<AccordionRoot type="single" defaultValue="0" collapsible>
						{QUESTIONS.map(({ question, answer }, i) => (
							<AccordionItem value={`${i}`} key={i}>
								<AccordionTrigger>{question}</AccordionTrigger>
								<AccordionContent>{answer}</AccordionContent>
							</AccordionItem>
						))}
					</AccordionRoot>
				</section>
			</Container>
		</section>
	)
}
