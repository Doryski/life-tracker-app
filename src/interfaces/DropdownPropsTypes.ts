import Tracker from './Tracker'

export default interface DropdownPropsTypes {
	values?: Tracker[] | []
	showCheckmark?: boolean
	currentValue: string
	handleSelect: (item: Tracker) => void
	maxWidth?: string
}
