import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import All from "./pages/All";

const { PUBLIC_URL } = process.env;

function App() {
  return (
    <BrowserRouter basename={PUBLIC_URL}>
      <Routes>
        <Route path={`/`} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="all" element={<All />} />
          <Route path="news" element={<News />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
