import React from 'react'
import { GlobalContextProvider } from './context/GlobalContext'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './theme/ThemeProvider'
import Header from './components/shared/Header'
import DashboardPage from './components/DashboardPage'
import GroupPage from './components/GroupPage'
import TrackerPage from './components/TrackerPage'
import ChartsPage from './components/ChartsPage'

const App = () => {
	return (
		<GlobalContextProvider>
			<BrowserRouter>
				<Layout>
					<Header />
					<Switch>
						<Route
							exact
							path='/'
							component={DashboardPage}
						/>
						<Route
							path='/:group'
							exact
							component={GroupPage}
						/>
						<Route
							path='/:group/:tracker'
							exact
							component={TrackerPage}
						/>
						<Route
							path='/:group/:tracker/charts'
							exact
							component={ChartsPage}
						/>
					</Switch>
				</Layout>
			</BrowserRouter>
		</GlobalContextProvider>
	)
}

export default App
