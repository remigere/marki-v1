"use server"

import { Response } from "@/core/shared/response.type"

const EMAIL_API_URL = process.env.EMAIL_API_URL
const EMAIL_API_TOKEN = process.env.EMAIL_API_TOKEN

export const addOrUpdateNewsletterContact = async (
    _: any,
    formData: FormData,
): Promise<Response<any>> => {
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
                            value: "Waitlist",
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
        console.log(data)

        // Extract the contact ID from the response
        const contactId = data.contact.id;

        // Prepare the body for the next API call
        const contactListBody = {
            contactList: {
                list: 2,
                contact: contactId,
                status: 1
            }
        };

        // Make the second API call
        const contactListResponse = await fetch('https://joinmarki.activehosted.com/api/3/contactLists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Api-Token': EMAIL_API_TOKEN
            },
            body: JSON.stringify(contactListBody)
        });

        if (!contactListResponse.ok) {
            return {
                ok: false,
                code: contactListResponse.status.toString(),
                message: contactListResponse.statusText,
            }
        }

        const contactListData = await contactListResponse.json();

        return {
            ok: true,
            data: {
                syncData: data,
                contactListData: contactListData
            },
        }
    } catch (error) {
        return {
            ok: false,
            code: "email/api-error",
            message: "Error adding or updating waitlist contact",
        }
    }
}
