import React from 'react'
import LeftNav from '../LeftNav'
import AddTrackerForm from '../AddTrackerForm'
import PageWrapper from '../StyledComponents/PageWrapper'

const GroupPage = () => {
	return (
		<PageWrapper>
			<LeftNav />
			<section>
				<AddTrackerForm />
				<div className='big-chart'>
					{/* Total change for group of trackers (raw or %) */}
				</div>
				<div className='small-chart'>
					{/* Change for group of trackers (raw or %) */}
				</div>
			</section>
			<section>
				{/* avg, latest, best change, worst change, total change % */}
			</section>
		</PageWrapper>
	)
}

export default GroupPage
