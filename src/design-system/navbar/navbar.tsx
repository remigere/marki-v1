import { Container } from "@/design-system/container"
import { LaunchBanner } from "@/design-system/launch-banner"
import { Image } from "@/design-system/image"
import { Link } from "@/design-system/link"
import { LoginAndGetStartedButtons } from "@/design-system/navbar/login-and-get-started-buttons"
import { MobileMenuTriggerButton } from "@/design-system/navbar/mobile-menu-trigger-button"
import { Links } from "@/design-system/navbar/links"
import { createClient } from "@supabase/supabase-js"
import { signOut } from "@/app/login/actions"

export const Navbar = () => (
	<div className="sticky w-full z-20 top-0 start-0">
		<LaunchBanner />
		<nav className="border-b border-[#00000020] bg-white h-16 md:h-20">
			<Container className="py-3 flex justify-between items-center h-full relative">
				<Link
					className="h-6 lg:h-[calc(100%-1.5rem)] aspect-[329/72] relative"
					href="/"
				>
					<Image
						src={"/img/marki_logo.png"}
						alt="Marki logo"
						fill
						sizes="(max-width: 768px) 110px, 140px"
					/>
				</Link>

				<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
					<LoginAndGetStartedButtons />
					<MobileMenuTriggerButton />
				</div>
				<Links />
			</Container>
		</nav>
	</div>
)
