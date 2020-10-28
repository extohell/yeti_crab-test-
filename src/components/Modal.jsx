import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addOrder, editOrder } from '../redux/ordersRuducer';
import Field from './Field';

const Wrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 800px;
	padding: 50px;
	
	background-color: #ffffff;
	border: 2px solid #000000;
	
	transform: translate(-50%, -50%);
`;

const Close = styled.button`
	position: absolute;
	width: 30px;
	height: 30px;
	right: 10px;
	top: 10px;
	
	background-color: transparent;
	border: none;
	cursor: pointer;
	
	&:before,
	&:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 4px;
		top: 50%;
		left: 0;
		
		background-color: #ba3434;
	}
	
	&:before {
		transform: rotate(45deg);
	}
	&:after {
		transform: rotate(-45deg);
	}
`;

const Button = styled.button`
	padding: 10px 15px;
	
	font-size: 16px;
`;

const fields = [
	'Номер заявки',
	'Дата создания',
	'Название фирмы клиента',
	'ФИО перевозчика',
	'Контактный телефон перевозчика',
	'Комментарии',
	'ATI код сети перевозчика'
];

const Modal = ({ setEditId, id, newOrder, setNewOrder }) => {
	const data = useSelector((state) => state.orders.filter(order => order.id === id)[0] || {
		clientName: '',
		carrierFullName: '',
		carrierPhoneNumber: '',
		comment: '',
		codeATI: ''
	});
	const dispatch = useDispatch();
	const [ newData, setNewData ] = useState(data);

	const onSubmit = (event) => {
		console.log(Object.values(newData).every(el => el === true));
		event.preventDefault();
		if (newOrder) {
			dispatch(addOrder(newData));
		} else {
			dispatch(editOrder(newData, id));
		}
		setNewOrder(false);
		setEditId(false);
	};

	return (
		<Wrapper>
			<Close onClick={ () => {
				setEditId(false);
				setNewOrder(false);
			} }/>

			<form onSubmit={ onSubmit }>
				{
					Object.entries(newData).map(([ key, value ], index) => {
						const data = key === 'creationDate' ? value.toLocaleString() : value;
						return <Field newOrder={ newOrder } key={ key }
									  placeholder={ fields[newOrder ? index + 2 : index] }
									  noEdit={ key === 'id' || key === 'creationDate' } name={ key }
									  data={ data } setNewData={ setNewData }/>;
					})
				}
				<Button type='submit'>Save</Button>
			</form>
		</Wrapper>
	);
};

export default Modal;