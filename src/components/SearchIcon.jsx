import React, { useContext, useState } from "react";
import styled from "styled-components";
import { CtxState } from "../context/HumanCtxprovider";

const SubNav = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  top: -9999px;
  width: 99vw;
  height: 300px;
  background-color: #fff;
  transform: translate(-50%, 0);

  &.show {
    display: block;
    top: 20px;
    z-index: 100;
  }
`;

const Search = styled(SubNav)`
  height: 100px;
  &.on {
    display: block;
    top: 130px;
    z-index: 100;
  }
  > .searchBox {
    display: flex;
    justify-content: flex-start;
    align-items: bottom;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 500px;
    height: 40px;
    border-bottom: 1px solid black;
    transform: translate(-50%, -50%);
    > input {
      width: 90%;
      border: none;
      outline: none;
      padding-left: 40px;
    }
    > i {
      margin-right: 20px;
      &:last-child {
        margin: 0;
      }
    }
  }
`;

const SearchIcon = ({ search }) => {
  //   const state = useContext(CtxState);
  //   const [shop, setShop] = useState(state);

  //   const { search } = shop;

  const [offSearch, setOffSearch] = useState(search);

  const searchOutFn = () => {
    setOffSearch(!search);
  };

  return (
    <>
      <Search className={search ? "on" : "off"}>
        <div className="searchBox">
          <input type="text" />
          <i class="fas fa-search"></i>
          <i class="fas fa-times" onClick={searchOutFn}></i>
        </div>
      </Search>
    </>
  );
};

export default SearchIcon;
