import { Icon, IconName } from "@/design-system/icons"
import { SSOButton } from "@/design-system/sso/sso-button"

const SSO_TYPES: IconName[] = ["google", "apple", "facebook"]

export const SSOList = () => (
	<div className="flex space-x-3 justify-center">
		{SSO_TYPES.map((type) => (
			<SSOButton key={type} aria-label={`Sign up with ${type}`}>
				<Icon name={type} />
			</SSOButton>
		))}
	</div>
)
