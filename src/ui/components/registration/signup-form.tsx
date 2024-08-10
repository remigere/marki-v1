"use client"

import { Button } from "@/design-system/button"
import { Input } from "@/design-system/input"
import { Link } from "@/design-system/link"
import { Typography } from "@/design-system/typography"
// import { signup } from "@/app/signup/actions"
import { useSearchParams } from "next/navigation"

export const SignupForm = () => {
    const params = useSearchParams()
    const hasRedirectToStripePaymentParam = params.has(
        "redirectToStripePayment",
    )

    return (
        <div className="space-y-6 sm:space-y-8 max-md:w-full lg:w-[30rem]">
            <form className="space-y-6 sm:space-y-8">
                <div className="space-y-6">
                    <Input
                        icon="user"
                        iconClassName="text-cod-gray-950"
                        iconPosition="left"
                        name="username"
                        placeholder="Username"
                        required
                        type="text"
                    />
                    <Input
                        icon="email"
                        iconClassName="text-cod-gray-950"
                        iconPosition="left"
                        name="email"
                        placeholder="Email Address"
                        required
                        type="email"
                    />
                    <Input
                        className="w-full"
                        icon="lock"
                        iconClassName="text-cod-gray-950"
                        iconPosition="left"
                        name="password"
                        placeholder="Password"
                        required
                        type="password"
                        minLength={6}
                    />
                    <Input
                        className="w-full"
                        icon="lock"
                        iconClassName="text-cod-gray-950"
                        iconPosition="left"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                        type="password"
                        minLength={6}
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
                    Sign Up
                </Button>
            </form>

            {/* <Typography
                variant={"body2"}
                className="text-center text-boulder-400"
            >
                or sign up with
            </Typography>

            <SSOList /> */}

            <Link
                href={`/checkout/build-your-meal-plan${hasRedirectToStripePaymentParam ? "?redirectToStripePayment=true" : ""}`}
                className="block text-center hover:opacity-60 transition-all duration-150"
            >
                <Typography variant={"body2"} as={"span"}>
                    Already have an account?{" "}
                    <span className="text-red-600">Log in</span>
                </Typography>
            </Link>
        </div>
    )
}
