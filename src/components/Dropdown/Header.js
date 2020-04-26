import React from 'react'
import styled from 'styled-components'
import { CheveronUp, CheveronDown } from '@styled-icons/zondicons'

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	border-bottom: 2px solid ${props => props.theme.colors.dark};
	padding: 0.5em 1em;
`

const Header = ({ headerTitle, isOpen }) => {
	const size = '26'

	return (
		<StyledHeader>
			{headerTitle}
			{isOpen ? (
				<CheveronUp size={size} />
			) : (
				<CheveronDown size={size} />
			)}
		</StyledHeader>
	)
}

export default Header
