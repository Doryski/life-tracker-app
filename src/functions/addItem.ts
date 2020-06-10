const addItem = (
	newItem: any,
	arrayState: [any[], React.Dispatch<React.SetStateAction<any>>]
) => {
	const [currentState, setStateFunction] = arrayState
	const updated = [newItem, ...currentState]
	return setStateFunction(updated)
}

export default addItem
