import Tracker from './Tracker'

export interface DropdownPropsTypes {
	values?: Tracker[] | []
	showCheckmark?: boolean
	currentValue: string
	handleSelect: (item: Tracker) => void
	maxWidth?: string
}

export interface HeaderPropsTypes {
	headerTitle: string
	isOpen: boolean
}

export interface ListPropsTypes {
	isOpen: boolean
	items: Tracker[]
	selectItem: (item: Tracker) => void
	headerTitle: string
	showCheckmark: boolean
}
