import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useLocation } from 'react-router-dom'
import DatePicker from 'react-date-picker'
import Dropdown from './Dropdown'
import styled from 'styled-components'
import { useEffect } from 'react'

const Form = styled.form`
	display: grid;
	grid-template-columns:
		repeat(
			${props => (props.location.pathname === '/' ? '4' : '3')},
			1fr
		)
		10%;
	height: 10vh;
	padding: 0 0.7em;
`
const Label = styled.label``
const Input = styled.input`
	padding: 0.5em;
`
const AddRecordForm = () => {
	const { trackers, addRecord } = useContext(GlobalContext)

	const [selectedTracker, setSelectedTracker] = useState('')
	const headerInit = 'Select tracker...'
	const [headerTitle, setHeaderTitle] = useState(headerInit)
	const [dateCreated, setDateCreated] = useState(new Date())
	const [value, setValue] = useState('')
	const [note, setNote] = useState('')
	const location = useLocation()

	const currentPageTracker = trackers.find(tracker =>
		location.pathname.includes(
			`${tracker.groupName}/${tracker.name}`
		)
	)

	useEffect(() => {
		if (location.pathname !== '/') {
			setSelectedTracker(JSON.stringify(currentPageTracker))
		}
	}, [location.pathname, currentPageTracker])

	const handleSubmit = e => {
		e.preventDefault()

		if (!selectedTracker) {
			alert('Select tracker to add record')
		} else if (!value) {
			alert('Value cannot be empty')
		} else {
			addRecord(selectedTracker, dateCreated, value, note)
			setSelectedTracker(JSON.stringify(currentPageTracker))
			setHeaderTitle(headerInit)
			setDateCreated(new Date())
			setValue('')
			setNote('')
		}
	}

	const onValueChange = e => {
		const num = e.target.value
		if (!num || num.match(/^\d{1,}(\.\d{0,2})?$/)) {
			setValue(num)
		}
	}

	return (
		<Form onSubmit={handleSubmit} location={location}>
			{location.pathname === '/' && (
				<Dropdown
					values={trackers}
					currentValue={headerTitle}
					setValue={setSelectedTracker}
					setHeader={setHeaderTitle}
				/>
			)}
			<Label>
				Date
				<DatePicker
					onChange={date => setDateCreated(date)}
					value={dateCreated}
					format='dd.MM.y'
				/>
			</Label>
			<Label>
				value
				<Input
					type='text'
					value={value}
					onChange={onValueChange}
				/>
			</Label>
			<Label>
				note
				<Input
					type='text'
					value={note}
					onChange={e => setNote(e.target.value)}
				/>
			</Label>
			<button>Add record</button>
		</Form>
	)
}

export default AddRecordForm
