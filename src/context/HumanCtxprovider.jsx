import React, { createContext, useReducer } from "react";

const initialData = {
  show: false,
  search: false,
  isLogin: false,
  allItem: [
    {
      id: 1,
      category: "상의",
      name: "s/s short sleeve",
      img: "https://humanmade.jp/cdn/shop/products/1YgaS3zoQy6-toDvFNMWehvbz_Ixav2gd_360x.jpg?v=1695882304",
      price: "5,8000",
      desc: "생일 등 특별한 날을 기념한 선물로도 딱 맞는 매일 디자인의 DAILYT 셔츠 시리즈.  HUMAN MADE의 아이코닉 한 하트로고를 전신 무렵에 크게 프린트 해,뒷길에는 오늘의 날짜를 크게 프린트. 오늘밖에 손에 넣을 수 없는 스페셜 디자인입니다.※이 상품은 수주 상품이 됩니다. <br /> 수주 상품은 수주 후의 생산이되어, 상품의 신고까지 통상보다 시간이 걸립니다. 또, 배송의 일시 지정도 불가가 되고 있습니다.",
    },
    {
      id: 2,
      category: "아우터",
      name: "basic Jacket",
      img: "https://humanmade.jp/cdn/shop/products/1HtQqk-hmIzsYn6UWFTpXyotqcv4n5xgM_360x.jpg?v=1696039717",
      price: "230,800",
    },
    {
      id: 3,
      category: "하의",
      name: "basic pants",
      img: "https://humanmade.jp/cdn/shop/products/10Eejxgdd003sFimLOnwT9_DKpJRAihSC_360x.jpg?v=1695259908",
      price: "179,600",
    },
    {
      id: 4,
      category: "이우터",
      name: "sprite Jacket",
      img: "https://humanmade.jp/cdn/shop/products/1EPxqCCzNLzyt_NDeyiBa_xuwoEn1IKXs_360x.jpg?v=1696054928",
      price: "320,000",
    },
  ],
  subMenu1: [
    { name: "모든 아이템" },
    { name: "신상품" },
    { name: "아우터" },
    { name: "셔츠" },
    { name: "티셔츠" },
    { name: "니트 커트소" },
  ],
  subMenu2: [
    { name: "하의" },
    { name: "신발" },
    { name: "모자" },
    { name: "가방 & 파우치" },
    { name: "액세서리" },
    { name: "이너웨어" },
  ],
  subMenu3: [
    { name: "홈 & 라이프 스타일" },
    { name: "엽업 아이템" },
    { name: "wasted Youth" },
    { name: "CACTUS PLANT FLEA MARKET" },
  ],
};
export const CtxState = createContext(initialData);
export const CtxDispatch = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    // case 'LOGIN':
    // 	return { ...state, isLogin: !state.isLogin };

    default:
      return state;
  }
};

const HumanCtxprovider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <CtxDispatch.Provider value={dispatch}>
        <CtxState.Provider value={state}>{children}</CtxState.Provider>
      </CtxDispatch.Provider>
    </>
  );
};

export default HumanCtxprovider;
