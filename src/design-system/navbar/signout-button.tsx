"use client";
import { createClient } from "@/libs/supabase/client";
import { Button } from "@/design-system/button";

const SignOutButton = () => {
  const supabase = createClient();

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        throw new Error(error.message);
      }
      window.location.assign("/login"); // Ensures full page refresh
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return(
    <Button
      className="max-md:hidden mr-2"
      onClick={handleSignOut}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
