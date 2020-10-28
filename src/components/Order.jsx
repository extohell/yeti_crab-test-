import React from 'react';
import styled from 'styled-components';
import edit from '../images/edit.svg';
import remove from '../images/remove.svg';
import { useDispatch } from 'react-redux';
import { deleteOrder } from '../redux/ordersRuducer';

const Td = styled.td`
	padding: 10px 5px;
	border: 2px solid #000000;
	max-width: 300px;
	
	text-align: center;
	word-break: break-word;
`;

const Button = styled.button`
	width: 30px;
	height: 30px;

	background-color: transparent;
	background-image: url(${ props => props.img });
	background-repeat: no-repeat;
	background-size: contain;
	border: none;
	
	cursor: pointer;
	
	&:not(:last-of-type) {
		margin-right: 10px;
	}
`;

const Order = ({ data, onEdit }) => {
	const dispatch = useDispatch();

	return (
		<tr>
			<Td>{ data.id }</Td>
			<Td>{ data.creationDate.toLocaleString() }</Td>
			<Td>{ data.clientName }</Td>
			<Td>{ data.carrierFullName }</Td>
			<Td>{ data.carrierPhoneNumber }</Td>
			<Td>{ data.comment }</Td>
			<Td><a href={ `https://ati.su/firms/${ data.codeATI }/info` } rel='noreferrer'
				   target='_blank'>{ data.codeATI }</a></Td>
			<Td>
				<Button img={ edit } onClick={ () => onEdit(data.id) }/>
				<Button img={ remove } onClick={ () => dispatch(deleteOrder(data.id)) }/>
			</Td>
		</tr>
	);
};

export default Order;