import React from "react";
import Gambar1 from "../assets/killua.png";
import NavbarUser from "../inc/NavbarUser";
import Gambar2 from "../assets/killua2.jpg";

function UserComplain() {
  return (
    <div>
      <div>
        <NavbarUser />
        <div className="container mt-5 text-white">
          <div className="row">
            <div className="col-4 d-flex">
              <div>
                <div className="d-flex">
                  <img className="me-3 rounded-circle" src={Gambar2} alt="admin" height={"50px"} />
                  <div>
                    <p className="fs-14 fw-500 mb-2">Admin</p>
                    <p className="fs-14 fw-light text-secondary-2">Yes, Is there anything I can help</p>
                  </div>
                </div>
              </div>
              <div className="d-flex ms-auto" style={{ height: "700px" }}>
                <div class="vr"></div>
              </div>
            </div>
            <div className="col-8 d-flex flex-column justify-content-end">
              <div className="d-flex ms-3 justify-content-end">
                <div className="d-flex">
                  <p className="fw-500 bg-dark p-3" style={{ borderRadius: "30px" }}>
                    Hello Admin, I Need Your Help
                  </p>
                </div>
              </div>
              <div className="d-flex ms-3">
                <img className="me-3 rounded-circle" src={Gambar2} alt="" height={"50px"} />
                <div className="d-flex">
                  <p className="fw-500 bg-dark p-3" style={{ borderRadius: "30px" }}>
                    Yes, Is there anything I can help ?
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

export default UserComplain;
