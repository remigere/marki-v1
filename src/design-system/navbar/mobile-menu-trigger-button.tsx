"use client"

import { Icon } from "@/design-system/icons"
import { useNavbarStore } from "@/libs/zustand/navbar.store"

export const MobileMenuTriggerButton = () => {
	const isMenuOpen = useNavbarStore((state) => state.isOpen)
	const updateIsOpen = useNavbarStore((state) => state.updateIsOpen)

	return (
		<button className="md:hidden z-40" onClick={() => updateIsOpen(!isMenuOpen)}>
			<span className="sr-only z-50">Open main menu</span>
			{isMenuOpen ? (
				<Icon name="close" size={32} />
			) : (
				<Icon name="menu" size={32} />
			)}
		</button>
	)
}
