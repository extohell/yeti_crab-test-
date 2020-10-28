import React, { useState } from 'react';
import styled from 'styled-components';
import edit from '../images/edit.svg';

const Div = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 20px;
	padding: 10px 15px;
	
	background-color: lightgray;
	cursor: pointer;
	
	font-size: 16px;
	
	${ props => props.noEdit && 'pointer-events: none;' }
	
	&:after {
		content: '';
		position: absolute;
		right: 10px;
		top: 7px;
		display: none;
	
		background-color: transparent;
		border: none;
		width: 20px;
		height: 20px;
	
		background-image: url(${ edit });
		background-repeat: no-repeat;
		background-size: contain;
	}
	
	&:hover:after {
		display: block;
	}
`;

const Input = styled.input`
	position: relative;
	width: 100%;
	margin-bottom: 20px;
	padding: 10px 15px;
	
	background-color: lightgray;
	border: none;
	
	font-size: 16px;
	
	box-shadow: 0 0 0 2px black;
`;

const Field = ({ data, name, noEdit, setNewData, placeholder, newOrder }) => {
	const [ editMode, setEditMode ] = useState(false);

	const onEdit = () => {
		if (noEdit) return;
		setEditMode(true);
	};

	const onChange = (event) => {
		setNewData((data) => ({
			...data,
			[event.target.name]: event.target.value
		}));
	};

	return (
		<>
			{
				(editMode || newOrder) ?
					<Input type={ name === 'codeATI' ? 'number' : 'text' } name={ name }
						   value={ data } onChange={ onChange } placeholder={ placeholder }/> :
					<Div noEdit={ noEdit } onClick={ onEdit }>{ data || placeholder }</Div>

			}
		</>
	);
};

export default Field;