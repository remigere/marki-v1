import { Typography } from "@/design-system/typography"

export const LaunchBanner = () => (
	<Typography
		as={"div"}
		variant={"subtitle"}
		className="text-center bg-tory-blue-800 text-white py-3 px-4"
	>
		Launch celebration! Our first 100 new subscribers will receive{" "}
		<span className="text-bright-sun-300 font-black">50% off</span> of the
		first week.
	</Typography>
)
