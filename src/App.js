import React from 'react';
import OrdersTable from './components/OrdersTable';
import { Provider } from 'react-redux';
import store from './redux/redux';

function App() {
	return (
		<Provider store={ store }>
			<OrdersTable/>
		</Provider>
	);
}

export default App;
