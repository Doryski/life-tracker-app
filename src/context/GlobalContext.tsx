import React, { createContext, useState, useEffect } from 'react'
import uuid from 'react-uuid'
import groupsInit from '../initialState/groups'
import trackersInit from '../initialState/trackers'
import recordsInit from '../initialState/records'
import { max, min, avg, sum } from '../functions/array'
import moment, {
	max as maxDate,
	min as minDate,
	Moment,
} from 'moment'
import Tracker from '../interfaces/Tracker'
import Record from '../interfaces/Record'
import Group from '../interfaces/Group'
import TrackerValues from '../interfaces/TrackersValues'
import TrackerRecords from '../interfaces/TrackersRecords'
import TrackerStat from '../interfaces/TrackerStat'
import ContextProviderTypes from '../interfaces/ContextProviderTypes'

const contextInit: ContextProviderTypes = {
	groups: [],
	addGroup: () => {},
	removeGroup: () => {},
	trackers: [],
	addTracker: () => {},
	updateTrackerGroup: () => {
		return {
			groupName: '',
			id: 0,
			name: '',
			unit: '',
		}
	},
	removeTracker: () => {},
	setTrackers: () => {},
	records: [],
	addRecord: () => {},
	removeRecord: () => {},
	setRecords: () => {},
	trackersRecords: {},
	trackersValues: {},
	trackersStats: [],
	UNASSIGNED_GROUP_NAME: '',
}
export const GlobalContext = createContext(contextInit)

export const GlobalContextProvider = ({
	children,
}: {
	children: any
}) => {
	// useEffect(() => alert('This app is under development'), [])
	const UNASSIGNED_GROUP_NAME = 'Unassigned'
	// groups
	const [groups, setGroups] = useState(groupsInit)
	const [trackers, setTrackers] = useState(trackersInit)
	const [records, setRecords] = useState(recordsInit)

	useEffect(() => {
		const groupsString: any = localStorage.getItem('groups')
		const groupsData: Group[] = JSON.parse(groupsString)

		if (groupsData) setGroups(groupsData)
	}, [])

	useEffect(() => {
		localStorage.setItem('groups', JSON.stringify(groups))
		console.log(groups)
	}, [groups])

	// add group
	const addGroup = (name: string) =>
		setGroups([{ name }, ...groups])

	// remove group
	const removeGroup = (name: string) => {
		const updated = groups.filter(group => group.name !== name)

		return setGroups(updated)
	}
	// end groups

	// trackers
	useEffect(() => {
		const trackersString: any = localStorage.getItem('trackers')
		const trackersData: Tracker[] = JSON.parse(trackersString)

		if (trackersData) setTrackers(trackersData)
	}, [])

	useEffect(() => {
		localStorage.setItem('trackers', JSON.stringify(trackers))
		console.log(trackers)
	}, [trackers])

	// add tracker
	const addTracker = (
		groupName: string,
		trackerName: string,
		unit: string
	) =>
		setTrackers([
			{
				id: uuid(),
				groupName: groupName || UNASSIGNED_GROUP_NAME,
				name: trackerName,
				unit,
			},
			...trackers,
		])

	// remove tracker
	const removeTracker = (id: number) => {
		const updated = trackers.filter(tracker => tracker.id !== id)

		return setTrackers(updated)
	}
	const updateTrackerGroup = (
		tracker: Tracker,
		newGroupName = UNASSIGNED_GROUP_NAME
	) => {
		return {
			...tracker,
			groupName: newGroupName,
		}
	}

	// end trackers

	// records
	useEffect(() => {
		const recordsString: any = localStorage.getItem('records')
		const recordsData: Record[] = JSON.parse(recordsString)
		if (recordsData) setRecords(recordsData)
	}, [])

	useEffect(() => {
		localStorage.setItem('records', JSON.stringify(records))
		console.log(records)
	}, [records])

	// add record
	const addRecord = (
		trackerId: number,
		dateCreated: Date,
		value: number,
		note: string
	) => {
		return setRecords([
			{
				id: uuid(),
				trackerId,
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
	const removeRecord = (id: number) => {
		const updated = records.filter(record => record.id !== id)

		return setRecords(updated)
	}
	// changes records data to object: { trackerID: { records: [ { record }, ... ] } }
	let trackersRecords: TrackerRecords = {}
	trackers.forEach(tracker => {
		const currentId = tracker.id
		const recordsArray: Record[] = []
		records.forEach(record => {
			if (currentId === record.trackerId) {
				recordsArray.push(record)
			}
		})
		trackersRecords[currentId] = { records: recordsArray }
	})

	// changes records data to object: { trackerID: { values: [recordValues], dates: [recordDates], ids: [recordIds] }, ... }
	let trackersValues: TrackerValues = {}
	trackers.forEach(tracker => {
		const currentId = tracker.id
		const values: number[] = []
		const dates: Moment[] = []
		const ids: number[] = []
		records.forEach(record => {
			if (currentId === record.trackerId) {
				values.push(record.value)
				dates.push(moment(record.dateCreated, 'DD.MM.YYYY'))
				ids.push(record.id)
			}
		})
		trackersValues[currentId] = { values, dates, ids }
	})

	// stores info about every tracker in array
	const trackersStats: TrackerStat[] = trackers.map(tracker => {
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
				updateTrackerGroup,
				removeTracker,
				setTrackers,
				records,
				addRecord,
				removeRecord,
				setRecords,
				trackersRecords,
				trackersValues,
				trackersStats,
				UNASSIGNED_GROUP_NAME,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}
