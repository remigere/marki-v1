"use client"

import { Button } from "@/design-system/button"
import { Input } from "@/design-system/input"
import { Link } from "@/design-system/link"
import { Typography } from "@/design-system/typography"
// import { resetPassword } from "@/app/password-reset/actions"
import { useSearchParams } from "next/navigation"

export const ForgotPasswordForm = () => {
	const params = useSearchParams()
	const hasRedirectToStripePaymentParam = params.has(
		"redirectToStripePayment",
	)

	return (
		<div className="space-y-6 sm:space-y-8 max-md:w-full lg:w-[30rem]">
			<form className="space-y-6 sm:space-y-8">
				<div className="space-y-6">
					<Input
						icon="email"
						iconClassName="text-cod-gray-950"
						iconPosition="left"
						name="email"
						placeholder="Email Address"
						required
						type="email"
					/>
				</div>

				<input
					hidden
					name="redirectToStripePayment"
					defaultValue={
						hasRedirectToStripePaymentParam ? "true" : "false"
					}
				/>

				<Button type="submit" className="w-full" >
					Reset Password
				</Button>
			</form>

			<Link
				href={`/login${hasRedirectToStripePaymentParam ? "?redirectToStripePayment=true" : ""}`}
				className="block text-center hover:opacity-60 transition-all duration-150"
			>
				<Typography variant={"body2"} as={"span"}>
					Remembered your password?{" "}
					<span className="text-red-600">Login</span>
				</Typography>
			</Link>
		</div>
	)
}
