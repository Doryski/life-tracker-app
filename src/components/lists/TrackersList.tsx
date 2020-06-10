import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import {
	Link as RouteLink,
	useLocation,
	useHistory,
} from 'react-router-dom'
import styled from 'styled-components'
import { Close } from '@styled-icons/zondicons'
import Tracker from '../../interfaces/Tracker'
import removeItem from '../../functions/removeItem'

const List = styled.ul``

const ListItem = styled.li`
	display: grid;
	grid-template-columns: 80% 20%;
`
const Link = styled(RouteLink)`
	padding: 1em;
	&:hover {
		background: ${props => props.theme.colors.light};
	}
`

const TrackersList = () => {
	const {
		trackers,
		records,
		setRecords,
		trackersState,
	} = useContext(GlobalContext)
	const location = useLocation()
	const history = useHistory()
	const handleRemoveBtnClick = (tracker: Tracker) => {
		let confirmation = window.confirm(
			`Do you want to delete tracker ${tracker.name} of group ${tracker.groupName} and all its records?`
		)
		if (confirmation) {
			history.push(`/${tracker.groupName}`)
			const updatedRecords = records.filter(record => {
				const trackerName = trackers.find(
					t => t.id === record.trackerId
				)?.name
				return trackerName !== tracker.name
			})
			setRecords(updatedRecords)
			removeItem(tracker, 'id', trackersState)
		}
	}
	const filteredTrackers = trackers.filter(tracker =>
		location.pathname.includes(tracker.groupName)
	)

	return (
		<List>
			{filteredTrackers.map(tracker => (
				<ListItem key={tracker.id}>
					<Link
						to={`/${tracker.groupName}/${tracker.name}`}
					>
						{tracker.name}
					</Link>
					<button
						onClick={() => handleRemoveBtnClick(tracker)}
					>
						<Close size='20' />
					</button>
				</ListItem>
			))}
		</List>
	)
}

export default TrackersList
