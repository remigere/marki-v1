import { BryanJohnsonProtocol } from "@/ui/components/checkout/build-your-meal-plan/bryan-johnson-protocol/bryan-johnson-protocol"
import { DaysAmountPicker } from "@/ui/components/checkout/build-your-meal-plan/days-amount-picker"
import { OrderSummary } from "@/ui/components/checkout/build-your-meal-plan/order-summary"
import { PlanPicker } from "@/ui/components/checkout/build-your-meal-plan/plan-picker"
import { Layout } from "@/ui/components/checkout/build-your-meal-plan/layout"
import { Steps } from "@/ui/components/checkout/steps"
import { Features } from "@/ui/components/homepage/features/features"
import { Testimonials } from "@/ui/components/homepage/testimonials/testimonials"
import { NextPage } from "next"
import { ReviewWeeklyMenu } from "@/ui/components/checkout/build-your-meal-plan/review-weekly-menu"
import Link from "next/link"

const BuildYourMealPlan: NextPage = () => (
	<main>
		<Steps />
		<Layout title="Build your meal plan" asideChildren={<OrderSummary />}>
			<PlanPicker />
			<DaysAmountPicker />
			<BryanJohnsonProtocol />
			{/* <div className="mt-4 pb-4 text-center">
				<Link href="/checkout/delivery-address"
					className="inline-block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors">
						Proceed to Delivery Address
					
				</Link>
			</div> */}
		</Layout>
		<Features />
		<ReviewWeeklyMenu />
		<Testimonials />
	</main>
)

export default BuildYourMealPlan
