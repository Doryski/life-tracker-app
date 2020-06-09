import React from 'react'
import { Checkmark } from '@styled-icons/zondicons'
import {
	StyledList,
	StyledItem,
	TrackerInfo,
	GroupName,
	CheckmarkIcon,
} from './StyledList'
import Tracker from '../../interfaces/Tracker'
interface ListPropsTypes {
	isOpen: boolean
	items: Tracker[]
	selectItem: (item: Tracker) => void
	headerTitle: string
	showCheckmark: boolean
}

const List = ({
	isOpen,
	items,
	selectItem,
	headerTitle,
	showCheckmark,
}: ListPropsTypes) => {
	return (
		<StyledList isOpen={isOpen}>
			{items.map(item => (
				<StyledItem
					key={item.id}
					onClick={() => selectItem(item)}
				>
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
