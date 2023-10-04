import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import All from './pages/All';
import Products from './pages/Products';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';

function App() {
	// 정규표현식 공부하게 됌
	//register에서 정규식 if문 !연산자 쓰니까 제대로 매칭이 안됌 아예 true ,false로 표현했더니 해결
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
}

export default App;
