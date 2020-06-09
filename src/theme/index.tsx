const theme = {
	colors: {
		light: '#F4EDEF',
		primary: '#B09E99',
		secondary: '#AFA99D',
		dark: '#111',
		dark2: '#010102',
	},
	padding: {
		small: '.4em',
		medium: '.7em',
		large: '1em',
	},
	media: {
		mobile: '@media (max-width: 728px)',
		tablet: '@media (max-width: 1024px)',
	},
}

export type ThemeType = typeof theme

export default theme
