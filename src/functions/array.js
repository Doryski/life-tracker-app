export const sum = array => array.reduce((acc, val) => +acc + +val, 0)
export const diff = array => array.reduce((acc, val) => (acc -= val))
export const aggr = array => array.reduce((acc, val) => (acc *= val))
export const divide = array =>
	array.reduce((acc, val) => (acc /= val))
export const avg = array => sum(array) / array.length
export const max = array => Math.max(...array)
export const min = array => Math.min(...array)

export const getDiff = array => {
	const newArray = []
	for (let i = 0; i < array.length - 1; i++) {
		newArray.push(array[i + 1] - array[i] || 0)
	}

	return newArray
}

export const getTotalDiff = array => {
	const newArray = []
	for (let i = 0; i < array.length - 1; i++) {
		newArray.push(array[i + 1] - array[0] || 0)
	}

	return newArray
}

export const getDiffPc = array => {
	const newArray = []
	for (let i = 0; i < array.length - 1; i++) {
		newArray.push((array[i + 1] / array[i] - 1) * 100 || 0)
	}

	return newArray
}

export const getTotalDiffPc = array => {
	const newArray = []
	for (let i = 0; i < array.length - 1; i++) {
		newArray.push((array[i + 1] / array[0] - 1) * 100 || 0)
	}

	return newArray
}

export const maxDiff = (array, calculation = 'diff') => {
	switch (calculation) {
		case 'diff':
			return Math.max(...getDiff(array))
		case 'totalDiff':
			return Math.max(...getTotalDiff(array))
		case 'diffPc':
			return Math.max(...getDiffPc(array))
		case 'totalDiffPc':
			return Math.max(...getTotalDiffPc(array))
		default:
			return null
	}
}
export const minDiff = (array, calculation = 'diff') => {
	switch (calculation) {
		case 'diff':
			return Math.min(...getDiff(array))
		case 'totalDiff':
			return Math.min(...getTotalDiff(array))
		case 'diffPc':
			return Math.min(...getDiffPc(array))
		case 'totalDiffPc':
			return Math.min(...getTotalDiffPc(array))
		default:
			return null
	}
}
export const avgDiff = (array, calculation = 'diff') => {
	switch (calculation) {
		case 'diff':
			return avg(getDiff(array))
		case 'totalDiff':
			return avg(getTotalDiff(array))
		case 'diffPc':
			return avg(getDiffPc(array))
		case 'totalDiffPc':
			return avg(getTotalDiffPc(array))
		default:
			return null
	}
}
