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
		removeTracker,
		records,
		setRecords,
	} = useContext(GlobalContext)
	const location = useLocation()
	const history = useHistory()
	const handleRemoveBtnClick = (tracker: Tracker) => {
		let confirmation = window.confirm(
			`Do you want to delete tracker ${tracker.name} of group ${tracker.groupName} and all its records?`
		)
		if (confirmation) {
			history.push(`/${tracker.groupName}`)
			removeTracker(tracker.id)
			const updatedRecords = records.filter(record => {
				const trackerName = trackers.find(
					t => t.id === record.trackerId
				)?.name
				return trackerName === tracker.name
			})
			setRecords(updatedRecords)
		}
	}
	return (
		<List>
			{trackers
				.filter(tracker =>
					location.pathname.includes(tracker.groupName)
				)
				.map(tracker => (
					<ListItem key={tracker.id}>
						<Link
							to={`/${tracker.groupName}/${tracker.name}`}
						>
							{tracker.name}
						</Link>
						<button
							onClick={() =>
								handleRemoveBtnClick(tracker)
							}
						>
							<Close size='20' />
						</button>
					</ListItem>
				))}
		</List>
	)
}

export default TrackersList
