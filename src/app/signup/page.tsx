import { NextPage } from "next";
import { createClient } from "../../../utils/supabase/server";
// import { LoginLayout } from "@/ui/components/login/login-layout";
import { RegistrationLayout } from "@/ui/components/checkout/registration/registration-layout";
import Registration from "../checkout/registration/page";
const register: NextPage<{ searchParams: { signInError?: string; signUpError?: string } }> = async ({ searchParams }) => {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  
  return <RegistrationLayout searchParams={searchParams} />;
};

export default register;
