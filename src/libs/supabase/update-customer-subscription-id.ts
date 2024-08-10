"use server"

import { createClient } from "@/libs/supabase/server"

export const updateCustomerSubscriptionId = async ({
	customerId,
	subscriptionId,
}: {
	customerId: string
	subscriptionId: string
}) => {
	const supabase = createClient()

	const { data, error } = await supabase
		.from("customer")
		.update({
			subscription_id: subscriptionId,
		})
		.eq("customer_id", customerId)
		.select()

	if (error) {
		return {
			ok: false,
			code: error.code,
			message: error.message,
		}
	}

	return {
		ok: true,
		data,
	}
}
