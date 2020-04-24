import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './index'
import GlobalStyle from './GlobalStyle'



const Layout = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyle />
				{children}
			</>
		</ThemeProvider>
	)
}

export default Layout
