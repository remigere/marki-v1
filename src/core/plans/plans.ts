export type PriceId = `price_${string}`

export type Product = {
	value: number
	label: string
	price: string
	stripePriceId: PriceId
}

export const BLUEPRINT_PROTOCOL_PLAN: Product[] = [
	{
		value: 3,
		label: "3 days",
		price: "$162.00",
		stripePriceId: "price_1PIJMGLeyRdQmS5nPsHLIyda",
	},
	{
		value: 4,
		label: "4 days",
		price: "$216.00",
		stripePriceId: "price_1PIJOeLeyRdQmS5nNTrWhiME",
	},
	{
		value: 5,
		label: "5 days",
		price: "$270.00",
		stripePriceId: "price_1PIJQOLeyRdQmS5nTngqt8y6",
	},
	{
		value: 6,
		label: "6 days",
		price: "$324.00",
		stripePriceId: "price_1PIJS2LeyRdQmS5nVU9OXVVp",
	},
	{
		value: 7,
		label: "7 days",
		price: "$378.00",
		stripePriceId: "price_1PIJTpLeyRdQmS5nxjeE312o",
	},
]