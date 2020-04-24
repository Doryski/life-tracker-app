import React from 'react'
import LeftNav from '../LeftNav'
import PageWrapper from '../StyledComponents/PageWrapper'

const ChartsPage = () => {
	return (
		<PageWrapper>
			<LeftNav />
			<div>
				<section>Line chart total change (raw or %)</section>
				<section>line chart change (raw or %)</section>
			</div>
			<section>list of all available option and charts</section>
		</PageWrapper>
	)
}

export default ChartsPage
