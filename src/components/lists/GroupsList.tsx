import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { Link as RouteLink } from 'react-router-dom'
import styled from 'styled-components'
import { Close } from '@styled-icons/zondicons'
import Group from '../../interfaces/Group'

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
		removeGroup,
		trackers,
		setTrackers,
		addGroup,
		updateTrackerGroup,
		records,
		setRecords,
		UNASSIGNED_GROUP_NAME,
	} = useContext(GlobalContext)
	const handleRemoveBtnClick = (group: Group) => {
		let confirmation = window.confirm(
			`Do you want to delete group ${group.name}?` +
				' The trackers assigned to this group will be moved to Unassigned group.'
		)

		if (
			confirmation &&
			Boolean(
				!groups.find(g => g.name === UNASSIGNED_GROUP_NAME)
			)
		) {
			removeGroup(group.name)
			const updated = trackers.map(tracker =>
				tracker.groupName === group.name
					? updateTrackerGroup(tracker)
					: { ...tracker }
			)
			setTrackers(updated)
			addGroup(UNASSIGNED_GROUP_NAME)
		} else if (
			confirmation &&
			Boolean(
				groups.find(g => g.name === UNASSIGNED_GROUP_NAME)
			) &&
			group.name !== UNASSIGNED_GROUP_NAME
		) {
			removeGroup(group.name)
			const updated = trackers.map(tracker =>
				tracker.groupName === group.name
					? updateTrackerGroup(tracker)
					: { ...tracker }
			)
			setTrackers(updated)
		} else if (
			confirmation &&
			group.name === UNASSIGNED_GROUP_NAME
		) {
			let confirmation2 = window.confirm(
				'Deleting group Unassigned will cause deleting' +
					'all records and trackers under this group.' +
					'Do you want to proceed?'
			)
			if (confirmation2) {
				// delete all trackers and records under this group
				const updatedRecords = records.filter(record => {
					const trackerGroupName = trackers.find(
						t => t.id === record.trackerId
					)?.groupName
					return trackerGroupName === group.name
				})
				setRecords(updatedRecords)
				const updatedTrackers = trackers.filter(
					t => t.groupName === group.name
				)
				setTrackers(updatedTrackers)
				removeGroup(group.name)
			}
		} else {
			return alert('else statement triggered')
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
