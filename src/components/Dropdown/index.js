import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import List from './List'

const Wrapper = styled.div`
	display: block;
	z-index: 10;
`

const Dropdown = ({
	values = [],
	open = false,
	showCheckmark = true,
	currentValue,
	setValue,
	setHeader,
}) => {
	const [isOpen, setIsOpen] = useState(open)

	const toggleList = () => setIsOpen(!isOpen)

	const selectItem = item => {
		setValue(JSON.stringify(item))
		setHeader(item.name)
	}

	return (
		<Wrapper onClick={toggleList}>
			<Header headerTitle={currentValue} isOpen={isOpen} />
			<List
				showCheckmark={showCheckmark}
				headerTitle={currentValue}
				items={values}
				selectItem={selectItem}
				isOpen={isOpen}
			/>
		</Wrapper>
	)
}

export default Dropdown
