import { Routes, Route } from "react-router-dom";

import Home from "./pages/customer/Home";
import Shop from "./pages/customer/Shop";
import Category from "./pages/customer/Category";
import CategoryProducts from "./pages/customer/CategoryProducts";
import Deals from "./pages/customer/Deals";
import Cart from "./pages/customer/Cart";
import Wishlist from "./pages/customer/Wishlist";
import ProductDetails from "./pages/customer/ProductDetails";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Checkout from "./pages/customer/Checkout";
import Orders from "./pages/customer/Orders";
import Profile from "./pages/customer/Profile";
import Contact from "./pages/customer/Contact";
import AIAssistant from "./pages/customer/AIAssistant";
import Compare from "./pages/customer/Compare";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/shop" element={<Shop />} />

      <Route path="/categories" element={<Category />} />

      <Route
        path="/category/:category"
        element={<CategoryProducts />}
      />

      <Route path="/deals" element={<Deals />} />

      <Route path="/contact" element={<Contact />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/wishlist" element={<Wishlist />} />

      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
  path="/checkout"
  element={<Checkout />}
/>

<Route
  path="/orders"
  element={<Orders />}
/>

<Route
  path="/profile"
  element={<Profile />}
/>

<Route
  path="/contact"
  element={<Contact />}
/>

<Route
  path="/ai-assistant"
  element={<AIAssistant />}
/>

<Route
  path="/compare"
  element={<Compare />}
/>

    </Routes>
  );
}

export default App;