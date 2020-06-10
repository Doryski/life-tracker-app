import Group from './Group'
import Tracker from './Tracker'
import Record from './Record'
import TrackerRecords from './TrackersRecords'
import TrackerValues from './TrackersValues'
import TrackerStat from './TrackerStat'

export default interface ContextProviderTypes {
	groups: Group[]
	setGroups: React.Dispatch<React.SetStateAction<Group[]>>
	trackers: Tracker[]
	setTrackers: React.Dispatch<React.SetStateAction<Tracker[]>>
	records: Record[]
	setRecords: React.Dispatch<React.SetStateAction<Record[]>>
	trackersRecords: TrackerRecords
	trackersValues: TrackerValues
	trackersStats: TrackerStat[]
	groupsState: [
		Group[],
		React.Dispatch<React.SetStateAction<Group[]>>
	]
	trackersState: [
		Tracker[],
		React.Dispatch<React.SetStateAction<Tracker[]>>
	]
	recordsState: [
		Record[],
		React.Dispatch<React.SetStateAction<Record[]>>
	]
}
