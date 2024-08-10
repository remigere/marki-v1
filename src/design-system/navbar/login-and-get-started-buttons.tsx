import { createClient } from "../../../utils/supabase/server";
import { MainButtons } from "@/design-system/navbar/main-button";
import { Avatar, AvatarFallback } from "@/design-system/avatar";
import SignOutButton from "./signout-button";
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/design-system/dropdown";
import { redirect } from "next/navigation";

export const LoginAndGetStartedButtons = async () => {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  let initials = '';
  if (user) {
    const emailParts = user.email?.split(' ') || [];
    initials = emailParts.length > 1 ? `${emailParts[0][0].toUpperCase()}${emailParts[1][0].toUpperCase()}` : emailParts[0][0].toUpperCase();
  }

  return (
    <div className="flex items-center justify-center py-4 space-x-2 md:space-x-4">
      {!user ? (
        <MainButtons />
      ) : (
        <>
          <div className="hidden md:flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link href="/dashboard" passHref>
                  <Avatar className="border-2 border-gray-600 rounded-full p-1 bg-slate-300 cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold">
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <Link href="/dashboard">
                  <DropdownMenuItem>Dashboard</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
            <SignOutButton />
          </div>
          <div className="md:hidden">
            <MainButtons />
          </div>
        </>
      )}
    </div>
  );
};
