import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CtxState } from "../context/HumanCtxprovider";

const LoginContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  position: absolute;
  left: 50%;
  top: 50%;
  p {
    color: #f00;
  }

  margin: 0 auto;
  transform: translate(-50%, -50%);
`;
const Title = styled.h2`
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  height: 320px;
`;

const Label = styled.label``;
const FirstName = styled.input`
  width: 440px;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #ccc;
`;

const RegisterButton = styled.button`
  width: 450px;
  height: 40px;
  margin: 10px 0 0 0;
  line-height: 40px;
  text-align: center;
  color: #fff;
  background-color: #000;
  &:disabled {
    background: #999;
  }
`;

const LastName = styled(FirstName)``;
const Email = styled(FirstName)``;
const Password = styled(FirstName)``;

const Register = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    fName: "",
    lName: "",
    regiEmail: "",
    regiPsw: "",
  });

  const [isInput, setIsInput] = useState({
    isFname: false,
    isLname: false,
    isRegiEmail: false,
    isRegiPsw: false,
  });

  const [error, setError] = useState({
    eFname: "",
    eLname: "",
    eEmail: "",
    ePsw: "",
  });

  const [on, setOn] = useState(false);

  const { fName, lName, regiEmail, regiPsw } = input;
  const { eFname, eLname, eEmail, ePsw } = error;
  const { isFname, isLname, isRegiEmail, isRegiPsw } = isInput;

  const isFnameChangeFn = (evt) => {
    const { id, value } = evt.target;

    setInput((prev) => ({
      ...prev,
      [id]: value,
    }));
    const currentIsFname = value.trim();

    const isFnameRegExp = /^[a-zA-z가-힣]{1,12}$/;

    if (!isFnameRegExp.test(currentIsFname)) {
      setError((prev) => ({
        ...prev,
        eFname: "한글 또는 영문으로 입력해주세요  ",
      }));
      setIsInput((prev) => ({
        ...prev,
        isFname: false,
      }));
    } else {
      setError((prev) => ({ ...prev, eFname: "확인 되었습니다." }));
      setIsInput((prev) => ({
        ...prev,
        isFname: true,
      }));
    }
    if (currentIsFname === "") {
      setError((prev) => ({ ...prev, eFname: "" }));
    }
  };

  const isLnameChangeFn = (evt) => {
    const { id, value } = evt.target;

    setInput((prev) => ({
      ...prev,
      [id]: value,
    }));
    const currentIsLname = value.trim();

    const isLnameRegExp = /^[a-zA-z가-힣]{1,12}$/;

    if (!isLnameRegExp.test(currentIsLname)) {
      setError((prev) => ({
        ...prev,
        eLname: "한글 또는 영문으로 입력해주세요  ",
      }));
      setIsInput((prev) => ({
        ...prev,
        isLname: false,
      }));
    } else {
      setError((prev) => ({ ...prev, eLname: "확인 되었습니다." }));
      setIsInput((prev) => ({
        ...prev,
        isLname: true,
      }));
    }
    if (currentIsLname === "") {
      setError((prev) => ({ ...prev, eLname: "" }));
    }
  };

  const emailChangeFn = (evt) => {
    const { id, value } = evt.target;

    setInput((prev) => ({
      ...prev,
      [id]: value,
    }));

    const currentEmail = value.trim();
    // setInput(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setError((prev) => ({
        ...prev,
        eEmail: "이메일의 형식이 올바르지 않습니다!",
      }));
      setIsInput((prev) => ({
        ...prev,
        isRegiEmail: false,
      }));
    } else {
      setError((prev) => ({ ...prev, eEmail: "사용 가능한 이메일 입니다." }));
      setIsInput((prev) => ({
        ...prev,
        isRegiEmail: true,
      }));
    }
    if (currentEmail === "") {
      setError((prev) => ({ ...prev, eEmail: "" }));
    }
  };

  const regiPswChangeFn = (evt) => {
    const { id, value } = evt.target;

    setInput((prev) => ({
      ...prev,
      [id]: value,
    }));

    const currentPassword = value.trim();

    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setError((prev) => ({
        ...prev,
        ePsw: "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!",
      }));
      setIsInput((prev) => ({
        ...prev,
        isRegiPsw: false,
      }));
    } else {
      setOn(!on);
      setError((prev) => ({
        ...prev,
        ePsw: "안전한 비밀번호 입니다.",
      }));

      setIsInput((prev) => ({
        ...prev,
        isRegiPsw: true,
      }));
    }
    if (currentPassword === "") {
      setError((prev) => ({
        ...prev,
        ePsw: "",
      }));
    }
  };

  const submitFn = (evt) => {
    evt.preventDefault();

    if (isFname && isLname && isRegiEmail && isRegiPsw) {
      navigate("/account/login");
    } else {
      alert("입력한 값을 다시 한번 체크해 주세요 ");
    }
  };

  return (
    <>
      <LoginContainer>
        <Title>REGISTER</Title>

        <Form onSubmit={submitFn}>
          <Label htmlFor="fName">
            <FirstName
              onChange={isFnameChangeFn}
              value={fName}
              id="fName"
              placeholder="FirstName"
              autoFocus
            />
            <p>{eFname}</p>
          </Label>

          <Label htmlFor="lName">
            <LastName
              onChange={isLnameChangeFn}
              value={lName}
              id="lName"
              placeholder="LastName "
            />
            <p>{eLname}</p>
          </Label>

          <Label htmlFor="regiEmail">
            <Email
              onChange={emailChangeFn}
              value={regiEmail}
              id="regiEmail"
              placeholder="Email "
            />
            <p>{eEmail}</p>
          </Label>

          <Label htmlFor="regiPsw">
            <Password
              type="password"
              onChange={regiPswChangeFn}
              value={regiPsw}
              id="regiPsw"
              placeholder="Password "
            />
            <p>{ePsw}</p>
          </Label>
          <RegisterButton
            disabled={on ? false : true}
            style={{ backgroundColor: on ? "#000" : "#ccc" }}
          >
            CREATE MY ACCONUT
          </RegisterButton>
        </Form>
      </LoginContainer>
    </>
  );
};

export default Register;
