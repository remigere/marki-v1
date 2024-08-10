import { Steps } from "@/ui/components/checkout/steps"
import { createClient } from "../../../../utils/supabase/server"
import { NextPage } from "next"
import { RegistrationLayout } from "@/ui/components/checkout/registration/registration-layout"
import { Features } from "@/ui/components/homepage/features/features"
import { Testimonials } from "@/ui/components/homepage/testimonials/testimonials"
import { RedirectToStripePayment } from "@/ui/components/checkout/registration/redirect-to-stripe-payment"

const Registration: NextPage<{ searchParams: { signInError?: string; signUpError?: string } }> = async ({ searchParams }) => {
	const supabase = createClient()

	const { data } = await supabase.auth.getUser()

	return (
		<RedirectToStripePayment isLoggedIn={!!data.user}>
			<main>
				<Steps />
				<RegistrationLayout searchParams={searchParams} />
				<Features />
				<Testimonials />
			</main>
		</RedirectToStripePayment>
	)
}

export default Registration
