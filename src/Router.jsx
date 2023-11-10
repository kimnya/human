import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import About from "./pages/About";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Register from "./pages/Register";
import All from "./pages/All";
import Products from "./pages/Products";

import SearchPage from "./pages/SearchPage";

const Router = () => {
  // 출처: https://innovatorwhy.tistory.com/12
  //   재귀함수를 사용하여 배열로 부터 Route를 생성하자.
  // <BrowserRouter>는 <Route>로 정의하며 부모와 자식간의 관계로 나타냅니다.
  // 하지만, Array등으로 정의해서 관리하지않으면 복잡하고 보기 어려운 코드로 변질됩니다.
  // 이말에 따르면 루트정리 필요
  return (
    <Routes>
      <Route path={`/`} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="about" element={<About />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="/account/" element={<Account />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/collections/all" element={<All />} />
        <Route path="/products/:productId" element={<Products />} />
      </Route>
    </Routes>
  );
};

export default Router;
