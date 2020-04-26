import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { Link as RouteLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Close } from '@styled-icons/zondicons'

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
						<Link
							to={`/${tracker.groupName}/${tracker.name}`}
						>
							{tracker.name}
						</Link>
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
