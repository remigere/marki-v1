import { Newsletter } from "@/design-system/footer/newsletter"
import { Links } from "@/design-system/footer/links"
import { Copyrights } from "@/design-system/footer/copyrights"

export const Footer = () => {
	return (
		<footer className="bg-black">
			<Newsletter />

			<Links />

			<Copyrights />
		</footer>
	)
}
