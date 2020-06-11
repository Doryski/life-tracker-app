import Tracker from '../interfaces/Tracker'
import TrackerRecords from '../interfaces/TrackersRecords'
import Record from '../interfaces/Record'

export default function getTrackersRecords(
	trackers: Tracker[],
	records: Record[]
) {
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
	return trackersRecords
}
