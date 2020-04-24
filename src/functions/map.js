const map = (value, minValue, maxValue, minTarget, maxTarget) => {
	const diffValue = maxValue - minValue
	const slice = value / diffValue
	const diffTarget = maxTarget - minTarget
	const newValue = minTarget + slice * diffTarget

	return newValue
}

export default map