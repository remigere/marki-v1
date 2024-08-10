import { createClient } from "@/libs/supabase/server"
import { Response } from "@/core/shared/response.type"

export const getCustomerId = async (): Promise<Response<{ customerId: string, email: string }>> => {
	const supabase = createClient()

	const {
		data: { user },
	} = await supabase.auth.getUser()

	if (!user)
		return {
			ok: false,
			code: "user/not-found",
			message: "User not found",
		}

	const { data: customer, error } = await supabase
		.from("customer")
		.select("customer_id")
		.eq("user_id", user.id)
		.single()

	if (error)
		return {
			ok: false,
			code: error.code,
			message: error.message,
		}

	return {
		ok: true,
		data: { customerId: customer.customer_id, email: user.email ?? "" },
	}
}