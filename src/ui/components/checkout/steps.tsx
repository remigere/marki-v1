"use client"

import { useEffect, useState } from "react";
import { Icon, IconName } from "@/design-system/icons"
import { Link } from "@/design-system/link"
import { Typography } from "@/design-system/typography"
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge"
import { createClient } from "@supabase/supabase-js"

// Initialize Supabase client
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL ?? '', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '')

type Step = {
  icon: IconName
  title: string
  href: string
}
// const supabase = createClient();
  let initials = '';
const STEPS: Step[] = [
  {
    href: "/checkout/build-your-meal-plan",
    icon: "list-check",
    title: "Build meal plan",
  },
  {
    href: "/signup",
    icon: "user",
    title: "Registration",
  },
  {
    href: "/checkout/delivery-address",
    icon: "delivery",
    title: "Delivery address",
  },
  {
    href: "/checkout/payment-form",
    icon: "credit-card",
    title: "Payment",
  },
  {
    href: "/checkout/pick-meals",
    icon: "cutlery",
    title: "Order Confirmation",
  },
]

export const Steps = () => {
  const pathname = usePathname()
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setIsAuthenticated(!!session)
    }
	console.log()
console.log(isAuthenticated)
    checkAuth()
  }, [])

  if (isAuthenticated === null) {
    return null // or a loading spinner
  }

  // Filter steps to exclude the "Registration" step if the user is authenticated
  const filteredSteps = isAuthenticated
    ? STEPS.filter(step => step.href !== "/signup")
    : STEPS

  return (
    <nav className="py-2 sm:py-6 flex gap-2 sm:gap-4 md:gap-2 lg:gap-4 flex-wrap justify-center items-center bg-black-haze-50">
      {filteredSteps.map(({ href, icon, title }, i) => {
        const isActive = pathname === href

        return (
          <div
            key={i}
            className="flex flex-col md:flex-row md:items-center md:gap-2 lg:gap-4 group"
          >
            <Link
              href={href}
              className={twMerge(
                "py-2 px-0.5 flex items-center gap-2 max-md:group-hover:text-red-600 md:hover:text-red-600 transition-all duration-150",
                isActive ? "text-red-600" : "text-chicago-600",
              )}
            >
              <span className="max-lg:hidden">
                <Icon name={icon} size={20} />
              </span>
              <Typography
                as={"span"}
                className="text-[10px] sm:text-base"
              >
                {title}
              </Typography>
            </Link>
            <div
              className={twMerge(
                "w-full rounded-full h-[3px] md:w-8 lg:w-14 max-md:group-hover:bg-red-600 transition-all duration-150 bg-alto-200",
                isActive && "max-md:bg-red-600",
                href === filteredSteps[filteredSteps.length - 1].href &&
                  "md:hidden",
              )}
            ></div>
          </div>
        )
      })}
    </nav>
  )
}
