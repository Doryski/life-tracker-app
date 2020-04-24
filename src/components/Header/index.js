import React from 'react'
import styled from 'styled-components'
import { Link as RouteLink } from 'react-router-dom'

const HeaderWrapper = styled.div`
	// background: ${props => props.theme.colors.secondary};
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 1em;
	height: 10vh;
`
const Link = styled(RouteLink)`
	padding: 1em;
`

const Header = () => {
	return (
		<HeaderWrapper>
			<Link to='/'>Link to Dashboard</Link>
			<p>Account settings</p>
		</HeaderWrapper>
	)
}

export default Header
