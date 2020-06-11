import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import styled from 'styled-components'
import { DATE_FORMAT } from '../../settings'

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
			<h3 style={{ textAlign: 'center' }}>Highest vs latest</h3>
			<List>
				{trackersStats.map(stat => (
					<ListItem key={stat.trackerId}>
						<h5
							style={{
								display: 'flex',
								justifyContent: 'space-between',
							}}
						>
							{stat.trackerName}

							<span>
								{stat.lastRecordDate.format(
									DATE_FORMAT
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
							{stat.maxValue}
							<span>vs </span>
							{stat.lastRecordValue}
							<small style={{ color: 'red' }}>
								{stat.diffLastVsMaxPc === '-'
									? '-'
									: +stat.diffLastVsMaxPc === 0
									? 'MAX'
									: `${(+stat.diffLastVsMaxPc).toFixed(
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
