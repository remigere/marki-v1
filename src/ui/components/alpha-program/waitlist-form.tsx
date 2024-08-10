"use client"

import { addOrUpdateAlphaProgramContact } from "@/libs/emails/add-or-update-alpha-program-contact"
import { Input } from "@/design-system/input"
import { Button } from "@/design-system/button"
import { useFormState, useFormStatus } from "react-dom"
import { Response } from "@/core/shared/response.type"
import { useEffect, useRef } from "react"
import { twMerge } from "tailwind-merge"
import { toast } from "@/ui/hooks/toast"

const initialState: Response<void> = {
	ok: false,
	code: "",
	message: "",
}

type Props = {
	className?: string
}

export const WaitlistForm = ({ className }: Props) => {
	const ref = useRef<HTMLFormElement>(null)

	const [state, formAction] = useFormState(
		addOrUpdateAlphaProgramContact,
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
		<>
			<form
				className={twMerge(
					"sm:flex max-sm:space-y-3 sm:space-x-3",
					className,
				)}
				ref={ref}
				action={formAction}
			>
				<Input
					placeholder="Email Address"
					type="email"
					name="email"
					parentClassName="w-full"
					className="w-full"
					required
					icon="email"
					iconPosition="left"
				/>

				<Button
					className="max-sm:w-full"
					type="submit"
					disabled={pending}
				>
					Join the waitlist
				</Button>
			</form>
		</>
	)
}
