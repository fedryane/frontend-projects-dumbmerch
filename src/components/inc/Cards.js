import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";

const cards = function (props) {
  return (
    <div className="container card text-white bg-var-dark m-2 p-2 col-md-3 me-1">
      <Link to="/detail-product" style={{ textDecoration: "none" }}>
        <form className="card-body d-grid">
          <img src={props.image} className="card-img-top mb-2" />
          <h5 className="mb-3 text-danger">{props.tittle}</h5>
          <p className="mb-1 text-light">{props.harga}</p>
          <p className="text-light">stock:{props.stock} </p>
        </form>
      </Link>
    </div>
  );
};

export default cards;
