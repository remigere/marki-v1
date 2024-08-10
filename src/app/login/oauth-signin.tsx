"use client";

import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { Provider } from '@supabase/supabase-js'; // Import the Provider type
import { createSupabaseBrowserClient } from "@/lib/supabase/browser-client";
const supabase = createSupabaseBrowserClient();

export default function OAuthSignIn(props: { nextUrl?: string }) {
  const supabase = createSupabaseBrowserClient();

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${
          props.nextUrl || ""
        }`,
      },
    });
  };
  return (
    <div className='flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2'>
      <button
        onClick={handleLogin} // Cast 'google' to Provider
        className="flex items-center border justify-center gap-2 px-4 py-2 rounded-md text-foreground bg-btn-background hover:bg-btn-background-hover mb-2"
      >
        <FcGoogle size={24} />
        Sign in with Google
      </button>
    </div>
  );
};

