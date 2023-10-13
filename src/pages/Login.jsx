import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HumanCtxprovider, {
  CtxDispatch,
  CtxState,
} from "../context/HumanCtxprovider";

const LoginContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 300px;
  transform: translate(-50%, -50%);

  > a {
    display: flex;
    justify-content: center;
    text-decoration: underline;
  }
`;
const Title = styled.h2`
  margin-bottom: 15px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 200px;
  > a {
    font-size: 14px;
    text-decoration: underline;
  }
`;

const Email = styled.input`
  width: 440px;
  height: 40px;
  padding-left: 15px;
  border: 1px solid #ccc;
`;
const Password = styled(Email)``;

const Label = styled.label``;

const LoginButton = styled.button`
  align-self: center;
  width: 100px;
  height: 40px;
  margin-bottom: 15px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: #000;
`;

const LogOutContainer = styled(LoginContainer)``;
const Logout = styled.button`
  width: 80px;
  height: 40px;
`;

const Login = () => {
  const state = useContext(CtxState);
  const navigate = useNavigate();
  const [input, setInput] = useState({
    logEmail: "",
    logPsw: "",
  });
  const { isLogin } = state;
  const { logEmail, logPsw } = input;

  const [login, setLogin] = useState(isLogin);

  const ChangeFn = (evt) => {
    const { id, value } = evt.target;
    setInput((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <>
      <LoginContainer style={{ display: login ? "none" : "block" }}>
        <Title>Login</Title>
        <Form
          onSubmit={(evt) => {
            evt.preventDefault();
            // navigate("/");
            setLogin(!login);
          }}
        >
          <Label htmlFor="logEmail">
            <Email
              value={logEmail}
              onChange={ChangeFn}
              name="logEmail"
              id="logEmail"
              placeholder="Your email address"
              autoFocus
            />
          </Label>
          <Label htmlFor="logPsw">
            <Password
              type="password"
              value={logPsw}
              onChange={ChangeFn}
              name="logPsw"
              id="logPsw"
              placeholder="Your password"
            />
          </Label>
          <Link>Forgot your password?</Link>
          <LoginButton
            onClick={(evt) => {
              evt.preventDefault();
              // navigate("/");
              setLogin(!login);
            }}
          >
            Login
          </LoginButton>
        </Form>
        <Link to={"/account/register"}>Create an account</Link>
      </LoginContainer>

      <LogOutContainer style={{ display: login ? "block" : "none" }}>
        <p>myPage</p>
        <Logout
          onClick={(evt) => {
            evt.preventDefault();
            setInput({
              logEmail: "",
              logPsw: "",
            });
            setLogin(!login);
          }}
        >
          logOut
        </Logout>
      </LogOutContainer>
    </>
  );
};

export default Login;
