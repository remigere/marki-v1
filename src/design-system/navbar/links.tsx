"use client"

import { useNavbarStore } from "@/libs/zustand/navbar.store"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

export const Links = () => {
	const isMenuOpen = useNavbarStore((state) => state.isOpen)
	const updateIsOpen = useNavbarStore((state) => state.updateIsOpen)

	const closeMenu = () => {
		updateIsOpen(false)
	}

	return (
		<div
			className={twMerge(
				"items-center justify-between w-full bg-white",
				"md:flex md:w-auto md:order-1",
				"max-md:absolute left-0 -bottom-[1px] max-md:translate-y-full max-md:border-b border-[#00000020] overflow-hidden",
				isMenuOpen
					? "max-h-dvh opacity-100 transition-all duration-150 touch-none"
					: "max-md:max-h-0 max-md:opacity-0 transition-all duration-150",
			)}
		>
			<ul
				className={twMerge(
					"flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-5 lg:space-x-10 xl:space-x-14 rtl:space-x-reverse md:flex-row md:mt-0",
					"max-md:justify-center items-center max-md:mt-0 max-md:space-y-4",
				)}
			>
				<li>
					<Link
						href="/menu"
						className="hover:opacity-60 transition-all duration-150"
						onClick={closeMenu}
					>
						Menu
					</Link>
				</li>
				<li>
					<Link
						href="/about-us"
						className="hover:opacity-60 transition-all duration-150"
						onClick={closeMenu}
					>
						About us
					</Link>
				</li>
				<li>
					<Link
						href="/resources"
						className="hover:opacity-60 transition-all duration-150"
						onClick={closeMenu}
					>
						Resources
					</Link>
				</li>
				<li>
					<Link
						href="/alpha-program"
						className="hover:opacity-60 transition-all duration-150"
						onClick={closeMenu}
					>
						Alpha program
					</Link>
				</li>
			</ul>
		</div>
	)
}
