import React from "react";
import NavbarUser from "../inc/NavbarUser";
import gambar from "../assets/product3.png";

function DetailProduct() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <img className="w-100" src={gambar} alt="" />
          </div>
          <div className="col-lg-7 text-light">
            <h1 className="text-lg-start text-center text-danger ms-4">Product 1</h1>
            <p className="text-lg-start text-center ms-4">Stock : 600</p>
            <p className="mt-lg-5 mt-4 ms-4">- Good for music</p>
            <p className="ms-4">- Stylish</p>
            <p className="ms-4">- Comfy</p>
            <p className="ms-4">- 400+dB</p>
            <p className="ms-4" style={{ textAlign: "justify" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse error obcaecati aliquid! Odit aliquid ipsum, inventore modi, facilis voluptate quo assumenda eum repudiandae reprehenderit laboriosam recusandae at in esse itaque
              architecto nesciunt aspernatur, dolorem alias iusto! Magnam reiciendis aperiam, assumenda enim modi, repellat inventore vel ullam eaque dicta dolorem? Sint!
            </p>
            <h1 className="mt-5 text-end text-danger">Rp.500.000,00</h1>
            <div class="d-grid gap-2">
              <button class="btn btn-danger mt-1 mb-5 ms-4" type="button">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
