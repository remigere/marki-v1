import { ContactInformations } from "@/ui/components/about-us/contact-informations"
import { Hero } from "@/ui/components/about-us/hero"
import { MeetTheTeam } from "@/ui/components/about-us/meet-the-team"
import { OurStory } from "@/ui/components/about-us/our-story"
import { Vision } from "@/ui/components/about-us/vision"
import { Testimonials } from "@/ui/components/homepage/testimonials/testimonials"
import { NextPage } from "next"

const AboutUs: NextPage = () => {
	return (
		<>
			<Hero />
			<Vision />
			<OurStory />
			<MeetTheTeam />
			<Testimonials />
			<ContactInformations />
		</>
	)
}

export default AboutUs
