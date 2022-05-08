import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";
import Rupiah from "rupiah-format";

const cards = function ({ item }) {
  return (
    <div className="container card text-white bg-var-dark m-2 p-2 col-md-3 me-1">
      <Link to={`/detail-product/` + item.id} style={{ textDecoration: "none" }}>
        <form className="card-body d-grid">
          <img src={item.image} className="card-img-top mb-3" style={{ width: "100%", height: "100%" }} />
          <h5 className="mb-3 mt-3 text-danger">{item.name}</h5>
          <p className="mb-2 text-light">{Rupiah.convert(item.price)}</p>
          <p className="mb-1 text-light">{item.desc}</p>
          <p className="text-light">stock: {item.qty}</p>
        </form>
      </Link>
    </div>
  );
};

export default cards;
