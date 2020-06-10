import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { Link as RouteLink } from 'react-router-dom'
import styled from 'styled-components'
import { Close } from '@styled-icons/zondicons'
import Group from '../../interfaces/Group'
import updateTrackerGroup from '../../functions/updateTrackerGroup'
import removeItem from '../../functions/removeItem'
import { UNASSIGNED_GROUP_NAME } from '../../settings'

const ListItem = styled.li`
	display: grid;
	grid-template-columns: 80% 20%;
`
const Link = styled(RouteLink)`
	display: block;
	padding: 1em;
	&:hover {
		background: ${props => props.theme.colors.light};
	}
`
const Button = styled.button``

const GroupsList = () => {
	const {
		groups,
		groupsState,
		trackers,
		setTrackers,
		records,
		setRecords,
	} = useContext(GlobalContext)
	
	const handleRemoveBtnClick = (group: Group) => {
		if (group.name === UNASSIGNED_GROUP_NAME) {
			let confirmation = window.confirm(
				'Do you want to delete all trackers and records' +
					' under group Unassigned?'
			)
			if (confirmation) {
				// delete all trackers and records under group Unassigned
				const updatedRecords = records.filter(record => {
					const trackerGroupName = trackers.find(
						t => t.id === record.trackerId
					)?.groupName
					return trackerGroupName !== group.name
				})
				setRecords(updatedRecords)
				const updatedTrackers = trackers.filter(
					t => t.groupName !== group.name
				)
				setTrackers(updatedTrackers)
			}
		} else {
			let confirmation2 = window.confirm(
				`Do you want to delete group ${group.name}?` +
					' The trackers assigned to this group will be moved to Unassigned group.'
			)
			// move trackers to Unassigned group
			if (confirmation2) {
				const updated = trackers.map(tracker =>
					tracker.groupName === group.name
						? updateTrackerGroup(tracker)
						: { ...tracker }
				)
				setTrackers(updated)
				removeItem(group, 'name', groupsState)
			}
		}
	}

	return (
		<ul>
			{groups.map(group => (
				<ListItem key={group.name}>
					<Link to={`/${group.name}`}>{group.name}</Link>

					<Button
						onClick={() => handleRemoveBtnClick(group)}
					>
						<Close size='20' />
					</Button>
				</ListItem>
			))}
		</ul>
	)
}

export default GroupsList
