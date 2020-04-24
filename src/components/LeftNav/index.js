import React from 'react'
import styled from 'styled-components'
import GroupsList from '../GroupsList'
import TrackersList from '../TrackersList'
import { useLocation } from 'react-router-dom'
import AddGroupForm from '../AddGroupForm'
import { useState } from 'react'

const Wrapper = styled.div`
	// background: lightgrey;
`
const Button = styled.button`
	padding: 1em;
	width: 100%;
`

const LeftNav = () => {
	const location = useLocation()
	const [showForm, setShowForm] = useState(false)

	return (
		<>
			{location.pathname === '/' ? (
				<Wrapper>
					<GroupsList />
					{showForm ? (
						<AddGroupForm setShowForm={setShowForm} />
					) : (
						<Button onClick={() => setShowForm(true)}>
							Add group
						</Button>
					)}
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
