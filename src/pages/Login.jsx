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

const Login = () => {
  const state = useContext(CtxState);
  const dispatch = useContext(CtxDispatch);
  const storage = JSON.parse(localStorage["human"] || JSON.stringify(state));
  const navigate = useNavigate();

  // const { isLogin } = state;

  const [input, setInput] = useState({
    logEmail: "",
    logPsw: "",
  });

  const { logEmail, logPsw } = input;

  const ChangeFn = (evt) => {
    const { id, value } = evt.target;
    setInput((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <>
      <HumanCtxprovider>
        <LoginContainer>
          <Title>Login</Title>
          <Form>
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
            <LoginButton>Login</LoginButton>
          </Form>
          <Link>Forgot your password?</Link>
          <Link to={"/account/register"}>Create an account</Link>
        </LoginContainer>
      </HumanCtxprovider>
    </>
  );
};

export default Login;
