import { Features } from "@/ui/components/homepage/features/features"
import { Hero } from "@/ui/components/homepage/hero"
import { NextPage } from "next"
import { FAQ } from "@/ui/components/homepage/faq"
import { Blog } from "@/ui/components/homepage/blog"
import { Meals } from "@/ui/components/homepage/meals/meals"
import { Steps } from "@/ui/components/homepage/steps"
import { AlphaProgram } from "@/ui/components/homepage/alpha-program"
import { AboutUs } from "@/ui/components/homepage/about-us/about-us"
import { Testimonials } from "@/ui/components/homepage/testimonials/testimonials"
import { createClient } from "../../utils/supabase/server"
const HomePage: NextPage = () => {
	return (
		<>
			<Hero />
			<Features />
			<Meals />
			<Steps />
			<AlphaProgram />
			<Testimonials />
			<AboutUs />
			<Blog />
			<FAQ />
		</>
	)
}

export default HomePage
