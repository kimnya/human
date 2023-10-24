import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CtxDispatch, CtxState } from "../context/HumanCtxprovider";
import { useNavigate } from "react-router-dom";

const Search = styled.div`
  position: absolute;
  z-index: 300;
  left: 50%;
  top: 130px;
  width: 99vw;
  height: 300px;
  background-color: #fff;
  transform: translate(-50%, 0);
  height: 100px;

  > .searchBox {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 500px;
    height: 30px;
    border-bottom: 1px solid black;
    transform: translate(-50%, -50%);
    > form {
      > label {
        display: flex;
        justify-content: flex-start;
        align-items: bottom;
        > input {
          width: 90%;
          border: none;
          outline: none;
          padding-left: 10px;
        }
        > i {
          margin-right: 20px;
          font-size: 16px;
          &:last-child {
            margin: 0;
          }
        }
      }
    }
  }
`;

const SearchIcon = ({ searchOffFn }) => {
  const [keyword, setKeyward] = useState("");
  const dispatch = useContext(CtxDispatch);
  const navigate = useNavigate();

  const searchChange = (evt) => {
    setKeyward(evt.target.value);
  };

  const keywordFn = (evt) => {
    evt.preventDefault();
    setKeyward("");
    dispatch({ type: "KEYWORD", data: { keyword } });
    navigate("/search");
  };

  const keywordFnEnter = (evt) => {
    evt.preventDefault();
    if (evt.key == 13) {
      keywordFn();
    }
  };
  return (
    <>
      <Search>
        <div className="searchBox">
          <form onSubmit={keywordFnEnter}>
            {/* onSubmit이벤트일때만 search창이 안없어지는 거였다.. 왜??  enterKey가 안먹히는 듯*/}
            <label htmlFor="keyword">
              <input
                type="text"
                id="keyword"
                value={keyword}
                autoComplete="off"
                autoFocus
                placeholder="검색"
                onChange={searchChange}
              />
              <i class="fas fa-search" onClick={keywordFn}></i>
              <i class="fas fa-times" onClick={searchOffFn}></i>
            </label>
          </form>
        </div>
      </Search>
    </>
  );
};

export default SearchIcon;
