import { createClient } from "@/libs/supabase/client";
const supabase = createClient();
export const GET = async (request: Request) => {
  try {
    // Refresh the session
    // await refreshSession();

    // Fetch the user's data
    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error("Error fetching user:", error);
      return new Response(JSON.stringify({ error: "Error fetching user" }), {
        status: 500,
      });
    }
    console.log(data)
    return new Response(JSON.stringify(data.user), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response(JSON.stringify({ error: "Error fetching user" }), {
      status: 500,
    });
  }
};