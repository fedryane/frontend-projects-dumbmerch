import React from "react";
import Login from "./components/pages/Login";
import Navbar from "./components/inc/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./components/pages/Category";

// import "../src/App.css";
import Register from "./components/pages/Register";
import NavbarUser from "./components/inc/NavbarUser";
import UserHome from "./components/pages/UserHome";
import DetailProduct from "./components/pages/DetailProduct";
import Product from "./components/pages/Product";
import EditCategory from "./components/pages/EditCategory";
import EditProduct from "./components/pages/EditProduct";
import EditProductProps from "./components/inc/EditProductProps";
import Profile from "./components/pages/Profile";
import AdminComplain from "./components/pages/AdminComplain";
import UserComplain from "./components/pages/UserComplain";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/detail-product" element={<DetailProduct />} />
        <Route path="/product" element={<Product />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/complain" element={<AdminComplain />} />
        <Route path="/category" element={<Category />} />
        <Route path="/edit-category" element={<EditCategory />} />
        <Route path="/edit-product" element={<EditProduct />} />
        <Route path="/detail-product" element={<DetailProduct />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
