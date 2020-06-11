export default function map(
	value: number,
	minValue: number,
	maxValue: number,
	minTarget: number,
	maxTarget: number
) {
	const diffValue = maxValue - minValue
	const slice = value / diffValue
	const diffTarget = maxTarget - minTarget
	const newValue = minTarget + slice * diffTarget

	return newValue
}
