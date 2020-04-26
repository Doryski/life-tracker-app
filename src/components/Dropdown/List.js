import React from 'react'
import styled from 'styled-components'
import { Checkmark } from '@styled-icons/zondicons'

const StyledList = styled.ul`
	display: ${props => (props.isOpen ? 'block' : 'none')};
	position: absolute;
	left: 0;
	cursor: pointer;
	list-style-type: none;
	background: ${props => props.theme.colors.primary};
	z-index: 20;
	max-height: 30vh;
	overflow-y: auto;
	width: 200px;
`
const StyledItem = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 0.5em 0.7em;
	border-bottom: 1px solid ${props => props.theme.colors.secondary};
	&:hover {
		background: ${props => props.theme.colors.light};
	}
`
const TrackerInfo = styled.span`
	display: flex;
	flex-direction: column;
`
const GroupName = styled.span`
	font-size: 0.7em;
`
const CheckmarkIcon = styled.span`
	margin: auto 0;
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
					{' '}
					<TrackerInfo>
						{item.name}
						<GroupName>{item.groupName}</GroupName>
					</TrackerInfo>
					<CheckmarkIcon>
						{showCheckmark &&
							item.name === headerTitle && (
								<Checkmark size='18' />
							)}
					</CheckmarkIcon>
				</StyledItem>
			))}
		</StyledList>
	)
}

export default List
