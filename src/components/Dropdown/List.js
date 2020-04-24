import React from 'react'
import styled from 'styled-components'
import { Checkmark } from '@styled-icons/zondicons'

const StyledList = styled.ul`
	display: ${props => (props.isOpen ? 'block' : 'none')};
	position: absolute;
	margin-top: 10px;
	cursor: pointer;
	list-style-type: none;
	background: white;
`
const StyledItem = styled.li`
	display: flex;
	justify-content: space-between;
	padding: .5em 1em;

	&:hover {
		background: lightgrey;
	}
`

const List = ({
	isOpen,
	items,
	selectItem,
	headerTitle,
	showCheckmark,
}) => {
	return (
		<StyledList isOpen={isOpen}>
			{items.map(item => (
				<StyledItem
					key={item.id}
					onClick={() => selectItem(item)}
				>
					{item.name} <small>{item.groupName}</small>
					{showCheckmark && (
						<span>
							{item.name === headerTitle && (
								<Checkmark size='18' />
							)}
						</span>
					)}
				</StyledItem>
			))}
		</StyledList>
	)
}

export default List
