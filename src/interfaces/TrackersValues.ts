import { Moment } from 'moment'

export default interface TrackerValues {
	[key: string]: {
		values: number[]
		dates: Moment[]
		ids: string[]
	}
}
