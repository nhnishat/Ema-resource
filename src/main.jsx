import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inventory from './Component/Inventory/Inventory';
import Home from './Component/Layout/Home';
import LogIn from './Component/LogIn/LogIn';
import Orders from './Component/Oders/Orders';
import Shop from './Component/Shop/Shop';
import CartProductsLoaders from './Loaders/CartProductsLoaders';
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
				element: <Inventory />,
			},
			{
				path: 'login',
				element: <LogIn />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
