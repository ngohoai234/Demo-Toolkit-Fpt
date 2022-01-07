import { Route, Routes } from "react-router-dom";
import Detail from "../Pages/Detail/Detail";
import Home from "../Pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:idProduct" element={<Detail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
