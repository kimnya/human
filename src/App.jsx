import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";
import All from "./pages/All";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path={`/`} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/collections/all" element={<All />} />

        <Route path="news" element={<News />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
