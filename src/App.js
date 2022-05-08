import React, { useContext, useEffect } from "react";
import Login from "./components/pages/Login";
import Navbar from "./components/inc/Navbar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Category from "./components/pages/Category";
import { UserContext } from "./components/context/userContext";

import "../src/App.css";
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
import ErrorPage from "./components/pages/ErrorPage";
import AddCategory from "./components/inc/addCategory";
import AddProduct from "./components/pages/addProduct";

// Init token on axios every time the app is refreshed here ...
import { setAuthToken, API } from "../src/config/api";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const navigate = useNavigate();
  // Init user context
  const [state, dispatch] = useContext(UserContext);
  console.log(state);

  useEffect(() => {
    // Redirect Auth
    if (state.isLogin === false) {
      navigate("/login");
    } else {
      if (state.user.status === "admin") {
        navigate("/complain");
      } else if (state.user.status === "customer") {
        navigate("/home");
      }
    }
  }, [state]);

  // Create function for "check user token"
  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      // Get user data
      let payload = response.data.data.user;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Register />} />

      <Route path="/" element={<Login />} />
      <Route path="/home" element={<UserHome />} />

      <Route path="/product" element={<Product />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/complain" element={<AdminComplain />} />
      <Route path="/complain-user" element={<UserComplain />} />

      <Route path="/category" element={<Category />} />
      <Route path="/edit-category/:id" element={<EditCategory />} />
      <Route path="/add-category" element={<AddCategory />} />
      <Route path="/add-products" element={<AddProduct />} />
      <Route path="/edit-product/:id" element={<EditProduct />} />
      <Route path="/detail-product/:id" element={<DetailProduct />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
