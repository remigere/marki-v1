import { Close } from "@/design-system/icons/close"
import { MapPin } from "@/design-system/icons/map-pin"
import { Menu } from "@/design-system/icons/menu"
import { Arrow } from "@/design-system/icons/arrow"
import { DailyMeals } from "@/design-system/icons/daily-meals"
import { Delivered } from "@/design-system/icons/delivered"
import { Science } from "@/design-system/icons/science"
import { Ingredients } from "@/design-system/icons/ingredients"
import { Location } from "@/design-system/icons/location"
import { Subtract } from "@/design-system/icons/substract"
import { Email } from "@/design-system/icons/email"
import { Plus } from "@/design-system/icons/plus"
import { Minus } from "@/design-system/icons/minus"
import { CircleArrowLeft } from "@/design-system/icons/circle-arrow-left"
import { CircleArrowRight } from "@/design-system/icons/circle-arrow-right"
import { LongArrowRight } from "@/design-system/icons/long-arrow-right"
import { Smile } from "@/design-system/icons/smile"
import { MedicoHexagon } from "@/design-system/icons/medico-hexagon"
import { Verified } from "@/design-system/icons/verified"
import { Star } from "@/design-system/icons/star"
import { Bio } from "@/design-system/icons/bio"
import { Energy } from "@/design-system/icons/energy"
import { Innovative } from "@/design-system/icons/innovative"
import { LowCost } from "@/design-system/icons/low-cost"
import { Personal } from "@/design-system/icons/personal"
import { Info } from "@/design-system/icons/info"
import { Eye } from "@/design-system/icons/eye"
import { EyeSlash } from "@/design-system/icons/eye-slash"
import { Lock } from "@/design-system/icons/lock"
import { Google } from "@/design-system/icons/google"
import { Apple } from "@/design-system/icons/apple"
import { Facebook } from "@/design-system/icons/facebook"
import { Chat } from "@/design-system/icons/chat"
import { Share } from "@/design-system/icons/share"
import { Cutlery } from "@/design-system/icons/cutlery"
import { CreditCard } from "@/design-system/icons/credit-card"
import { Delivery } from "@/design-system/icons/delivery"
import { ListCheck } from "@/design-system/icons/list-check"
import { User } from "@/design-system/icons/user"
import { CheckCircle } from "@/design-system/icons/check-circle"
import { ShoppingBasketFill } from "@/design-system/icons/shopping-basket-fill"
import { Plant } from "@/design-system/icons/plant"
import { Flash } from "@/design-system/icons/flash"

const ICONS = {
	apple: Apple,
	arrow: Arrow,
	bio: Bio,
	chat: Chat,
	"check-circle": CheckCircle,
	"circle-arrow-left": CircleArrowLeft,
	"circle-arrow-right": CircleArrowRight,
	close: Close,
	"credit-card": CreditCard,
	cutlery: Cutlery,
	"daily-meals": DailyMeals,
	delivered: Delivered,
	delivery: Delivery,
	energy: Energy,
	eye: Eye,
	"eye-slash": EyeSlash,
	facebook: Facebook,
	flash: Flash,
	google: Google,
	info: Info,
	ingredients: Ingredients,
	innovative: Innovative,
	"list-check": ListCheck,
	"map-pin": MapPin,
	location: Location,
	lock: Lock,
	"long-arrow-right": LongArrowRight,
	"low-cost": LowCost,
	email: Email,
	"medico-hexagon": MedicoHexagon,
	menu: Menu,
	minus: Minus,
	personal: Personal,
	plant: Plant,
	plus: Plus,
	science: Science,
	share: Share,
	"shopping-basket-fill": ShoppingBasketFill,
	smile: Smile,
	star: Star,
	subtract: Subtract,
	user: User,
	verified: Verified,
} as const

export type IconName = keyof typeof ICONS

type Props = {
	name: IconName
	size?: number
}

export const Icon = ({ name, size = 16 }: Props) => {
	const IconComponent = ICONS[name]

	return <IconComponent size={size} />
}
