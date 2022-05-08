import React from "react";
import Cards from "../inc/Cards";
// import { data } from "../inc/dummy";
import NavbarUser from "../inc/NavbarUser";

// import useQuery
import { useQuery } from "react-query";

// import API
import { API } from "../../config/api";

function UserHome() {
  // Fetching product data from database
  let { data: products } = useQuery("productsCache", async () => {
    const response = await API.get("/products");
    return response.data.data.product;
  });

  return (
    <div>
      <NavbarUser />
      <div className="container">
        <h1 className="text-danger mt-5 text-md-start text-center">Products</h1>
        <div className="row">
          {products?.map((item, index) => (
            <Cards item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserHome;
