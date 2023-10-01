import React, { createContext, useReducer } from "react";
import Home from "../pages/Home";

const initialData = {
  show: false,
  search: false,
  allItem: [
    {
      id: 1,
      category: "상의",
      name: "s/s short sleeve",
      img: "https://humanmade.jp/cdn/shop/products/1YgaS3zoQy6-toDvFNMWehvbz_Ixav2gd_360x.jpg?v=1695882304",
      price: "5,8000원",
    },
    {
      id: 2,
      category: "아우터",
      name: "basic Jacket",
      img: "https://humanmade.jp/cdn/shop/products/1HtQqk-hmIzsYn6UWFTpXyotqcv4n5xgM_360x.jpg?v=1696039717",
      price: "230,800원",
    },
    {
      id: 3,
      category: "하의",
      name: "basic pants",
      img: "https://humanmade.jp/cdn/shop/products/10Eejxgdd003sFimLOnwT9_DKpJRAihSC_360x.jpg?v=1695259908",
      price: "179,600원",
    },
    {
      id: 4,
      category: "이우터",
      name: "sprite Jacket",
      img: "https://humanmade.jp/cdn/shop/products/1EPxqCCzNLzyt_NDeyiBa_xuwoEn1IKXs_360x.jpg?v=1696054928",
      price: "320,000원",
    },
  ],
};

export const CtxState = createContext(initialData);

const HumanCtxprovider = ({ children }) => {
  const reducer = () => {};
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <>
      <CtxState.Provider value={state}>{children}</CtxState.Provider>
    </>
  );
};

export default HumanCtxprovider;
