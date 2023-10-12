import React, { useContext } from "react";
import ItemList from "../components/ItemList";
import styled from "styled-components";

const Title = styled.h2`
  width: 400px;
  margin: 100px auto;
  font-size: 32px;
  text-align: center;
`;

const All = () => {
  return (
    <>
      <Title>ALL ITEMS</Title>
      <ItemList />
    </>
  );
};

export default All;
