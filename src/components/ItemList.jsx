import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { CtxData, CtxState } from "../context/HumanCtxprovider";
import { Link } from "react-router-dom";
import axios from "axios";

const List = styled.ul`
  display: flex;
  justify-content: center;
  width: 95%;
  margin: 10px auto 0;
`;

const Item = styled.li``;

const ImgBox = styled.div`
  position: relative;
  width: 380px;
  height: 420px;
  &:hover > div {
    display: block;
  }
  &:hover > img {
    transform: scale(1.02);
  }
  > img {
    width: 100%;
  }
`;
const Shadow = styled.div`
  display: none;
  width: 100%;
  height: 380px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  background-color: #000;
  opacity: 20%;
`;
const Img = styled.img`
  transition: all 0.3s;
`;
const Items = ({ item }) => {
  const { title, productId, lprice, image } = item;
  return (
    <Item>
      <Link to={`/products/${productId}`}>
        <ImgBox>
          <Shadow />
          <Img src={image} alt={title} />
        </ImgBox>

        <p>
          <span>
            {title.replace(
              /배송|국내|해외|당일|<b>|휴먼|메이드|<\/b>|[a-z]|[A-Z]|[0-9]|일본|-/g,
              ""
            )}
          </span>
        </p>
        <span>\{lprice}</span>
      </Link>
    </Item>
  );
};

const ItemList = () => {
  const data = useContext(CtxData);

  return (
    <>
      <List>
        {data.map((item) => {
          return <Items key={item.productId} item={item} />;
        })}
      </List>
    </>
  );
};

export default ItemList;
