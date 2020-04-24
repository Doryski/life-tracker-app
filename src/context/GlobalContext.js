import React, { createContext, useState, useEffect } from 'react'
import uuid from 'react-uuid'
import groupsInit from '../initialState/groups'
import trackersInit from '../initialState/trackers'
import recordsInit from '../initialState/records'
import { max, min, avg, sum } from '../functions/array'
import moment, { max as maxDate, min as minDate } from 'moment'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
	// groups
	const [groups, setGroups] = useState(groupsInit)
	const [trackers, setTrackers] = useState(trackersInit)
	const [records, setRecords] = useState(recordsInit)

	useEffect(() => {
		const groupsData = JSON.parse(localStorage.getItem('groups'))

		if (groupsData) {
			return setGroups(groupsData)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('groups', JSON.stringify(groups))
	}, [groups])

	// add group
	const addGroup = name => setGroups([{ name }, ...groups])

	// remove group
	const removeGroup = name => {
		const updated = groups.filter(group => group.name !== name)

		return setGroups(updated)
	}
	// end groups

	// trackers
	useEffect(() => {
		const trackersData = JSON.parse(
			localStorage.getItem('trackers')
		)

		if (trackersData) {
			return setTrackers(trackersData)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('trackers', JSON.stringify(trackers))
	}, [trackers])

	// add tracker
	const addTracker = (groupName, trackerName, unit) =>
		setTrackers([
			{
				id: uuid(),
				groupName: groupName || 'Other',
				name: trackerName,
				unit,
			},
			...trackers,
		])

	// remove tracker
	const removeTracker = id => {
		const updated = trackers.filter(tracker => tracker.id !== id)

		return setTrackers(updated)
	}
	// end trackers

	// records
	useEffect(() => {
		const recordsData = JSON.parse(
			localStorage.getItem('records')
		)

		console.log(recordsData)
		if (recordsData) {
			return setRecords(recordsData)
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('records', JSON.stringify(records))
	}, [records])

	// add record
	const addRecord = (tracker, dateCreated, value, note) => {
		return setRecords([
			{
				id: uuid(),
				tracker,
				dateCreated:
					moment(dateCreated).format('DD.MM.YYYY') ||
					moment().format('DD.MM.YYYY'),
				value,
				note,
			},
			...records,
		])
	}

	// remove record
	const removeRecord = id => {
		const updated = records.filter(record => record.id !== id)

		return setRecords(updated)
	}
	// change records data to object: { trackerID: { records: [ { record },... ] } }
	let trackersRecords = {}
	for (let tracker of trackers) {
		const currentId = tracker.id
		const recordsArray = []
		for (let record of records) {
			const t = JSON.parse(record.tracker)
			if (currentId === t.id) {
				recordsArray.push(record)
			}
		}
		trackersRecords[currentId] = { records: recordsArray }
	}

	// change records data to object: { trackerID: { values: [recordValues], dates: [recordDates], ids: [recordIds] }
	let trackersValues = {}
	for (let tracker of trackers) {
		const currentId = tracker.id
		const values = []
		const dates = []
		const ids = []
		for (let record of records) {
			const t = JSON.parse(record.tracker)
			if (currentId === t.id) {
				values.push(record.value)
				dates.push(moment(record.dateCreated, 'DD.MM.YYYY'))
				ids.push(record.id)
			}
		}
		trackersValues[currentId] = { values, dates, ids }
	}

	////
	const trackersStats = trackers.map(tracker => {
		const trackerObj = trackersValues[tracker.id]
		const { dates, values } = trackerObj
		const lastRecordDate = maxDate(dates)
		const lastRecordIndex = dates.indexOf(lastRecordDate)
		const lastRecordValue = values[lastRecordIndex]
		const firstRecordDate = minDate(dates)
		const firstRecordIndex = dates.indexOf(firstRecordDate)
		const firstRecordValue = values[firstRecordIndex]
		const datesCopy = [...dates]
		const secondLastRecordDate =
			datesCopy.length > 1
				? maxDate(
						...datesCopy
							.sort((a, b) => (a < b ? 1 : -1))
							.slice(1)
				  )
				: datesCopy[0]
		const secondLastRecordIndex = dates.indexOf(
			secondLastRecordDate
		)
		const secondLastRecordValue = values[secondLastRecordIndex]
		const maxValue = max(values)
		const minValue = min(values)
		const avgValue = avg(values)
		const sumValue = sum(values)
		const diffLastVsMax = lastRecordValue - maxValue
		const diffLastVsMaxPc =
			+maxValue === 0 ? '-' : (diffLastVsMax / maxValue) * 100
		const diffLastVsPrev = lastRecordValue - secondLastRecordValue
		const diffLastVsPrevPc =
			+secondLastRecordValue === 0
				? '-'
				: (diffLastVsPrev / secondLastRecordValue) * 100
		const diffLastVsFirst = lastRecordValue - firstRecordValue
		console.log(lastRecordDate, firstRecordValue)
		const diffLastVsFirstPc =
			+firstRecordValue === 0
				? '-'
				: (diffLastVsFirst / firstRecordValue) * 100
		// return object
		return {
			trackerId: tracker.id,
			trackerName: tracker.name,
			trackerGroupName: tracker.groupName,
			lastRecordDate,
			lastRecordValue,
			firstRecordDate,
			firstRecordValue,
			secondLastRecordDate,
			secondLastRecordValue,
			diffLastVsPrev,
			diffLastVsPrevPc,
			diffLastVsMax,
			diffLastVsMaxPc,
			diffLastVsFirst,
			diffLastVsFirstPc,
			maxValue,
			minValue,
			avgValue,
			sumValue,
		}
	})

	// return context provider
	return (
		<GlobalContext.Provider
			value={{
				groups,
				addGroup,
				removeGroup,
				trackers,
				addTracker,
				removeTracker,
				records,
				addRecord,
				removeRecord,
				trackersRecords,
				trackersValues,
				trackersStats,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}
