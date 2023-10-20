import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CtxState } from "../context/HumanCtxprovider";

const SubNav = styled.div`
  display: block;
  position: absolute;
  z-index: 300;
  left: 50%;
  top: 20px;
  width: 99vw;
  height: 300px;
  background-color: #fff;
  transform: translate(-50%, 0);

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

const Menu = ({ name, shopOutFn }) => {
  return (
    <li>
      <NavLink onClick={shopOutFn} to={`/collections/all`}>
        {name}
      </NavLink>
    </li>
  );
};

const SubMenu = ({ shopOutFn }) => {
  const state = useContext(CtxState);
  const { subMenu1, subMenu2, subMenu3 } = state;
  return (
    <>
      <SubNav>
        <LnbContainer>
          <Lnb>
            {subMenu1.map((menu, idx) => {
              const { name } = menu;
              return <Menu shopOutFn={shopOutFn} name={name} key={idx} />;
            })}
          </Lnb>
          <Lnb>
            {subMenu2.map((menu, idx) => {
              const { name } = menu;
              return <Menu shopOutFn={shopOutFn} name={name} key={idx} />;
            })}
          </Lnb>
          <Lnb>
            {subMenu3.map((menu, idx) => {
              const { name } = menu;
              return <Menu shopOutFn={shopOutFn} name={name} key={idx} />;
            })}
          </Lnb>
        </LnbContainer>
      </SubNav>
    </>
  );
};

export default SubMenu;
