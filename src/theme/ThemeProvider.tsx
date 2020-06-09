import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './index'
import GlobalStyle from './GlobalStyle'

const Layout = ({ children }: { children: any }) => {
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
