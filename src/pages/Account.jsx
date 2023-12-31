import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CtxState } from "../context/HumanCtxprovider";
import { useNavigate } from "react-router-dom";

const Logout = styled.button`
  width: 80px;
  height: 40px;
`;

const Account = () => {
  const navigate = useNavigate();
  const state = useContext(CtxState);
  // const { isLogin } = state;

  const [logout, setLogout] = useState(state);

  const logoutFn = () => {
    setLogout((prev) => ({
      ...prev,
      isLogin: !state.isLogin,
    }));

    navigate("/");
  };
  return (
    <>
      <p>성공</p>;<Logout onClick={logoutFn}>logOut</Logout>
    </>
  );
};

export default Account;
