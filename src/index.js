import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Top from "./components/Top";
import HumanCtxprovider from "./context/HumanCtxprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Top />
    <HumanCtxprovider>
      <App />
    </HumanCtxprovider>
  </BrowserRouter>
);
