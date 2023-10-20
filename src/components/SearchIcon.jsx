import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CtxDispatch, CtxState } from "../context/HumanCtxprovider";

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

const SearchIcon = ({ searchFn, searchOffFn, search }) => {
  const [keyword, setKeyward] = useState("");
  const dispatch = useContext(CtxDispatch);

  const searchChange = (evt) => {
    setKeyward(evt.target.value);
  };

  const keywordFn = (evt) => {
    evt.preventDefault();
    setKeyward("");
    dispatch({ type: "KEYWORD", data: { keyword, search: false } });
  };

  return (
    <>
      <i class="fas fa-search" onClick={searchFn}></i>
      {search ? (
        <Search>
          <div className="searchBox">
            <form onSubmit={keywordFn}>
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
      ) : (
        <null />
      )}
    </>
  );
};

export default SearchIcon;
