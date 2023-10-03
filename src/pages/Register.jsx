import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  position: absolute;
  left: 50%;
  top: 50%;
  height: 300px;
  margin: 0 auto;
  transform: translate(-50%, -50%);
`;
const Title = styled.h2`
  margin: 0 auto;
`;

const FirstName = styled.input`
  width: 440px;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #ccc;
`;

const RegisterButton = styled.button`
  width: 450px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: #000;
`;
const LastName = styled(FirstName)``;
const Email = styled(FirstName)``;
const Password = styled(FirstName)``;

const Register = () => {
  return (
    <>
      <LoginContainer>
        <Title>REGISTER</Title>

        <FirstName placeholder="FirstName " autoFocus />
        <LastName placeholder="LastName " />
        <Password placeholder="Password " />
        <Email placeholder="Email " />
        <RegisterButton>CREATE MY ACCONUT</RegisterButton>
      </LoginContainer>
    </>
  );
};

export default Register;
