import ContextProviderTypes from '../interfaces/ContextProviderTypes'

const contextInit: ContextProviderTypes = {
	groups: [],
	setGroups: () => {},
	trackers: [],
	setTrackers: () => {},
	records: [],
	setRecords: () => {},
	trackersRecords: {},
	trackersValues: {},
	trackersStats: [],
	groupsState: [[], () => {}],
	trackersState: [[], () => {}],
	recordsState: [[], () => {}],
}
export default contextInit
