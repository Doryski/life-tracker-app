import styled from 'styled-components'

export const Wrapper = styled.div`
	display: block;
	margin: auto;
	position: relative;
	width: 100%;
	max-width: ${(props: { maxWidth: string }) => props.maxWidth};
`

export const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	cursor: pointer;
	border-bottom: 2px solid ${props => props.theme.colors.dark};
	padding: 0.5em 1em;
`
