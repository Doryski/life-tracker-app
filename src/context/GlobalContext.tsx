import React, { createContext, useState, useEffect } from 'react'
import groupsInit from '../initialState/groups'
import trackersInit from '../initialState/trackers'
import recordsInit from '../initialState/records'
import TrackerValues from '../interfaces/TrackersValues'
import TrackerRecords from '../interfaces/TrackersRecords'
import TrackerStat from '../interfaces/TrackerStat'
import contextInit from '../initialState/context'
import getTrackersStats from '../functions/getTrackersStats'
import getTrackersValues from '../functions/getTrackersValues'
import getTrackersRecords from '../functions/getTrackersRecords'
import getItemFromLocalStorage from '../functions/getItemFromLocalStorage'

export const GlobalContext = createContext(contextInit)

export const GlobalContextProvider = ({
	children,
}: {
	children: any
}) => {
	const groupsState = useState(groupsInit)
	const [groups, setGroups] = groupsState
	const trackersState = useState(trackersInit)
	const [trackers, setTrackers] = trackersState
	const recordsState = useState(recordsInit)
	const [records, setRecords] = recordsState

	useEffect(() => {
		getItemFromLocalStorage('groups', setGroups)
		getItemFromLocalStorage('trackers', setTrackers)
		getItemFromLocalStorage('records', setRecords)
		// eslint-disable-next-line
	}, [])

	useEffect(() => {
		localStorage.setItem('groups', JSON.stringify(groups))
	}, [groups])
	useEffect(() => {
		localStorage.setItem('trackers', JSON.stringify(trackers))
	}, [trackers])
	useEffect(() => {
		localStorage.setItem('records', JSON.stringify(records))
	}, [records])

	// changes records data to object: { trackerID: { records: [ { record }, ... ] } }
	const trackersRecords: TrackerRecords = getTrackersRecords(
		trackers,
		records
	)
	// changes records data to object: { trackerID: { values: [recordValues], dates: [recordDates], ids: [recordIds] }, ... }
	const trackersValues: TrackerValues = getTrackersValues(
		trackers,
		records
	)
	// stores info about every tracker in array
	const trackersStats: TrackerStat[] = getTrackersStats(
		trackers,
		records
	)

	// return context provider
	return (
		<GlobalContext.Provider
			value={{
				groupsState,
				groups,
				setGroups,
				trackersState,
				trackers,
				setTrackers,
				recordsState,
				records,
				setRecords,
				trackersRecords,
				trackersValues,
				trackersStats,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}
