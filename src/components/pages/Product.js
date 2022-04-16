import React from "react";
import { data } from "../inc/dummy";
import ProductProps from "../inc/ProductProps";
import Navbar from "../inc/Navbar";

function Product() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="text-light mt-5 text-lg-start text-center">List Product</h3>
            <table className="table table-dark table-striped mt-5">
              <thead>
                <tr className="text-center">
                  <th scope="col">No</th>
                  <th scope="col">Photo</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Desc</th>
                  <th scope="col">Price</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {data.map((item) => {
                return <ProductProps id={item.id} image={item.image} tittle={item.tittle} desc={item.desc} harga={item.harga} stock={item.stock} />;
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
