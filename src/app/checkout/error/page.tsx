import { Banner } from "@/ui/components/checkout/confirmation/banner"
import { Referral } from "@/ui/components/checkout/confirmation/referral"
import { Steps } from "@/ui/components/checkout/steps"
import { NextPage } from "next"
import { ErrorCard } from "@/ui/components/checkout/error/error-card"

const PickMeals: NextPage = () => (
	<main>
		<Steps />
		<Banner />
		<ErrorCard />
		<Referral />
	</main>
)

export default PickMeals
