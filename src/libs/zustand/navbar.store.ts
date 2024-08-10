import { NavbarActions, NavbarState } from "@/libs/zustand/navbar"
import { create } from "zustand"

export const useNavbarStore = create<NavbarState & NavbarActions>((set) => ({
	isOpen: false,
	updateIsOpen: (isOpen) => set({ isOpen }),
}))
