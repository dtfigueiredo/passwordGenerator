/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				layout: {
					black: '#282828',
					darkgray: '#2A2A2A',
					mediumgray: '#606060',
					lightgray: '#B4B4B4',
					orange: '#FF9900',
				},
			},
			fontFamily: {
				noto: ['Noto Sans Linear B', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
