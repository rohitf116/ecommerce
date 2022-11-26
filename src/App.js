import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Main from "./component/main/Main";
import Cart from "./component/cart/Cart";
import LoginScreen from "./screen/LoginScreen";
import ProductScreen from "./screen/ProductScreen";
const Login = () => {
  return (
    <div>
      <h1>login</h1>
    </div>
  );
};
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Main className="main" />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="/products/:id" element={<ProductScreen />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
