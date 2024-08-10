"use client"

import { addOrUpdateNewsletterContact } from "@/libs/emails/add-or-update-newsletter-contact"
import { Input } from "@/design-system/input"
import { Button } from "@/design-system/button"
import { Response } from "@/core/shared/response.type"
import { useEffect, useRef } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { toast } from "@/ui/hooks/toast"

const initialState: Response<void> = {
	ok: false,
	code: "",
	message: "",
}

export const NewsletterForm = () => {
	const ref = useRef<HTMLFormElement>(null)

	const [state, formAction] = useFormState(
		addOrUpdateNewsletterContact,
		initialState,
	)
	const { pending } = useFormStatus()

	useEffect(() => {
		if (state.ok) {
			ref.current?.reset()
			toast.success("You've been added to the waitlist!", {
				position: "bottom-right",
			})
		}

		if (!state.ok && state.message) {
			toast.error(state.message, { position: "bottom-right" })
		}
		// @ts-ignore add state.data to reset form when it's successful & new data is available
	}, [state.ok, state.data])

	return (
		<form className="flex flex-col gap-4" ref={ref} action={formAction}>
			<section className="flex flex-col lg:flex-row gap-2.5">
				<Input
					name="email"
					type="email"
					placeholder="Email address"
					required
					parentClassName="w-full"
					className="w-full"
					icon="email"
					iconPosition={"left"}
				/>

				<Button
					type="submit"
					className="w-full lg:w-fit"
					disabled={pending}
				>
					Join the waitlist
				</Button>
			</section>

			<section className="flex items-baseline gap-2.5">
				{/* @TODO: create Checkbox design-system component */}
				<input
					type="checkbox"
					id="terms"
					className="hover:cursor-pointer"
					required
				/>
				{/* @TODO: create Label design-system component */}
				<label
					htmlFor="terms"
					className="text-white hover:cursor-pointer text-xs lg:text-base"
				>
					I agree to receive SMS messages and have read the Privacy
					Policy.
				</label>
			</section>

			<p className="text-boulder-400 text-sm lg:text-base">
				*You can unsubscribe at any time.
			</p>
		</form>
	)
}
