import { Moment } from 'moment'

export default interface TrackerValues {
	[key: number]: {
		values: number[]
		dates: Moment[]
		ids: number[]
	}
}
