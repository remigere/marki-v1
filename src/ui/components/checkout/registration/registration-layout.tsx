import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import RegisterForm from "@/ui/components/register-form"
import Link from "next/link"

interface SearchParams {
  signInError?: string;
  signUpError?: string;
}

const loginLink = "/login"

export const RegistrationLayout = ({ searchParams }: { searchParams: SearchParams }) => {
  return (
    <section className="bg-black-haze-50 pt-5 pb-10 sm:py-14">
      <Container>
        <div className="max-w-lg mx-auto">
          <div className="space-y-6 text-center mb-10">
            <Typography as={"h1"} className="text-gray-800 font-bold text-3xl">
              Get Started
            </Typography>
            <Typography className="max-sm:hidden text-gray-600">
              Create an account with Marki
            </Typography>
          </div>
          <div className="space-y-8">
            <RegisterForm searchParams={searchParams} />
            <div className="text-center">
            
              {/* Uncomment the line below to enable SSO */}
              {/* <SSOList /> */}
              <Link
                href={loginLink}
                className="block text-center hover:opacity-60 transition-all duration-150 mt-4"
              >
                <Typography variant={"body2"} as={"span"} className="text-gray-600">
                  Already have an account?{" "}
                  <span className="text-red-600">Login</span>
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
