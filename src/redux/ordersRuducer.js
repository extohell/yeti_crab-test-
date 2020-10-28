const ADD_ORDER = 'ADD_ORDER';
const DELETE_ORDER = 'DELETE_ORDER';
const EDIT_ORDER = 'EDIT_ORDER';

const initialState = {
	orders: [
		{
			id: 1,
			creationDate: new Date(2020, 10, 5, 10, 0),
			clientName: 'OOO AAA',
			carrierFullName: 'Ivanov I.I.',
			carrierPhoneNumber: '+79876543210',
			comment: 'comment',
			codeATI: 1234
		},
		{
			id: 2,
			creationDate: new Date(2020, 8, 24, 8, 0),
			clientName: 'OOO UUU',
			carrierFullName: 'Petrov P.P.',
			carrierPhoneNumber: '+79876543210',
			comment: 'comment',
			codeATI: 5678
		},
		{
			id: 3,
			creationDate: new Date(2020, 6, 10, 12, 0),
			clientName: 'OOO EEE',
			carrierFullName: 'Sidorov S.S.',
			carrierPhoneNumber: '+79876543210',
			comment: 'comment',
			codeATI: 9123
		},
		{
			id: 4,
			creationDate: new Date(2020, 10, 5, 10, 0),
			clientName: 'OOO AAA',
			carrierFullName: 'Ivanov I.I.',
			carrierPhoneNumber: '+79876543210',
			comment: 'comment',
			codeATI: 1234
		},
		{
			id: 5,
			creationDate: new Date(2020, 8, 24, 8, 0),
			clientName: 'OOO UUU',
			carrierFullName: 'Petrov P.P.',
			carrierPhoneNumber: '+79876543210',
			comment: 'comment',
			codeATI: 5678
		}
	]
};

export const ordersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ORDER:
			const newOrder = {
				id: state.orders.length + 1,
				creationDate: new Date(),
				...action.order
			};
			return {
				...state,
				orders: [ ...state.orders, newOrder ]
			};
		case DELETE_ORDER:
			return {
				...state,
				orders: state.orders.filter(order => order.id !== action.id)
			};
		case EDIT_ORDER:
			return {
				...state,
				orders: state.orders.map(order => {
					return order.id === action.id ? action.data : order;
				})
			};
		default:
			return state;
	}
};

export const addOrder = (order) => ({ type: ADD_ORDER, order });
export const deleteOrder = (id) => ({ type: DELETE_ORDER, id });
export const editOrder = (data, id) => ({ type: EDIT_ORDER, data, id });