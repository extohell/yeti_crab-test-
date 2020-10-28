import { createStore } from 'redux';
import { ordersReducer } from './ordersRuducer';

const store = createStore(ordersReducer);

export default store;