export const minString = (array: string[]) => [...array].sort()[0]
export const maxString = (array: string[]) =>
	[...array].sort().reverse()[0]
