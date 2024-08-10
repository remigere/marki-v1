import { Hero } from "@/ui/components/menupage/hero"
import { MenuList } from "@/ui/components/menupage/menu-list/menu-list"
import { Standards } from "@/ui/components/menupage/standards"
import { NextPage } from "next"

const MenuPage: NextPage = () => (
	<>
		<Hero />
		<MenuList />
		<Standards />
	</>
)

export default MenuPage
