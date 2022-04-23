module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: '#3D8FF6',
				"accent-offset": '#2D70C2',
				body: "#10254E"
			}
		}
	},
	plugins: [
		require("@tailwindcss/forms")
	]
}