import React from 'react'
import { CheveronUp, CheveronDown } from '@styled-icons/zondicons'
import { StyledHeader } from './StyledHeader'
import { HeaderPropsTypes } from '../../interfaces/DropdownPropsTypes'

const Header = ({ headerTitle, isOpen }: HeaderPropsTypes) => {
	const ICON_SIZE = '26'

	return (
		<StyledHeader>
			{headerTitle}
			{isOpen ? (
				<CheveronUp size={ICON_SIZE} />
			) : (
				<CheveronDown size={ICON_SIZE} />
			)}
		</StyledHeader>
	)
}

export default Header
