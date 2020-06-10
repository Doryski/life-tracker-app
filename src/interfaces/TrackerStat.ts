import { Moment } from 'moment'
import { ReactText } from 'react'

export default interface TrackerStat {
	trackerId: string
	trackerName: string
	trackerGroupName: string
	lastRecordDate: Moment
	lastRecordValue: number
	firstRecordDate: Moment
	firstRecordValue: number
	secondLastRecordDate: Moment
	secondLastRecordValue: number
	diffLastVsPrev: number
	diffLastVsPrevPc: ReactText
	diffLastVsMax: number
	diffLastVsMaxPc: ReactText
	diffLastVsFirst: number
	diffLastVsFirstPc: ReactText
	maxValue: number
	minValue: number
	avgValue: number
	sumValue: number
}
