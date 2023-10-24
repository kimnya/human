import React, { useContext } from "react";
import { CtxState } from "../context/HumanCtxprovider";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const state = useContext(CtxState);

  const { search, keyword } = state;
  return <div>{keyword}</div>;
};

export default SearchPage;
