import React, { useContext } from "react";
import styled from "styled-components";
import { CtxState } from "../context/HumanCtxprovider";
import { Link } from "react-router-dom";

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
  height: 380px;
  &:hover > div {
    display: block;
  }
  &:hover > img {
    transform: scale(1.05);
  }
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
  z-index: 100;
  background-color: #000;
  opacity: 20%;
`;
const Img = styled.img`
  transition: all 0.3s;
`;
const Items = ({ item }) => {
  const { name, img, price, id } = item;
  return (
    <Item>
      <Link to={`/products/${id - 1}`}>
        <ImgBox>
          <Shadow />
          <Img src={img} alt={name} />
        </ImgBox>

        <p>
          <span>{name}</span>
        </p>
        <span>\{price}</span>
      </Link>
    </Item>
  );
};

const ItemList = () => {
  const state = useContext(CtxState);

  const { allItem } = state;

  return (
    <>
      <List>
        {allItem.map((item) => {
          return <Items onClick={() => {}} key={item.id} item={item} />;
        })}
      </List>
    </>
  );
};

export default ItemList;
