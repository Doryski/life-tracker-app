export default function removeItem(
	item: any,
	property: string,
	arrayState: [any[], React.Dispatch<React.SetStateAction<any>>]
) {
	const [currentState, setStateFunction] = arrayState
	const newState = currentState.filter(
		el => el[property] !== item[property]
	)
	return setStateFunction(newState)
}
