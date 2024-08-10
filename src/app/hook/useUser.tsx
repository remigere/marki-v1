"use client";
import { createClient } from "@/../../utils/supabase/server";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const initUser = {
	created_at: "",
	display_name: "",
	email: "",
	id: "",
	image_url: "",
	subscription: {
		created_at: "",
		customer_id: "",
		email: "",
		end_at: "",
		subscription_id: "",
	},
};

export default function useUser() {
	return useQuery({
		queryKey: ["user"],
		queryFn: async () => {
			const supabase = createClient();
			const { data } = await supabase.auth.getSession();
            console.log(data)
			if (data.session?.user) {
				// fetch user information profile
				const { data: user } = await supabase
					.from("profiles")
					.select("*,subscription(*)")
					.eq("id", data.session.user.id)
					.single();

				return user;
			}
			return initUser;
		},
	});
}