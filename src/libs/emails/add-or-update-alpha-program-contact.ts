"use server"

import { Response } from "@/core/shared/response.type"

const EMAIL_API_URL = process.env.EMAIL_API_URL
const EMAIL_API_TOKEN = process.env.EMAIL_API_TOKEN

export const addOrUpdateAlphaProgramContact = async (
	_: Response<void>,
	formData: FormData,
): Promise<Response<void>> => {
	try {
		if (!EMAIL_API_URL)
			return {
				ok: false,
				code: "email/api-url-not-set",
				message: "EMAIL_API_URL env var is not set",
			}

		if (!EMAIL_API_TOKEN)
			return {
				ok: false,
				code: "email/api-key-not-set",
				message: "EMAIL_API_KEY env var is not set",
			}

		const email = formData.get("email") as string

		const response = await fetch(`${EMAIL_API_URL}/api/3/contact/sync`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Api-Token": EMAIL_API_TOKEN,
			},
			body: JSON.stringify({
				contact: {
					email,
					fieldValues: [
						{
							field: "1",
							value: "Alpha",
						},
					],
				},
			}),
		})

		if (!response.ok) {
			return {
				ok: false,
				code: response.status.toString(),
				message: response.statusText,
			}
		}

		const data = await response.json()

		return {
			ok: true,
			data,
		}
	} catch (error) {
		return {
			ok: false,
			code: "email/api-error",
			message: "Error adding or updating alpha program contact",
		}
	}
}
