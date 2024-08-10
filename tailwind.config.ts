import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/design-system/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				slideDown: "slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
				slideUp: "slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
			},
			keyframes: {
				slideDown: {
					from: { height: "0px" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				slideUp: {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0px" },
				},
			},
			colors: {
				"black-haze": {
					"50": "#f7f7f7",
					"100": "#efefef",
					"200": "#dcdcdc",
					"300": "#bdbdbd",
					"400": "#989898",
					"500": "#7c7c7c",
					"600": "#656565",
					"700": "#525252",
					"800": "#464646",
					"900": "#3d3d3d",
					"950": "#292929",
				},

				"bright-sun": {
					"300": "#fcd739",
				},
				"cod-gray": {
					"50": "#f6f6f6",
					"100": "#e7e7e7",
					"200": "#d1d1d1",
					"300": "#b0b0b0",
					"400": "#888888",
					"500": "#6d6d6d",
					"600": "#5d5d5d",
					"700": "#4f4f4f",
					"800": "#454545",
					"900": "#3d3d3d",
					"950": "#121212",
				},
				chicago: {
					"600": "#5b5b5b",
				},
				boulder: {
					"400": "#7c7c7c",
				},
				pampas: {
					"50": "#f5f2ef",
				},
				alto: {
					"200": "#d9d9d9",
				},
				gallery: {
					"100": "#ebebeb",
				},
				red: {
					"50": "#fff0f1",
					"100": "#ffdee0",
					"200": "#ffc2c5",
					"300": "#ff989e",
					"400": "#ff5d66",
					"500": "#ff2b37",
					"600": "#f70d1a",
					"700": "#d00510",
					"800": "#ac0811",
					"900": "#8e0e15",
					"950": "#4e0105",
				},
				"tory-blue": {
					"800": "#0f52ba",
				},
				"star-dust": {
					"400": "#a3a3a3",
				},
				"resolution-blue": {
					"900": "#172b85",
				},
				salem: {
					"800": "#067a46",
				},
				zumthor: {
					"50": "#e9f2ff",
				},
			},
		},
	},
	plugins: [],
}
export default config
