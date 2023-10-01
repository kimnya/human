import React from "react";
import styled from "styled-components";
import bgi from "./../asset/bgi.png";
import ItemList from "../components/ItemList";

const Bgi = styled.div`
  width: 99vw;
  height: 800px;
  background-image: url(${bgi});
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Home = () => {
  return (
    <>
      <Bgi></Bgi>
      <ItemList />
    </>
  );
};

export default Home;
