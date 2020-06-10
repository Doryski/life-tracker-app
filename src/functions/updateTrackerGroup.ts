import { UNASSIGNED_GROUP_NAME } from '../settings'
import Tracker from '../interfaces/Tracker'

const updateTrackerGroup = (
	tracker: Tracker,
	newGroupName = UNASSIGNED_GROUP_NAME
) => ({
	...tracker,
	groupName: newGroupName,
})

export default updateTrackerGroup
