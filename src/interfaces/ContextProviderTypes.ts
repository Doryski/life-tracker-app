import Group from './Group'
import Tracker from './Tracker'
import Record from './Record'
import TrackerRecords from './TrackersRecords'
import TrackerValues from './TrackersValues'
import TrackerStat from './TrackerStat'

export default interface ContextProviderTypes {
	groups: Group[]
	addGroup: (name: string) => void
	removeGroup: (name: string) => void
	trackers: Tracker[]
	addTracker: (
		groupName: string,
		trackerName: string,
		unit: string
	) => void
	updateTrackerGroup: (
		tracker: Tracker,
		newGroupName?: string
	) => {
		groupName: string
		id: number
		name: string
		unit: string
	}
	removeTracker: (id: number) => void
	setTrackers: React.Dispatch<React.SetStateAction<Tracker[]>>
	records: Record[]
	addRecord: (
		trackerId: number,
		dateCreated: Date,
		value: number,
		note: string
	) => void
	removeRecord: (id: number) => void
	setRecords: React.Dispatch<React.SetStateAction<Record[]>>
	trackersRecords: TrackerRecords
	trackersValues: TrackerValues
	trackersStats: TrackerStat[]
	UNASSIGNED_GROUP_NAME: string
}
