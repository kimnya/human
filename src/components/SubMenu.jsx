import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CtxState } from "../context/HumanCtxprovider";

const SubNav = styled.div`
  display: none;
  position: absolute;
  left: 50%;
  top: 0;
  width: 99vw;
  height: 300px;
  background-color: #fff;
  transform: translate(-50%, 0);

  &.show {
    display: block;
    top: 20px;
    z-index: 300;
  }
  &.footNav {
    display: block;
    top: 0;
  }
`;

const LnbContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-55%, -50%);
`;

const Lnb = styled.ul`
  width: 370px;

  > li {
    margin-bottom: 25px;
    text-align: center;

    > a {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

const Menu = ({ name, show, setShop }) => {
  return (
    <li>
      <NavLink
        onClick={() => {
          setShop(!show);
        }}
        to={`/collections/all`}
      >
        {name}
      </NavLink>
    </li>
  );
};

const SubMenu = ({ show, setShop }) => {
  const state = useContext(CtxState);
  const { subMenu1, subMenu2, subMenu3 } = state;
  return (
    <>
      <SubNav className={show ? "show" : ""}>
        <LnbContainer>
          <Lnb>
            {subMenu1.map((menu, idx) => {
              const { name } = menu;
              return (
                <Menu setShop={setShop} show={show} name={name} key={idx} />
              );
            })}
          </Lnb>
          <Lnb>
            {subMenu2.map((menu, idx) => {
              const { name } = menu;
              return (
                <Menu setShop={setShop} show={show} name={name} key={idx} />
              );
            })}
          </Lnb>
          <Lnb>
            {subMenu3.map((menu, idx) => {
              const { name } = menu;
              return (
                <Menu setShop={setShop} show={show} name={name} key={idx} />
              );
            })}
          </Lnb>
        </LnbContainer>
      </SubNav>
    </>
  );
};

export default SubMenu;
