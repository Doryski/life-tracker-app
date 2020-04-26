import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import List from './List'

const Wrapper = styled.div`
	display: block;
	margin: auto;
	position: relative;
	width: 100%;
	max-width: ${props => props.maxWidth};
`

const Dropdown = ({
	values = [],
	showCheckmark = true,
	currentValue,
	handleSelect,
	maxWidth = '100%',
}) => {
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
