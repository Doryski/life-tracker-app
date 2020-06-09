import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import styled from 'styled-components'
import moment from 'moment'
import { useLocation } from 'react-router-dom'

const List = styled.ul`
	display: flex;
	flex-direction: column;
	height: 80vh;
	overflow-y: auto;
`
const ListItem = styled.li`
	display: grid;
	grid-template-columns: repeat(3, 1fr) 10%;
	padding: 1em;
`
const RecordsList = () => {
	const { records, removeRecord, trackers } = useContext(
		GlobalContext
	)
	const location = useLocation()

	return (
		<List>
			{[...records]
				.filter(record => {
					const trackerGroupName = trackers.find(
						t => t.id === record.trackerId
					)?.groupName
					const trackerName = trackers.find(
						t => t.id === record.trackerId
					)?.name
					return location.pathname.includes(
						`${trackerGroupName}/${trackerName}`
					)
				})
				.sort((a, b) =>
					moment(a.dateCreated, 'DD.MM.YYYY').diff(
						moment(b.dateCreated, 'DD.MM.YYYY'),
						'minutes'
					) < 0
						? 1
						: -1
				)
				.map(record => {
					return (
						<ListItem key={record.id}>
							{/* group: {tracker.groupName} <br />
						tracker: {tracker.name} <br /> */}
							<span>
								date created:{' '}
								{moment(
									record.dateCreated,
									'DD.MM.YYYY'
								).format('DD.MM.YYYY')}
							</span>
							<span>value: {record.value}</span>
							<span>note: {record.note}</span>
							<button
								onClick={() =>
									removeRecord(record.id)
								}
							>
								Remove record
							</button>
						</ListItem>
					)
				})}
		</List>
	)
}

export default RecordsList