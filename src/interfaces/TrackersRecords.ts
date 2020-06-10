import Record from './Record'

export default interface TrackerRecords {
	[key: string]: { records: Record[] }
}
