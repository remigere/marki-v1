import { Banner } from "@/ui/components/checkout/confirmation/banner"
import { Referral } from "@/ui/components/checkout/confirmation/referral"
import { SuccessCard } from "@/ui/components/checkout/confirmation/success-card"
import { Steps } from "@/ui/components/checkout/steps"
import { NextPage } from "next"

const PickMeals: NextPage = () => (
	<main>
		<Steps />
		<Banner />
		<SuccessCard />
		<Referral />
	</main>
)

export default PickMeals
