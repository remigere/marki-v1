import { Button } from "@/design-system/button"
import Link from "next/link"

export const ExtraCta = () => (
	<Button as={Link} href={"/checkout/build-your-meal-plan"}>
		Order Now
	</Button>
)
