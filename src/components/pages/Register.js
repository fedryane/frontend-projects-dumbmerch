import React from "react";
import Brand from "../assets/Frame.png";

function Register() {
  return (
    <div>
      <div className="container text-light fs-3 mt-5">
        <div className="row">
          <div className="col-lg-6 text-lg-start text-center justify-content-evenly mt-5">
            <img src={Brand} alt="brand" className="text-md-center mt-5" />
            <h1 className="mt-4">Easy, Fast and Reliable</h1>
            <p className="fs-5">Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in Indonesia</p>
            <div className="d-flex py-3 justify-content-lg-start justify-content-center">
              <button type="button" class="btn btn-danger px-5">
                Login
              </button>
              <a href="#" className="btn text-secondary text-decoration-none ms-5 fs-5">
                Register
              </a>
            </div>
          </div>
          <div className="col-lg-6 mb-5">
            <div id="gap" className="card bg-secondary mt-5 p-4">
              <h1>Register</h1>
              <form>
                <div class="mt-3">
                  <label for="text" class="form-label">
                    Name
                  </label>
                  <input type="text" class="form-control bg-var-gray" id="text" aria-describedby="text" />
                </div>
                <div class="mt-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input type="email" class="form-control bg-var-gray" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="my-4">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input type="password" class="form-control bg-var-gray" id="exampleInputPassword1" />
                </div>

                <div class="d-grid gap-2 mt-5">
                  <button class="btn btn-danger fs-5" type="button">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
