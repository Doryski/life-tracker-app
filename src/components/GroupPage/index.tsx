import React from 'react'
import LeftNav from '../shared/LeftNav'
import AddTrackerForm from '../shared/AddTrackerForm'
import PageWrapper from '../shared/StyledComponents/PageWrapper'
import UnderDev from '../shared/StyledComponents/UnderDev'
import styled from 'styled-components'

const MainSection = styled.section`
	display: grid;
	grid-template-rows: 10vh 80vh;
	height: 90vh;
`

const GroupPage = () => {
	return (
		<PageWrapper>
			<LeftNav />
			<MainSection>
				<AddTrackerForm />
				<UnderDev>Under development</UnderDev>
			</MainSection>
			<UnderDev>Under development</UnderDev>
		</PageWrapper>
	)
}

export default GroupPage
