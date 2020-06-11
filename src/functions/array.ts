import { ReactText } from 'react'

export const sum = (array: ReactText[]): number =>
	array.reduce((acc: number, val) => +acc + +val, 0)
export const diff = (array: number[]) =>
	array.reduce((acc, val) => (acc -= val))
export const aggr = (array: number[]) =>
	array.reduce((acc, val) => (acc *= val))
export const divide = (array: number[]) =>
	array.reduce((acc, val) => (acc /= val))
export const avg = (array: ReactText[] | number[]) =>
	+sum(array) / array.length
export const max = (array: number[]) => Math.max(...array)
export const min = (array: number[]) => Math.min(...array)

export function getDiff(array: number[]) {
	const newArray = []
	for (let i = 0; i < array.length - 1; i++) {
		newArray.push(array[i + 1] - array[i] || 0)
	}

	return newArray
}

export function getTotalDiff(array: number[]) {
	const newArray = []
	for (let i = 0; i < array.length - 1; i++) {
		newArray.push(array[i + 1] - array[0] || 0)
	}

	return newArray
}

export function getDiffPc(array: number[]) {
	const newArray = []
	for (let i = 0; i < array.length - 1; i++) {
		newArray.push((array[i + 1] / array[i] - 1) * 100 || 0)
	}

	return newArray
}

export function getTotalDiffPc(array: number[]) {
	const newArray = []
	for (let i = 0; i < array.length - 1; i++) {
		newArray.push((array[i + 1] / array[0] - 1) * 100 || 0)
	}

	return newArray
}

export function maxDiff(array: number[], calculation = 'diff') {
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
export function minDiff(array: number[], calculation = 'diff') {
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
export function avgDiff(array: number[], calculation = 'diff') {
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
