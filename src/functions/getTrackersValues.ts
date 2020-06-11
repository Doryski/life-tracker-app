import Tracker from '../interfaces/Tracker'
import Record from '../interfaces/Record'
import moment, { Moment } from 'moment'
import TrackerValues from '../interfaces/TrackersValues'
import { DATE_FORMAT } from '../settings'

export default function getTrackersValues(
	trackers: Tracker[],
	records: Record[]
) {
	let returnObject: TrackerValues = {}
	trackers.forEach(tracker => {
		const currentId = tracker.id
		const values: number[] = []
		const dates: Moment[] = []
		const ids: string[] = []
		records.forEach(record => {
			if (currentId === record.trackerId) {
				values.push(+record.value)
				dates.push(moment(record.dateCreated, DATE_FORMAT))
				ids.push(record.id)
			}
		})
		returnObject[currentId] = { values, dates, ids }
	})
	return returnObject
}
