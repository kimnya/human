import React, { useContext } from "react";
import styled from "styled-components";
import { CtxState } from "../context/HumanCtxprovider";

const List = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Item = styled.li`
  border: 1px solid gold;
`;

const Items = ({ item }) => {
  const { name, img, price } = item;
  return (
    <Item>
      <img src={img} alt={name} />
      <p>
        <span>{name}</span>
      </p>
      <span>${price}</span>
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
          return <Items key={item.id} item={item} />;
        })}
      </List>
    </>
  );
};

export default ItemList;
