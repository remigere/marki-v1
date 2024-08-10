import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "../../../utils/supabase/server";
import OAuthSignIn from "@/app/login/oauth-signin";
import { SubmitButton } from "@/ui/components/login/submit-button";

interface SearchParams {
	signInError?: string;
	signUpError?: string;
}

export default async function RegisterForm({
	searchParams,
}: {
	searchParams: SearchParams;
}) {
	const supabase = createClient();
	const { data: { session } } = await supabase.auth.getSession();

	if (session) {
		return redirect("/");
	}
	const signUp = async (formData: FormData) => {
		"use server";
	
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const supabase = createClient();
	
		const { error } = await supabase.auth.signUp({
		  email,
		  password,
		});
	
		if (error) {
		  const searchParams = new URLSearchParams({ signUpError: error.message });
		  return redirect(`/signup?${searchParams.toString()}`);
		}
	
		// Handle additional signup logic directly in the Server Action
		try {
		  const contactData: { [key: string]: any } = {
			email: email,
		  };
	
		  // Create the contact
		  const contactResponse = await fetch('https://joinmarki.api-us1.com/api/3/contacts', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			  'Api-Token': process.env.API_TOKEN as string,
			},
			body: JSON.stringify({ contact: contactData }),
		  });
		  const contactResult = await contactResponse.json();
	
		  if (!contactResponse.ok) {
			throw new Error(contactResult.message || 'Failed to create contact');
		  }
	
		  const contactId = contactResult.contact.id;
	
		  // Add the contact to a list
		  const listResponse = await fetch('https://joinmarki.api-us1.com/api/3/contactLists', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			  'Api-Token': process.env.API_TOKEN as string,
			},
			body: JSON.stringify({
			  contactList: {
				list: 4,
				contact: contactId,
				status: 1,
			  },
			}),
		  });
	
		  if (!listResponse.ok) {
			const listResult = await listResponse.json();
			throw new Error(listResult.message || 'Failed to add contact to list');
		  }
	
		  return redirect("/");
		} catch (error) {
		  console.error('Error during signup process:', error);
		  const searchParams = new URLSearchParams({ signUpError: (error as Error).message });
		  return redirect(`/signup?${searchParams.toString()}`);
		}
	  };
	

	return (
		<>
			<div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
				<Link
					href="/"
					className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
					>
						<polyline points="15 18 9 12 15 6" />
					</svg>{" "}
					Back
				</Link>

				<form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
					<label className="text-md" htmlFor="email">
						Email
					</label>
					<input
						className="rounded-md px-4 py-2 bg-inherit border mb-2"
						type="email"
						name="email"
						placeholder="you@example.com"
						required
					/>
					
					<label className="text-md" htmlFor="password">
						Password
					</label>
					<input
						className="rounded-md px-4 py-2 bg-inherit border mb-2"
						type="password"
						name="password"
						placeholder="••••••••"
						required
					/>
					{searchParams?.signUpError && (
						<p className="mt-1 text-red-700 text-sm">
							{searchParams.signUpError}
						</p>
					)}
					{searchParams?.signInError && (
						<p className="mt-1 text-red-700 text-sm">
							{searchParams.signInError}
						</p>
					)}
					<SubmitButton
            formAction={signUp}
            className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
            pendingText="Signing Up..."
          >
            Sign Up
          </SubmitButton>
					
				</form>
				<OAuthSignIn />
			</div>
		</>
	);
}
// export default RegisterForm;
