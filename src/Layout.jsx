import React, { useContext, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import title from "./asset/title.png";
import title2 from "./asset/title2.png";
import HumanCtxprovider, { CtxState } from "./context/HumanCtxprovider";
import Home from "./pages/Home";
import { useEffect } from "react";
import SubMenu from "./components/SubMenu";
import SearchIcon from "./components/SearchIcon";

const GlobalStyle = createGlobalStyle`


html,
body {
	width: 100%;
	height: 100%;
}

html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
code,
blockquote,
abbr,
sub,
sup,
time,
em,
strong,
img,
q,
dl,
dt,
dd,
address,
cite,
ul,
ol,
li,
header,
section,
footer,
article,
nav,
aside,
table,
caption,
thead,
tbody,
tfoot,
tr,
td,
th,
form,
fieldset,
legend,
label {
	margin: 0;
	padding: 0;
}

ul,
ol,
li {
	list-style: none;
}
q {
	quotes: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
textarea {
	resize: none;
}

a:link {
	color: #222;
	text-decoration: none;
}
a:visited {
	color: #222;
}
a:hover {
	color: #222;
}
a:active {
	color: #222;
}

em,
address {
	font-style: normal;
}
hr,
caption,
legend {
	display: none;
}
img,
fieldset {
	border: none;
}
label,
button {
	cursor: pointer;
}

body {
	color: #222;
	font-size: 12px;
	/* font-size:0.8em; */
	line-height: 1.2;
	font-family: 'Nanum Gothic', 돋움, 굴림;
}

.text-center {
	height: 100px;
	line-height: 100px;
	text-align: center;
}

.text-hide {
	display: none;
}

/* 스크린리더가 읽을 수 있어 접근성이 향상됨 */
.sr-only {
	position: absolute;
	left: -9999px;
}

.clearfix {
	*zoom: 1;
}

.clearfix:after {
	display: block;
	clear: both;
	content: '';
}

`;

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
const Menu = styled.p`
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
  > div {
    width: 50%;
    display: block;
    position: absolute;
    left: 50%;
    background-color: #fff;
    transform: translate(-50%, 0);
  }
`;
const SecondLogo = styled.div`
  top: 300px;
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
  const [shop, setShop] = useState(state);

  const { show, search } = shop;

  const shopFn = () => {
    setShop((prev) => ({ ...prev, show: !state.show }));
  };

  const shopOutFn = () => {
    setShop(!show);
  };

  const homeFn = () => {
    navigate("/");
  };
  const loginFn = () => {
    navigate("/account/login");
  };

  return (
    <>
      <GlobalStyle />
      <HumanCtxprovider>
        <DivContianer>
          <Header>
            <User>
              <i class="far fa-user" onClick={loginFn}></i>
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
                <SubMenu show={show} setShop={setShop} />
              </NavLink>
              <NavLink to={`/news`}>NEWS</NavLink>
              <NavLink to={`/about`}>ABOUT</NavLink>
            </Nav>

            <Menu>
              <SearchIcon search={search} setShop={setShop} />
              <i class="fas fa-shopping-bag"></i>

              <i class="fas fa-bars"></i>
            </Menu>
          </Header>

          <Section>
            <Shadow className={search || show ? "on" : ""} />
            <Outlet />
          </Section>

          <Footer>
            <SubMenu className="footNav" />
            {/* <SubNav className="ect">
              <LnbContainer>
                <Lnb>
                  <li>뉴스레터 등록</li>

                  <li>HUMAN MADE 취급점포</li>

                  <li>이용약관</li>

                  <li>
                    배송지 :
                    <Selection>
                      <option>대한민국</option>
                      <option>일본</option>
                      <option>중국</option>
                    </Selection>
                  </li>
                </Lnb>
                <Lnb>
                  <li>배송방법 *우송료에 대해</li>

                  <li>지불방법에 대해</li>

                  <li>개인정보취급방침</li>

                  <li>위조품*모방품 방지 대책에 관하여 </li>
                </Lnb>
                <Lnb>
                  <li>FAQ</li>

                  <li>각종문의</li>

                  <li>특정 상거래법에 근거한 표기 </li>
                </Lnb>
              </LnbContainer>
            </SubNav> */}
            <SecondLogo className="logo" />
          </Footer>
        </DivContianer>
      </HumanCtxprovider>
    </>
  );
};

export default Layout;
