import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { Close } from '@styled-icons/zondicons'
import styled from 'styled-components'

const Form = styled.form`
	display: grid;
	grid-template-columns: 80% 20%;
`

const Input = styled.input`
	padding: 1em 0;
`

const Button = styled.button``

const AddGroupForm = ({ setShowForm }) => {
	const { addGroup } = useContext(GlobalContext)
	const [groupName, setGroupName] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		if (!groupName) {
			alert('Group name cannot be null')
		} else if (!groupName.match(/^[a-zA-Z]+$/)) {
			alert('Group name can only inlude letters')
		} else {
			addGroup(groupName)
			setGroupName('')
			setShowForm(false)
		}
	}

	const handleGroupNameChange = e => setGroupName(e.target.value)

	return (
		<Form onSubmit={handleSubmit}>
			<Input
				type='text'
				value={groupName}
				onChange={handleGroupNameChange}
			/>
			<Button>
				<Close
					size='20'
					style={{ transform: 'rotate(45deg)' }}
				/>
			</Button>
		</Form>
	)
}

export default AddGroupForm
