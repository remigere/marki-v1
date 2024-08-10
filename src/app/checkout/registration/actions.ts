"use server"

import { revalidatePath } from "next/cache"
import { createClient } from "../../../../utils/supabase/server"
import { createCustomer } from "@/libs/stripe/create-customer"
import { Response } from "@/core/shared/response.type"
import { redirect } from "next/navigation"

export async function signup(
	_: any,
	formData: FormData,
): Promise<Response<void>> {
	const supabase = createClient()

	const data = {
		email: formData.get("email") as string,
		password: formData.get("password") as string,
	}

	const {
		error,
		data: { user },
	} = await supabase.auth.signUp(data)

	if (error || !user)
		return {
			ok: false,
			code: error?.code || "signup-failed",
			message: error?.message || "Signup failed",
		}

	const createCustomerResponse = await createCustomer({
		email: data.email,
	})

	if (!createCustomerResponse.ok) return createCustomerResponse

	const { error: createCustomerError } = await supabase
		.from("customer")
		.insert([
			{
				customer_id: createCustomerResponse.data.id,
				user_id: user.id,
			},
		])
		.select()

	if (createCustomerError)
		return {
			ok: false,
			code: createCustomerError.code,
			message: createCustomerError.message,
		}

	const redirectToStripePayment =
		formData.get("redirectToStripePayment") === "true"

	revalidatePath("/checkout/registration", "layout")
	redirect(
		`/checkout/registration${redirectToStripePayment ? "?redirectToStripePayment=true" : ""}`,
	)
}
