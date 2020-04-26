import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { Link as RouteLink } from 'react-router-dom'
import styled from 'styled-components'
import { Close } from '@styled-icons/zondicons'

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
	const { groups, removeGroup } = useContext(GlobalContext)

	return (
		<ul>
			{groups.map(group => (
				<ListItem key={group.name}>
					<Link to={`/${group.name}`}>{group.name}</Link>

					<Button onClick={() => removeGroup(group.name)}>
						<Close size='20' />
					</Button>
				</ListItem>
			))}
		</ul>
	)
}

export default GroupsList
