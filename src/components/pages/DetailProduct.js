import React, { useEffect, useState } from "react";
import NavbarUser from "../inc/NavbarUser";
import Rupiah from "rupiah-format";

import { useParams, useNavigate } from "react-router-dom";

// import API
import { API } from "../../config/api";

// import useQuery
import { useQuery, useMutation } from "react-query";

function DetailProduct() {
  let { id } = useParams();
  let navigate = useNavigate();
  console.log(id);

  // const [product, setProduct] = useState([]);

  // Fetching product detail from database
  // let { data: product, refetch } = useQuery("productCache", async () => {
  //   let response = await API.get("/product/" + id);
  //   console.log(response.data.data);
  //   return response.data.data.products;
  // });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await API.get(`/product/${id}`);
  //     setProduct(response.data.data.products);
  //   };
  //   fetchData();
  // }, []);

  // Fetching product data from database
  let { data: product, refetch } = useQuery("productCache", async () => {
    const config = {
      method: "GET",
      headers: {
        Authorization: "Basic " + localStorage.token,
      },
    };
    const response = await API.get("/product/" + id, config);
    return response.data.data.products;
  });

  // Create config Snap payment page with useEffect here ...
  useEffect(() => {
    //change this to the script source you want to load, for example this is snap.js sandbox env
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    //change this according to your client-key
    const myMidtransClientKey = "SB-Mid-client--5l9_4MVdsoXpIQz";

    let scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    // optional if you want to set script attribute
    // for example snap.js have data-client-key attribute
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const handleBuy = async () => {
    try {
      // Get data from product

      const data = {
        idProduct: product.id,
        idSeller: product.user.id,
        price: product.price,
      };

      // Data body
      const body = JSON.stringify(data);
      console.log(body);
      // Configuration
      const config = {
        headers: {
          Authorization: "Basic " + localStorage.token,
          "Content-type": "application/json",
        },
        body,
      };

      // Insert transaction data
      const response = await API.post("/transaction", body, config);
      console.log("ini response", response.data.payment.token);
      // Create variabel for store token payment from response here ...
      const token = response.data.payment.token;

      window.snap.pay(token, {
        onSuccess: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/profile");
        },
        onPending: function (result) {
          /* You may add your own implementation here */
          console.log(result);
          navigate("/profile");
        },
        onError: function (result) {
          /* You may add your own implementation here */
          console.log(result);
        },
        onClose: function () {
          /* You may add your own implementation here */
          alert("you closed the popup without finishing the payment");
        },
      });

      // Init Snap for display payment page with token here ...
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavbarUser />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-5 mt-5 pe-5">
            <img src={product?.image} alt="test" className="w-100" />
          </div>
          <div className="col-lg-7 text-light mt-5">
            <h1 className="text-lg-start text-center text-danger ms-4">{product?.name}</h1>
            <p className="text-lg-start text-center ms-4">Stock : {product?.qty}</p>
            <p className="mt-lg-5 mt-4 ms-4">- Good for music</p>
            <p className="ms-4">- Stylish</p>
            <p className="ms-4">- Comfy</p>
            <p className="ms-4">- 400+dB</p>
            <p className="ms-4 text-white" style={{ textAlign: "justify" }}>
              {product?.desc}
            </p>

            <button className="btn btn-success ms-2">-</button>
            <button className="btn btn-dark ms-2 ">1</button>
            <button className="btn btn-success ms-2 ">+</button>

            <h1 className="mt-5 text-end text-danger">{Rupiah.convert(product?.price)}</h1>
            <div class="d-grid gap-2">
              <button onClick={handleBuy} className="btn btn-danger">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
