import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import News from './pages/News';
import About from './pages/About';
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';
import All from './pages/All';
import Products from './pages/Products';

const Router = () => {
	return (
		<Routes>
			<Route path={`/`} element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="news" element={<News />} />
				<Route path="about" element={<About />} />
				<Route path="/account/" element={<Account />} />
				<Route path="/account/login" element={<Login />} />
				<Route path="/account/register" element={<Register />} />
				<Route path="/collections/all" element={<All />} />
				<Route path="/products/:id" element={<Products />} />
			</Route>
		</Routes>
	);
};

export default Router;
