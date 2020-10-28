import React, { useState } from 'react';
import styled from 'styled-components';
import Order from './Order';
import Modal from './Modal';
import { useSelector } from 'react-redux';

const Table = styled.table`
	width: 80vw;
	margin-bottom: 30px;

	border: 4px solid #000000;
	border-collapse: collapse;
`;

const Th = styled.th`
	padding: 10px 5px;
	border: 2px solid #000000;
	
	text-align: center;
`;

const AddNewOrder = styled.button`
	float: right;
	padding: 10px 15px;
	
	font-size: 16px;
`;

const OrdersTable = () => {
	const [ editId, setEditId ] = useState(false);
	const [ newOrder, setNewOrder ] = useState(false);

	const onEdit = (id) => setEditId(id);
	const state = useSelector((state) => state);

	return (
		<>
			<Table>
				<thead>
				<tr>
					<Th>Номер заявки</Th>
					<Th>Дата и время<br/> получения заявки</Th>
					<Th>Название фирмы клиента</Th>
					<Th>ФИО перевозчика</Th>
					<Th>Контактный телефон<br/> перевозчика</Th>
					<Th>Комментарий</Th>
					<Th>ATI код сети<br/> перевозчика</Th>
					<Th/>
				</tr>
				</thead>
				<tbody>
				{
					state.orders.map(order => {
						return <Order key={ order.id } data={ order } onEdit={ onEdit }/>;
					})
				}
				</tbody>
			</Table>
			<AddNewOrder onClick={ () => setNewOrder(true) }>Создать заказ</AddNewOrder>
			{ (editId || newOrder) &&
			<Modal newOrder={ newOrder } id={ editId } setEditId={ setEditId } setNewOrder={ setNewOrder }/> }
		</>
	);
};

export default OrdersTable;