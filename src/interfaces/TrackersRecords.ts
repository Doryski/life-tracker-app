import Record from './Record'

export default interface TrackerRecords {
	[key: number]: { records: Record[] }
}
