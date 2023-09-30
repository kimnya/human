import React, { useContext, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { NavLink, Outlet } from "react-router-dom";
import title from "./asset/title.png";
import title2 from "./asset/title2.png";
import HumanCtxprovider, { CtxState } from "./context/HumanCtxprovider";

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

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  /* min-width: 1280px; */
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
    content: "dd";
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

const SubNav = styled.div`
  position: absolute;
  left: 50%;
  top: -9999px;
  z-index: 100;
  width: 110vw;
  height: 300px;
  background-color: #fff;
  transform: translate(-50%, 0);
  transition: 0.3s;

  &.show {
    top: 20px;
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
  width: 280px;
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

const User = styled.div`
  > i {
    margin: 20px;
    font-size: 22px;
  }
`;
const Menu = styled.p`
  > i {
    margin-right: 20px;
    font-size: 18px;
  }
`;

const Search = styled(SubNav)`
  height: 100px;
  &.on {
    top: 130px;
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

const Section = styled.section`
  position: relative;
  width: 100vw;
  height: 1600px;
  border: 1px solid gold;
`;

const Shadow = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  position: absolute;
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

  > .footNav {
    top: 0;
    > div {
      /* border: none; */
      border-bottom: 1px solid #ccc;
      > ul {
        border: none;
        > li {
          text-align: left;
        }
      }
    }
  }
  > .ect {
    top: 250px;
    > div {
      /* border: none; */
      > ul {
        border: none;
        > li {
          text-align: left;
        }
      }
    }
  }
`;
const SecondLogo = styled.div`
  top: 550px;
  width: 207px;
  height: 37px;
  background-image: url(${title2});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  transform: translate(-50%, 0);
`;

const Layout = () => {
  const state = useContext(CtxState);

  const [shop, setShop] = useState(state);
  const { show, search } = shop;

  const shopFn = () => {
    setShop((prev) => ({ ...prev, show: !state.show }));
  };

  const shopOutFn = () => {
    setShop(!show);
  };

  const searchFn = () => {
    setShop((prev) => ({ ...prev, search: !state.search }));
  };

  const searchOutFn = () => {
    setShop(!search);
    console.log(search);
  };

  return (
    <>
      <GlobalStyle />
      <HumanCtxprovider>
        <Header>
          <User>
            <i class="far fa-user"></i>
            <Selection>
              <option>한국어</option>
              <option>English</option>
              <option>일본어</option>
            </Selection>
          </User>
          <Logo src={title}></Logo>

          <Nav>
            <NavLink onMouseOver={shopFn} onMouseOut={shopOutFn}>
              SHOP
              <SubNav className={show ? "show" : ""}>
                <LnbContainer>
                  <Lnb>
                    <li>
                      {" "}
                      <NavLink to={`/collections/all`}>모든아이템</NavLink>
                    </li>

                    <li>
                      {" "}
                      <NavLink>신상품</NavLink>
                    </li>

                    <li>아우터</li>

                    <li>셔츠</li>

                    <li>티셔츠</li>

                    <li>니트 커트소</li>
                  </Lnb>
                  <Lnb>
                    <li>
                      {" "}
                      <NavLink>하의</NavLink>
                    </li>

                    <li>신발</li>

                    <li>모자</li>

                    <li>가방 & 파우치</li>

                    <li>엑세서리</li>

                    <li>이너웨어</li>
                  </Lnb>
                  <Lnb>
                    <li>홈 & 라이프 스타일</li>

                    <li>협업 아이템</li>

                    <li>Wasted Youth</li>

                    <li>CACTUS PLANT FLEA MARKET</li>
                  </Lnb>
                </LnbContainer>
              </SubNav>
            </NavLink>
            <NavLink to={`/news`}>NEWS</NavLink>
            <NavLink to={`/about`}>ABOUT</NavLink>
          </Nav>

          <Menu>
            <i class="fas fa-search" onClick={searchFn}>
              <Search className={search ? "on" : ""}>
                <div className="searchBox">
                  <input type="text" />
                  <i class="fas fa-search"></i>
                  <i class="fas fa-times" onClick={searchOutFn}></i>
                </div>
              </Search>
            </i>

            <i class="fas fa-shopping-bag"></i>

            <i class="fas fa-bars"></i>
          </Menu>
        </Header>

        <Section>
          <Shadow className={search ? "on" : ""} />
          <Outlet />
        </Section>
        <Footer>
          <SubNav className="footNav">
            <LnbContainer>
              <Lnb>
                <li>모든아이템</li>

                <li>신상품</li>

                <li>아우터</li>

                <li>셔츠</li>

                <li>티셔츠</li>

                <li>니트 커트소</li>
              </Lnb>
              <Lnb>
                <li>하의</li>

                <li>신발</li>

                <li>모자</li>

                <li>가방 & 파우치</li>

                <li>엑세서리</li>

                <li>이너웨어</li>
              </Lnb>
              <Lnb>
                <li>홈 & 라이프 스타일</li>

                <li>협업 아이템</li>

                <li>Wasted Youth</li>

                <li>CACTUS PLANT FLEA MARKET</li>
              </Lnb>
            </LnbContainer>
          </SubNav>
          <SubNav className="ect">
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
          </SubNav>
          <SecondLogo className="logo" />
        </Footer>
      </HumanCtxprovider>
    </>
  );
};

export default Layout;
