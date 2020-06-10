import React, { useState } from 'react'
import Header from './Header'
import List from './List'
import { Wrapper } from './StyledHeader'
import { DropdownPropsTypes } from '../../interfaces/DropdownPropsTypes'

const Dropdown = ({
	values = [],
	showCheckmark = true,
	currentValue,
	handleSelect,
	maxWidth = '100%',
}: DropdownPropsTypes) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleList = () => setIsOpen(!isOpen)

	return (
		<Wrapper onClick={toggleList} maxWidth={maxWidth}>
			<Header headerTitle={currentValue} isOpen={isOpen} />
			<List
				showCheckmark={showCheckmark}
				headerTitle={currentValue}
				items={values}
				selectItem={handleSelect}
				isOpen={isOpen}
			/>
		</Wrapper>
	)
}

export default Dropdown
