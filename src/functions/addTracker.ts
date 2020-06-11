import addItem from './addItem'
import uuid from 'react-uuid'
import { UNASSIGNED_GROUP_NAME } from '../settings'

export default function addTracker(
	groupName: string = UNASSIGNED_GROUP_NAME,
	trackerName: string,
	unit: string,
	trackersState: [any[], React.Dispatch<any>]
) {
	const newTracker = {
		id: uuid(),
		groupName,
		name: trackerName,
		unit,
	}
	addItem(newTracker, trackersState)
}
