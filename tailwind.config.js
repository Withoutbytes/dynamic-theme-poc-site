/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "var(--tw-color-primary)",
				secondary: "var(--tw-color-secondary)",
				background: "var(--tw-color-background)",
				link: "var(--tw-color-link)",
			},
		},
	},
	plugins: [],
};
