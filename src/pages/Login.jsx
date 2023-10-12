import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import HumanCtxprovider, {
  CtxDispatch,
  CtxState,
} from "../context/HumanCtxprovider";

const LoginContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  left: 50%;
  top: 50%;
  height: 300px;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  a {
    text-decoration: underline;
    &:nth-of-type(1) {
      align-self: flex-start;
    }
  }
`;
const Title = styled.h2``;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  height: 100px;
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
  width: 100px;
  height: 40px;
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
      <LoginContainer style={{ display: login ? "none" : "blok" }}>
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
        <Link>Forgot your password?</Link>
        <Link to={"/account/register"}>Create an account</Link>
      </LoginContainer>

      <LogOutContainer style={{ display: login ? "block" : "none" }}>
        <p>여기까지 왔다니 대단하다!!</p>
        <Logout
          onClick={(evt) => {
            evt.preventDefault();
            // navigate("/");
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
