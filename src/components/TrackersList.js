import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Close } from '@styled-icons/zondicons'

const List = styled.ul`
	
`

const ListItem = styled.li`
	display: grid;
	grid-template-columns: 80% 20%;
`
const StyledLink = styled(Link)`
	padding: 0.5em 1em;
`

const TrackersList = () => {
	const { trackers, removeTracker } = useContext(GlobalContext)
	const location = useLocation()

	return (
		<List>
			{trackers
				.filter(tracker =>
					location.pathname.includes(tracker.groupName)
				)
				.map(tracker => (
					<ListItem key={tracker.id}>
						<StyledLink
							to={`/${tracker.groupName}/${tracker.name}`}
						>
							{tracker.name} <br />
							<small> Group: {tracker.groupName}</small>
						</StyledLink>
						<button
							onClick={() => removeTracker(tracker.id)}
						>
							<Close size='20' />
						</button>
					</ListItem>
			))}
		</List>
	)
}

export default TrackersList
