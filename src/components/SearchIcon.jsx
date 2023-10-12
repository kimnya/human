import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CtxState } from "../context/HumanCtxprovider";

const Search = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  width: 99vw;
  height: 300px;
  background-color: #fff;
  transform: translate(-50%, 0);
  height: 100px;
  &.on {
    display: block;
    top: 130px;
    z-index: 300;
  }

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

const SearchIcon = ({ search, setShop }) => {
  const state = useContext(CtxState);
  const { allItem } = state;
  const $input = useRef(null);
  const [keyward, setKeyward] = useState("");

  const searchFn = () => {
    setShop((prev) => ({ ...prev, search: !state.search }));
    $input.current.focus();
  };

  const searchOffFn = () => {
    setShop(!search);
  };

  const searchChange = (evt) => {
    setKeyward(evt.target.value);
  };

  const searchSubmitFn = (evt) => {
    evt.preventDefault();
  };

  return (
    <>
      <i class="fas fa-search" onClick={searchFn}></i>
      <Search className={search ? "on" : ""}>
        <div className="searchBox">
          <form action="#">
            <label htmlFor="keyward">
              <input
                type="text"
                id="keyward"
                value={keyward}
                autoComplete="off"
                autoFocus
                ref={$input}
                placeholder="검색"
                onChange={searchChange}
              />
              <i class="fas fa-search" onClick={searchSubmitFn}></i>
              <i class="fas fa-times" onClick={searchOffFn}></i>
            </label>
          </form>
        </div>
      </Search>
    </>
  );
};

export default SearchIcon;
