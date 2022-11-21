import { Route, Routes } from "react-router-dom";
import AddtoCart from "./screens/AddtoCart/AddtoCart.jsx";
import Home from "./screens/Home/Home.jsx";
import "./style.css";

function App() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/cart"} element={<AddtoCart/>} />
      </Routes>
    </>
  );
}

export default App;
