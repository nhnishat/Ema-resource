import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './Component/Auth/AuthProvider';
import CheckOut from './Component/CheckOut/CheckOut';
import Inventory from './Component/Inventory/Inventory';
import Home from './Component/Layout/Home';
import LogIn from './Component/LogIn/LogIn';
import Orders from './Component/Oders/Orders';
import Shop from './Component/Shop/Shop';
import SingUp from './Component/SingUp/SingUp';
import CartProductsLoaders from './Loaders/CartProductsLoaders';
import PrivateRoute from './Routes/PrivateRoute';
// import './index.css';
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		children: [
			{
				path: '/',
				element: <Shop />,
			},
			{
				path: 'orders',
				element: <Orders />,
				loader: CartProductsLoaders,
			},
			{
				path: 'inventory',
				element: (
					<PrivateRoute>
						<Inventory />
					</PrivateRoute>
				),
			},
			{
				path: 'checkout',
				element: (
					<PrivateRoute>
						<CheckOut />
					</PrivateRoute>
				),
			},
			{
				path: 'login',
				element: <LogIn />,
			},
			{
				path: 'singup',
				element: <SingUp />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	</React.StrictMode>
);
