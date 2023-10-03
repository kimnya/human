import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
const Email = styled.input`
  width: 440px;
  height: 40px;
  padding-left: 15px;
  border: 1px solid #ccc;
`;
const Password = styled(Email)``;

const LoginButton = styled.button`
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: #000;
`;

const Login = () => {
  return (
    <>
      <LoginContainer>
        <Title>Login</Title>
        <Email placeholder="Your email address" />
        <Password placeholder="Your password" />
        <Link>Forgot your password?</Link>
        <LoginButton>Login</LoginButton>
        <Link to={"/account/register"}>Create an account</Link>
      </LoginContainer>
    </>
  );
};

export default Login;
