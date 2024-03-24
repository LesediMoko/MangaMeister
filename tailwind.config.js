/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "media",
	theme: {
		colors: {
			"light-secondary": "#4A0638",
			"light-primary": "#FFFFFF",
			"dark-primary": "#000000",
			"dark-secondary": "#F6F4F1",
		},
		extend: {
			backgroundImage: () => ({
				"logo-light": "url('/logo-light.svg')",
				"logo-dark": "url('/logo-dark.svg')",
			}),
		},
	},
	variants: {
		extend: { backgroundImage: ["dark"] },
	},

	plugins: [require("daisyui")],
};
