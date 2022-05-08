import React, { useState, useEffect } from "react";
import { data } from "../inc/dummy";
import ProductProps from "../inc/ProductProps";
import Navbar from "../inc/Navbar";
import { Link } from "react-router-dom";

// import useQuery
import { useQuery, useMutation } from "react-query";

// import userContext
import { UserContext } from "../context/userContext";

// import API
import { API } from "../../config/api";

function Product() {
  // Fetching product data from database
  let { data: products, refetch } = useQuery("productsCache", async () => {
    const response = await API.get("/products");
    return response.data.data.product;
  });

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between">
              <h2 className="text-danger mt-5 text-lg-start text-center">List Product</h2>
              <div className=" mt-5 text-lg-start text-center ">
                <Link to="/add-products" className="btn btn-dark m-1 px-5" type="button">
                  Add
                </Link>
              </div>
            </div>

            <table className="table table-dark table-striped mt-5">
              <thead>
                <tr className="text-center">
                  <th scope="col">No</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Product name</th>
                  <th scope="col">Product desc</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {products?.map((item, index) => (
                <ProductProps item={item} key={index} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
