import React, { useContext } from 'react'
import PageWrapper from '../shared/StyledComponents/PageWrapper'
import LeftNav from '../shared/LeftNav'
import { Link, useLocation } from 'react-router-dom'
import RecordsList from '../shared/RecordsList'
import AddRecordForm from '../shared/AddRecordForm'
import { GlobalContext } from '../../context/GlobalContext'

const TrackerPage = () => {
	const location = useLocation()
	const { trackersStats } = useContext(GlobalContext)
	const [
		,
		currentTrackerGroupName,
		currentTrackerName,
	] = location.pathname.split('/')
	const currentTrackerStats = trackersStats.filter(
		tracker =>
			tracker.trackerName === currentTrackerName &&
			tracker.trackerGroupName === currentTrackerGroupName
	)[0]

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
						{(+currentTrackerStats.diffLastVsFirstPc).toFixed(
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
