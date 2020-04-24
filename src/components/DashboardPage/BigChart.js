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
const Select = styled.select`
	margin: auto;
`

const BigChart = () => {
	const { trackersRecords, trackers } = useContext(GlobalContext)
	const [selectedTracker, setSelectedTracker] = useState(
		trackers[0].id
	)
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
			<Select
				value={selectedTracker}
				onChange={e => setSelectedTracker(e.target.value)}
			>
				{trackers.map(tracker => (
					<option
						key={tracker.dateCreated}
						value={tracker.id}
					>
						{tracker.name}
					</option>
				))}
			</Select>
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
