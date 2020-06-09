import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import styled from 'styled-components'

const Wrapper = styled.div`
	height: 90vh;
	overflow-y: auto;
	border-left: 1px solid ${props => props.theme.colors.dark};
`
const List = styled.ul`
	display: flex;
	flex-direction: column;
`

const ListItem = styled.li`
	padding: 0.5em;
`

const Stats = () => {
	const { trackersStats } = useContext(GlobalContext)

	return (
		<Wrapper>
			{/* list of highest scores per every tracker vs latest */}
			<h3>Highest vs latest</h3>
			<List>
				{trackersStats.map(el => (
					<ListItem key={el.trackerId}>
						<h5
							style={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							{el.trackerName}

							<span>
								{el.lastRecordDate.format(
									'DD.MM.YYYY'
								)}
							</span>
						</h5>
						<p
							style={{
								display: 'flex',
								justifyContent: 'space-evenly',
								paddingTop: '.3em',
							}}
						>
							{el.maxValue}
							<span>vs </span>
							{el.lastRecordValue}
							<small style={{ color: 'red' }}>
								{el.diffLastVsMaxPc === '-'
									? '-'
									: +el.diffLastVsMaxPc === 0
									? 'MAX'
									: `${(+el.diffLastVsMaxPc).toFixed(
											1
									  )}%`}
							</small>
						</p>
					</ListItem>
				))}
			</List>
		</Wrapper>
	)
}

export default Stats
