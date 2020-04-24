import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
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
	const { records, removeRecord } = useContext(GlobalContext)
	const location = useLocation()

	return (
		<List>
			{/* add filtering, sorting and pagination */}
			{[...records]
				.filter(record => {
					const tracker = JSON.parse(record.tracker)
					return location.pathname.includes(
						`${tracker.groupName}/${tracker.name}`
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
