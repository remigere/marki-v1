import { NextPage } from "next";
import { createClient } from "../../../utils/supabase/server";
import { LoginLayout } from "@/ui/components/login/login-layout";

const Login: NextPage<{ searchParams: { signInError?: string; signUpError?: string } }> = async ({ searchParams }) => {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  
  return <LoginLayout searchParams={searchParams} />;
};

export default Login;
