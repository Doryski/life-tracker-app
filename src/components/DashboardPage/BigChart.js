import React from 'react'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import {
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Line,
	Legend,
} from 'recharts'
import moment from 'moment'
import styled from 'styled-components'
import Dropdown from '../Dropdown'

const ChartWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	.recharts-wrapper {
		background: white;
		height: 100%;
		margin: auto;
	}
`

const BigChart = () => {
	const { trackersRecords, trackers } = useContext(GlobalContext)
	const [selectedTracker, setSelectedTracker] = useState(
		trackers[0].id
	)
	const headerInit = 'Select tracker...'
	const [headerTitle, setHeaderTitle] = useState(headerInit)
	const handleSelect = item => {
		setSelectedTracker(item.id)
		setHeaderTitle(item.name)
	}
	const data = [
		...trackersRecords[selectedTracker].records,
	].sort((a, b) =>
		moment(a.dateCreated, 'DD.MM.YYYY').diff(
			moment(b.dateCreated, 'DD.MM.YYYY'),
			'minutes'
		) > 0
			? 1
			: -1
	)

	return (
		<ChartWrapper className='big-chart'>
			<Dropdown
				values={trackers}
				currentValue={headerTitle}
				handleSelect={handleSelect}
				maxWidth='200px'
			/>
			<LineChart width={730} height={300} data={data}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='dateCreated' />
				<YAxis domain={['auto', 'auto']} dataKey='value' />
				<Tooltip />
				<Legend />
				<Line
					type='monotone'
					dataKey='value'
					stroke='black'
					dot={{
						stroke: 'black',
						fill: 'black',
						strokeWidth: 1,
					}}
				/>
			</LineChart>
		</ChartWrapper>
	)
}

export default BigChart
