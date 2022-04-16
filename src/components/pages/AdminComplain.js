import React from "react";
import Chat1 from "../assets/metallica.jpg";
import Chat2 from "../assets/killua.png";
import Navbar from "../inc/Navbar";

function AdminComplain() {
  return (
    <div>
      <div>
        <div className="container mt-5 text-white">
          <div className="row">
            <div className="col-4 d-flex">
              <div>
                <div className="d-flex">
                  <img className="me-3 rounded-circle" src={Chat2} alt="admin" height={"50px"} />
                  <div>
                    <p className="fs-14 fw-500 mb-2">Fedryan</p>
                    <p className="fs-14 fw-light text-secondary-2">Hello Admin, I Need Your Help</p>
                  </div>
                </div>
                <div className="d-flex mt-4">
                  <img className="me-3 rounded-circle" src={Chat1} alt="admin" height={"50px"} />
                  <div>
                    <p className="fs-14 fw-500 mb-2">killua</p>
                    <p className="fs-14 fw-light text-secondary-2">Hello Admin, This Problem to Me</p>
                  </div>
                </div>
              </div>
              <div className="d-flex ms-auto" style={{ height: "700px" }}>
                <div class="vr"></div>
              </div>
            </div>
            <div className="col-8 d-flex flex-column justify-content-end">
              <div className="d-flex ms-3">
                <img className="me-3 rounded-circle" src={Chat2} alt="" height={"50px"} />
                <div className="d-flex">
                  <p className="fw-500 bg-dark p-3" style={{ borderRadius: "30px", width: "max-content" }}>
                    Hello Admin, I Need Your Help
                  </p>
                </div>
              </div>
              <div className="d-flex ms-4 mt-4">
                <input type="text" className="bg-dark mb-4 fw-600 form-control p-3" id="formGroupExampleInput" placeholder="Send Message" style={{ border: "none" }}></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminComplain;
