import { Hero } from "@/ui/components/resources/hero"
import { News } from "@/ui/components/resources/news"
import { Recipes } from "@/ui/components/resources/recipes"
import { NextPage } from "next"

const Resources: NextPage = () => (
	
	<>
		<Hero />
		<News />
		<Recipes />
	</>
)

export default Resources
