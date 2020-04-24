import React, { useContext } from 'react'
import PageWrapper from '../StyledComponents/PageWrapper'
import LeftNav from '../LeftNav'
import { Link, useLocation } from 'react-router-dom'
import RecordsList from '../RecordsList'
import AddRecordForm from '../AddRecordForm'
import { GlobalContext } from '../../context/GlobalContext'

const TrackerPage = () => {
	const location = useLocation()
	const { trackersStats } = useContext(GlobalContext)
	const currentTracker = location.pathname.split('/')
	const currentTrackerStats = trackersStats.find(
		tracker =>
			tracker.trackerName === currentTracker[2] &&
			tracker.trackerGroupName === currentTracker[1]
	)

	return (
		<PageWrapper>
			<LeftNav />
			<section>
				<AddRecordForm />
				<RecordsList />
			</section>
			<section>
				<h4>
					<Link to={`${location.pathname}/charts`}>
						Check charts
					</Link>
				</h4>
				<ul>
					<li>max: {currentTrackerStats.maxValue}</li>
					<li>
						avg: {currentTrackerStats.avgValue.toFixed(1)}
					</li>
					<li>
						sum: {currentTrackerStats.sumValue.toFixed(1)}
					</li>
					<li>min: {currentTrackerStats.minValue}</li>
					<li>
						latest: {currentTrackerStats.lastRecordValue}
					</li>
					<li>
						total change %:{' '}
						{currentTrackerStats.diffLastVsFirstPc.toFixed(
							1
						)}
						%
					</li>
				</ul>
			</section>
		</PageWrapper>
	)
}

export default TrackerPage
