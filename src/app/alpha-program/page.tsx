import { Benefits } from "@/ui/components/alpha-program/benefits"
import { Hero } from "@/ui/components/alpha-program/hero"
import { HowItWorks } from "@/ui/components/alpha-program/how-it-works"
import { HowItWorksCta } from "@/ui/components/alpha-program/how-it-works-cta"
import { Program } from "@/ui/components/alpha-program/program"
import { Waitlist } from "@/ui/components/alpha-program/waitlist"
import { FAQ } from "@/ui/components/homepage/faq"
import { Testimonials } from "@/ui/components/homepage/testimonials/testimonials"
import { NextPage } from "next"

const AlphaProgram: NextPage = () => (
	<main>
		<Hero />
		<Program />
		<Benefits />
		<HowItWorks />
		<HowItWorksCta />
		<Testimonials />
		<FAQ className="bg-black-haze-50" />
		<Waitlist />
	</main>
)

export default AlphaProgram
