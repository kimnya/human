import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import title from "./asset/title.png";
import title2 from "./asset/title2.png";
import HumanCtxprovider, {
  CtxDispatch,
  CtxState,
} from "./context/HumanCtxprovider";
import SubMenu from "./components/SubMenu";
import SearchIcon from "./components/SearchIcon";
import Top from "./components/Top";
import * as G from "./globalStyled";

const DivContianer = styled.div`
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  height: 130px;
  background-color: #fff;
`;
const Selection = styled.select`
  border: none;
  outline: none;
  &:after {
    border: 0px solid;
    border-color: black, transparent, transparent, transparent;
    content: "";
  }
`;

const Logo = styled.img`
  display: block;
  position: absolute;
  left: 50%;
  top: 10px;
  width: 74px;
  height: auto;
  transform: translate(-50%, 0);
`;

const Nav = styled.nav`
  display: flex;
  position: absolute;
  left: calc(50% - 300px);
  bottom: 5px;
  > a {
    display: block;
    width: 100px;
    height: 20px;
    margin-right: 150px;
    font-size: 13px;
    text-align: center;

    &:last-child {
      margin: 0;
    }
  }
`;

const User = styled.div`
  > i {
    margin: 20px;
    font-size: 22px;
  }
  > p {
    display: none;
    > span {
      letter-spacing: 2px;
      font-weight: bold;
      font-size: 16px;
      text-decoration: underline;
    }
    &.ment {
      display: block;
    }
  }
`;
const Menu = styled.div`
  > i {
    margin-right: 20px;
    font-size: 18px;
  }
`;

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 800px;
  margin-bottom: 300px;
`;

const Shadow = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 200;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: #000;
  opacity: 70%;
  &.on {
    display: block;
  }
`;

const Footer = styled.footer`
  position: relative;
  height: 377px;
`;
const SecondLogo = styled.div`
  position: absolute;
  left: 50%;
  bottom: 40px;
  width: 207px;
  height: 37px;
  background-image: url(${title2});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transform: translate(-50%, 0);
`;

const Layout = () => {
  const navigate = useNavigate();
  const state = useContext(CtxState);
  const dispatch = useContext(CtxDispatch);

  const { show, search } = state;

  const shopFn = () => {
    dispatch({ type: "SHOW" });
  };

  const shopOutFn = () => {
    dispatch({ type: "OFFSHOW" });
  };
  const homeFn = () => {
    navigate("/");
    // dispatch({ type: "PAGECHANGE" });
    // alert("keyword=" + keyword);
  };
  const loginFn = () => {
    navigate("/account/login");
  };

  const searchFn = () => {
    dispatch({ type: "SEARCH" });
  };
  const searchOffFn = () => {
    dispatch({ type: "OFFSEARCH" });
  };

  return (
    <>
      <G.GlobalStyle />
      <HumanCtxprovider>
        <DivContianer>
          <Header>
            <User>
              <i className="far fa-user" onClick={loginFn}></i>
              <Selection>
                <option>한국어</option>
                <option>English</option>
                <option>일본어</option>
              </Selection>
            </User>

            <Logo onClick={homeFn} src={title}></Logo>

            <Nav>
              <NavLink onMouseOver={shopFn} onMouseOut={shopOutFn}>
                SHOP
                {show ? <SubMenu shopOutFn={shopOutFn} /> : <null />}
              </NavLink>
              <NavLink to={`/news`}>NEWS</NavLink>
              <NavLink to={`/about`}>ABOUT</NavLink>
            </Nav>

            <Menu>
              <i className="fas fa-search" onClick={searchFn}>
                {search ? <SearchIcon searchOffFn={searchOffFn} /> : null}
                {/* 굳이 SearchIcon 컴포넌트에 i태그를 넣어놓고 search데이터값을 props로 넘기느니 이 방법이 코드가 간편하다.   */}
              </i>

              <i class="fas fa-shopping-bag"></i>

              <i class="fas fa-bars"></i>
            </Menu>
          </Header>

          <Section>
            <Shadow className={search || show ? "on" : ""} />
            <Outlet />
          </Section>

          <Footer>
            <SubMenu />

            <SecondLogo className="logo" />
          </Footer>
          <Top />
        </DivContianer>
      </HumanCtxprovider>
    </>
  );
};

export default Layout;
