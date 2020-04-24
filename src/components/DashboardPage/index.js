import React from 'react'
import PageWrapper from '../StyledComponents/PageWrapper'
import LeftNav from '../LeftNav/'
import AddRecordForm from '../AddRecordForm'
import Stats from './Stats'
import { avg } from '../../functions/array'
import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import styled from 'styled-components'
import BigChart from './BigChart'

const MainWrapper = styled.div`
	display: grid;
	grid-template-rows: 10vh 20vh 60vh;
`
const BigStats = styled.section`
	display: flex;
	justify-content: center;
	padding: 1em;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	text-align: center;
`

const DashboardPage = () => {
	const { trackersStats } = useContext(GlobalContext)

	const avgTotalDiffPc = avg(
		trackersStats
			.map(t => t.diffLastVsFirstPc)
			.filter(el => el !== '-')
	)
	const avgLastDiffPc = avg(
		trackersStats
			.map(t => t.diffLastVsPrevPc)
			.filter(el => el !== '-')
	)

	return (
		<PageWrapper>
			<LeftNav />
			<MainWrapper>
				<AddRecordForm />
				<BigStats>
					<p>{avgTotalDiffPc.toFixed(2)}%</p>
					<p>{avgLastDiffPc.toFixed(2)}%</p>
					<h3>All trackers average total change %</h3>
					<h3>All trackers average change %:</h3>
				</BigStats>
				<BigChart />
			</MainWrapper>
			<Stats />
		</PageWrapper>
	)
}

export default DashboardPage
