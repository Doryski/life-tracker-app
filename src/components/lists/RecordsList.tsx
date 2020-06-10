import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import styled from 'styled-components'
import moment from 'moment'
import { useLocation } from 'react-router-dom'
import Record from '../../interfaces/Record'
import { DATE_FORMAT } from '../../settings'
import removeItem from '../../functions/removeItem'

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
	const { records, trackers, recordsState } = useContext(
		GlobalContext
	)
	const location = useLocation()
	const handleRemoveBtnClick = (record: Record) => {
		let confirmation = window.confirm(
			'Do you want to remove selected record?' +
				`\nDate: ${record.dateCreated}` +
				`\nValue: ${record.value}` +
				`\nNote: ${record.note}`
		)
		if (confirmation) removeItem(record, 'id', recordsState)
	}
	const filteredRecords = records.filter(record => {
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
	const sortedRecords = [...filteredRecords].sort((a, b) => {
		const dateDifference = moment(
			a.dateCreated,
			DATE_FORMAT
		).diff(moment(b.dateCreated, DATE_FORMAT), 'minutes')

		return dateDifference > 0 ? 1 : -1
	})

	return (
		<List>
			{sortedRecords.map(record => (
				<ListItem key={record.id}>
					<span>
						date created:
						{moment(
							record.dateCreated,
							DATE_FORMAT
						).format(DATE_FORMAT)}
					</span>
					<span>value: {record.value}</span>
					<span>note: {record.note}</span>
					<button
						onClick={() => handleRemoveBtnClick(record)}
					>
						Remove record
					</button>
				</ListItem>
			))}
		</List>
	)
}

export default RecordsList
