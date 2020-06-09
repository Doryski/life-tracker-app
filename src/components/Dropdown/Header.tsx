import React from 'react'
import { CheveronUp, CheveronDown } from '@styled-icons/zondicons'
import { StyledHeader } from './StyledHeader'

const Header = ({
	headerTitle,
	isOpen,
}: {
	headerTitle: string
	isOpen: boolean
}) => {
	const iconSize = '26'

	return (
		<StyledHeader>
			{headerTitle}
			{isOpen ? (
				<CheveronUp size={iconSize} />
			) : (
				<CheveronDown size={iconSize} />
			)}
		</StyledHeader>
	)
}

export default Header
