import { Button } from "@/design-system/button"
import { Input } from "@/design-system/input"
import { Textarea } from "@/design-system/textarea"

export const ContactForm = () => {
	return (
		<form className="w-full space-y-6">
			<Input
				name="name"
				type="text"
				placeholder="Your name"
				required
				className="w-full"
			/>
			<Input
				name="email"
				type="email"
				placeholder="Email"
				required
				className="w-full"
			/>
			<Input
				name="subject"
				type="text"
				placeholder="Subject"
				required
				className="w-full"
			/>
			<Textarea
				name="message"
				placeholder="Message"
				required
				className="w-full"
				rows={4}
			/>
			<Button type="submit">Submit</Button>
		</form>
	)
}
