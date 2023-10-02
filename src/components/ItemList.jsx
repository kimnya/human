import React, { useContext } from "react";
import styled from "styled-components";
import { CtxState } from "../context/HumanCtxprovider";
import { Link } from "react-router-dom";

const List = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const Item = styled.li``;

const Items = ({ item }) => {
  const { name, img, price, id } = item;
  return (
    <Item>
      <Link to={`/products/${id - 1}`}>
        <img src={img} alt={name} />
        <p>
          <span>{name}</span>
        </p>
        <span>${price}</span>
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
          return <Items key={item.id} item={item} />;
        })}
      </List>
    </>
  );
};

export default ItemList;
