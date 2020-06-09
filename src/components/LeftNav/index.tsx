import React from 'react'
import styled from 'styled-components'
import GroupsList from '../lists/GroupsList'
import TrackersList from '../lists/TrackersList'
import { useLocation } from 'react-router-dom'
import AddGroupForm from '../forms/AddGroupForm'
import { useState } from 'react'

const Wrapper = styled.div`
	background: ${props => props.theme.colors.secondary};
	height: 90vh;
	overflow-y: auto;
`
const Button = styled.button`
	background: none;
	padding: 1em;
	width: 100%;
	&:hover {
		background: ${props => props.theme.colors.primary};
	}
`

const LeftNav = () => {
	const location = useLocation()
	const [showForm, setShowForm] = useState(false)

	return (
		<>
			{location.pathname === '/' ? (
				<Wrapper>
					{showForm ? (
						<AddGroupForm setShowForm={setShowForm} />
					) : (
						<Button onClick={() => setShowForm(true)}>
							Add group
						</Button>
					)}
					<GroupsList />
				</Wrapper>
			) : (
				<Wrapper>
					<TrackersList />
				</Wrapper>
			)}
		</>
	)
}

export default LeftNav
