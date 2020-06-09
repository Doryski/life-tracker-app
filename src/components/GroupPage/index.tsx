import React from 'react'
import LeftNav from '../LeftNav'
import AddTrackerForm from '../forms/AddTrackerForm'
import PageWrapper from '../StyledComponents/PageWrapper'
import UnderDev from '../StyledComponents/UnderDev'
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
