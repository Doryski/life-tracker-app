import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import addTracker from '../../functions/addTracker'

const Form = styled.form`
	display: grid;
	grid-template-columns: repeat(2, 1fr) 20%;
`
const Label = styled.label`
	display: flex;
	flex-direction: column;
	margin: auto;
`
const Input = styled.input`
	padding: 0.5em 1em;
	max-width: 90%;
`

const AddTrackerForm = () => {
	const { groups, trackers, trackersState } = useContext(
		GlobalContext
	)
	const location = useLocation()
	const currentPageGroup = groups.filter(group =>
		location.pathname.includes(`${group.name}`)
	)[0].name
	const [trackerName, setTrackerName] = useState('')
	const [selectedGroup, setSelectedGroup] = useState(
		currentPageGroup
	)
	const [unit, setUnit] = useState('')

	useEffect(() => {
		setSelectedGroup(currentPageGroup)
	}, [currentPageGroup])

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		if (!trackerName) alert('Tracker name cannot be null')
		else if (!trackerName.match(/^[a-zA-Z]+$/))
			alert('Tracker name can only inlude letters')
		else if (
			trackers.find(
				tracker =>
					tracker.name.toLowerCase() ===
					trackerName.toLowerCase()
			)
		)
			alert('Tracker of this name already exists')
		else {
			addTracker(
				selectedGroup,
				trackerName,
				unit,
				trackersState
			)
			setSelectedGroup(currentPageGroup)
			setTrackerName('')
			setUnit('')
		}
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Label>
				Tracker name
				<Input
					type='text'
					value={trackerName}
					onChange={e => setTrackerName(e.target.value)}
				/>
			</Label>
			<Label>
				Tracker unit
				<Input
					type='text'
					value={unit}
					onChange={e => setUnit(e.target.value)}
				/>
			</Label>
			<button>Add tracker</button>
		</Form>
	)
}

export default AddTrackerForm
