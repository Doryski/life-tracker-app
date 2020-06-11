import Tracker from '../interfaces/Tracker'
import getTrackersValues from './getTrackersValues'
import Record from '../interfaces/Record'
import { max, min, avg, sum } from '../functions/array'
import { max as maxDate, min as minDate } from 'moment'

export default function getTrackersStats(
	trackers: Tracker[],
	records: Record[]
) {
	return trackers.map(tracker => {
		const trackersValues = getTrackersValues(trackers, records)
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
}
