import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { useLocation } from 'react-router-dom'
import DatePicker from 'react-date-picker'
import Dropdown from './Dropdown'
import styled from 'styled-components'
import { useEffect } from 'react'
import Tracker from '../../interfaces/Tracker'
import addRecord from '../../functions/addRecord'
import { SELECT_TRACKER_HEADER } from '../../settings'

const Form = styled.form`
	display: grid;
	grid-template-columns:
		repeat(
			${(props: { location: { pathname: string } }) =>
				props.location.pathname === '/' ? '4' : '3'},
			1fr
		)
		10%;
	height: 10vh;
	padding: 0 0.7em;
`
const Label = styled.label`
	margin: auto;
`
const Input = styled.input`
	padding: 0.5em;
	max-width: 90%;
`
const Button = styled.button`
	margin: auto;
	padding: 0.5em 1em;
`

const AddRecordForm = () => {
	const { trackers, recordsState } = useContext(GlobalContext)

	const [selectedTracker, setSelectedTracker] = useState('')
	const [headerTitle, setHeaderTitle] = useState(
		SELECT_TRACKER_HEADER
	)
	const [dateCreated, setDateCreated] = useState(new Date())
	const [value, setValue] = useState('')
	const [note, setNote] = useState('')
	const location = useLocation()

	const currentPageTracker = trackers.filter(tracker =>
		location.pathname.includes(
			`${tracker.groupName}/${tracker.name}`
		)
	)[0]

	useEffect(() => {
		if (location.pathname !== '/')
			setSelectedTracker(currentPageTracker.id)
	}, [location.pathname, currentPageTracker])

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		if (!selectedTracker) alert('Select tracker to add record')
		else if (!value) alert('Value cannot be empty')
		else {
			addRecord(
				selectedTracker,
				dateCreated,
				value,
				note,
				recordsState
			)
			setSelectedTracker('')
			setHeaderTitle(SELECT_TRACKER_HEADER)
			setDateCreated(new Date())
			setValue('')
			setNote('')
		}
	}

	function onValueChange(e: React.ChangeEvent<HTMLInputElement>) {
		const num = e.target.value
		if (!num || num.match(/^\d{1,}(\.\d{0,2})?$/)) setValue(num)
	}

	const handleSelect = (item: Tracker) => {
		setSelectedTracker(item.id)
		setHeaderTitle(item.name)
	}

	return (
		<Form onSubmit={handleSubmit} location={location}>
			{location.pathname === '/' && (
				<Dropdown
					values={trackers}
					currentValue={headerTitle}
					handleSelect={handleSelect}
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
				Value
				<Input
					type='text'
					value={value}
					onChange={onValueChange}
				/>
			</Label>
			<Label>
				Note
				<Input
					type='text'
					value={note}
					onChange={e => setNote(e.target.value)}
				/>
			</Label>
			<Button>Add record</Button>
		</Form>
	)
}

export default AddRecordForm
