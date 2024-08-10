import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import { ProceedOrderButton } from "@/ui/components/checkout/build-your-meal-plan/proceed-order-button"
import { Separator } from "@radix-ui/react-dropdown-menu"

type Props = {
	title?: string
	children: React.ReactNode
	asideChildren: React.ReactNode
}

export const Layout = ({ title, asideChildren, children }: Props) => (
	<section className="bg-black-haze-50 pt-5 sm:pt-12 sm:pb-24 pb-10">
		<Container className="space-y-6 sm:space-y-10">
			{title && <Typography as={"h1"} className="sm:block">{title}</Typography>}
			<div className="sm:grid sm:grid-cols-3 gap-8">

			<div className="lg:hidden fixed bottom-0 left-0 bg-white w-full p-4 z-20 border-t border-[#00000020]">
					<ProceedOrderButton />
				</div>
			<aside className="sm:col-span-</div>1 w-full h-fit lg:sticky top-36">
					{asideChildren}
				</aside>
				{/* <hr className="pt-2 border-t border-gray-300" /> */}
 
				<div className="sm:col-span-2 bg-white  w-full">{children}</div>

			</div>
		</Container>
	</section>
)