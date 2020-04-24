import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useLocation } from 'react-router-dom'

const AddTrackerForm = () => {
	const { groups, addTracker } = useContext(GlobalContext)
	const location = useLocation()
	const currentPageGroup = groups.find(group =>
		location.pathname.includes(`${group.name}`)
	).name
	const [trackerName, setTrackerName] = useState('')
	const [selectedGroup, setSelectedGroup] = useState(
		currentPageGroup
	)
	const [unit, setUnit] = useState('')

	useEffect(() => {
		setSelectedGroup(currentPageGroup)
	}, [currentPageGroup])

	const handleSubmit = e => {
		e.preventDefault()
		addTracker(selectedGroup, trackerName, unit)
		setSelectedGroup(currentPageGroup)
		setTrackerName('')
		setUnit('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Tracker name
				<input
					type='text'
					value={trackerName}
					onChange={e => setTrackerName(e.target.value)}
				/>
			</label>
			<label>
				Tracker unit
				<input
					type='text'
					value={unit}
					onChange={e => setUnit(e.target.value)}
				/>
			</label>
			<button>Add tracker</button>
		</form>
	)
}

export default AddTrackerForm
