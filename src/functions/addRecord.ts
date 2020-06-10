import moment from 'moment'
import { DATE_FORMAT } from '../settings'
import addItem from './addItem'
import uuid from 'react-uuid'

const addRecord = (
	trackerId: string,
	dateCreated: Date,
	value: string,
	note: string,
	recordsState: [any[], React.Dispatch<any>]
) => {
	const newRecord = {
		id: uuid(),
		trackerId,
		dateCreated: moment(dateCreated).format(DATE_FORMAT),
		value,
		note,
	}
	addItem(newRecord, recordsState)
}

export default addRecord
