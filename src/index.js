import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Top from "./components/Top";
import HumanCtxprovider from "./context/HumanCtxprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/* 참고로, PUBLIC_URL은 package.json의 homepage URL값으로 설정된다. */}
    <Top />
    <HumanCtxprovider>
      <App />
    </HumanCtxprovider>
  </BrowserRouter>
);
