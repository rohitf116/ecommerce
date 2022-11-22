import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Main from "./component/main/Main";
import Cart from "./component/cart/Cart";
import ProductScreen from "./screen/ProductScreen";
import { useState, useEffect } from "react";
import Axios from "axios";
const Login = () => {
  return (
    <div>
      <h1>login</h1>
    </div>
  );
};
const App = () => {
  const [start, setStart] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await Axios.get("http://localhost:3001/products");
      setStart(data.data);
    };
    fetchdata();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main className="main" start={start} />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="/products/:id" element={<ProductScreen />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
