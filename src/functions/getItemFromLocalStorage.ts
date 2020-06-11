export default function getItemFromLocalStorage(
	name: string,
	setStateFunction: React.Dispatch<React.SetStateAction<any>>
) {
	const itemString: any = localStorage.getItem(name)
	const item = JSON.parse(itemString)
	if (item) setStateFunction(item)
}
