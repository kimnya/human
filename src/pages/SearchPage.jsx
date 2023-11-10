import React, { useContext, useState } from "react";
import { CtxDispatch, CtxState } from "../context/HumanCtxprovider";

import styled from "styled-components";

import ItemList from "../components/ItemList";

const InputBox = styled.div`
  width: 460px;
  margin: 40px auto;

  > form {
    > label {
      display: flex;
      justify-content: center;
      align-items: center;
      > input {
        width: 400px;
        height: 25px;
        padding-left: 10px;
      }
      > i {
        margin: 0 20px;
        font-size: 16px;
      }
    }
  }
`;
const Title = styled.h2`
  width: 400px;
  margin: 20px auto;
  font-size: 24px;
  text-align: center;
`;

const SearchPage = () => {
  const state = useContext(CtxState);
  const dispatch = useContext(CtxDispatch);
  const [research, setResearch] = useState();

  const { keyword } = state;

  const reserchChange = (evt) => {
    setResearch(evt.target.value);
    console.log(research);
  };

  const researchsubmitFn = (evt) => {
    evt.preventDefault();
    const keyword = research;
    dispatch({ type: "KEYWORD", data: { keyword } });
    setResearch("");
  };

  return (
    <>
      <Title>{`검색하신 단어는 ${keyword} 입니다.`}</Title>

      <InputBox>
        <form action="#" onSubmit={researchsubmitFn}>
          <label htmlFor="research">
            <input
              type="text"
              id="research"
              value={research}
              onChange={reserchChange}
              placeholder="재검색 "
              autoFocus
              autoComplete="off"
            />
            <i class="fas fa-search" onClick={researchsubmitFn}></i>
          </label>
        </form>
      </InputBox>
      <ItemList />
    </>
  );
};

export default SearchPage;
