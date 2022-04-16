import React from "react";
import NavbarUser from "../inc/NavbarUser";
import Gambar from "../assets/metallica.jpg";
import Product1 from "../assets/product1.png";
import "./UserHome.css";
import Logo from "../assets/frame-kecil.png";

function Profile() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3 className="text-danger my-5">My Profile</h3>
            <img src={Gambar} style={{ width: "100%" }} />
          </div>
          <div className="col-md-3 mt-5">
            <div class="card bg-var-dark mt-5" style={{ maxWidth: "4000px" }}>
              <div class="col-md">
                <div class="card-body mt-4">
                  <h5 class="card-title text-danger">Name</h5>
                  <p class="card-text text-light">Fedryan</p>

                  <h5 class="card-title text-danger">Email</h5>
                  <p class="card-text text-light">Fedryanbandaris@gmail.com</p>

                  <h5 class="card-title text-danger">Phone</h5>
                  <p class="card-text text-light">089129944244</p>

                  <h5 class="card-title text-danger">Gender</h5>
                  <p class="card-text text-light">Male</p>

                  <h5 class="card-title text-danger">Address</h5>
                  <p class="card-text text-light">Lorem ipsum dolor sit laudantium perferendis magni sapiente.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 mt-5">
            <h3 className="text-danger mb-5">My Transaction</h3>
            <div class="card bg-dark" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img src={Product1} class="img-fluid rounded-start" alt="..." />
                </div>
                <div class="col-md-5">
                  <div class="card-body text-danger">
                    <h6 class="card-title">Mouse</h6>
                    <p class="card-text fs-6 fw-light">Saturday 14 juli 2022</p>
                    <p className="text-muted fs-6 fw-light">Price : Rp.500.000</p>
                    <p className="fw-bold mt-3 text-light" style={{ fontSize: "15px" }}>
                      Sub Total : Rp.500.000
                    </p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="card-body mt-3 px-2">
                    <img src={Logo} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
