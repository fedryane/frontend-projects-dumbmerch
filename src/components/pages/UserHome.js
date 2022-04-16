import React from "react";
import Cards from "../inc/Cards";
import { data } from "../inc/dummy";
import NavbarUser from "../inc/NavbarUser";

function UserHome() {
  return (
    <div>
      <div className="container">
        <h1 className="text-danger mt-5 text-md-start text-center">Products</h1>
        <div className="row">
          {data.map((item) => {
            return <Cards tittle={item.tittle} harga={item.harga} stock={item.stock} image={item.image} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default UserHome;
