"use client"

import { Button } from "@/design-system/button"
import { useNavbarStore } from "@/libs/zustand/navbar.store"
import { Sign } from "crypto"
import Link from "next/link"

export const MainButtons = () => {
	const updateIsOpen = useNavbarStore((state) => state.updateIsOpen)

	const closeMenu = () => {
		updateIsOpen(false)
	}


	return (

		<>
			<Button
				as={Link}
				href="/login"
				intent={"ghost"}
				className="max-md:hidden mr-2"
				onClick={closeMenu}
			>
				Login
			</Button>
			<Button
				as={Link}
				href="/checkout/build-your-meal-plan"
				className="max-md:py-3 max-md:px-3"
				onClick={closeMenu}
			>
				Get started
			
			</Button>

			
		</>
	)
}
