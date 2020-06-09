import styled from 'styled-components'

export const StyledList = styled.ul`
	display: ${(props: { isOpen: boolean }) =>
		props.isOpen ? 'block' : 'none'};
	position: absolute;
	left: 0;
	cursor: pointer;
	list-style-type: none;
	background: ${props => props.theme.colors.primary};
	z-index: 20;
	max-height: 30vh;
	overflow-y: auto;
	width: 200px;
`
export const StyledItem = styled.li`
	display: flex;
	justify-content: space-between;
	padding: 0.5em 0.7em;
	border-bottom: 1px solid ${props => props.theme.colors.secondary};
	&:hover {
		background: ${props => props.theme.colors.light};
	}
`
export const TrackerInfo = styled.span`
	display: flex;
	flex-direction: column;
`
export const GroupName = styled.span`
	font-size: 0.7em;
`
export const CheckmarkIcon = styled.span`
	margin: auto 0;
`
