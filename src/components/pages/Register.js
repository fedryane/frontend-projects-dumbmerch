import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import Brand from "../assets/Frame.png";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// import useMutation
import { useMutation } from "react-query";

//import API
import { API } from "../../config/api";

// let navigate = useNavigate();
function Register() {
  const title = "Register";
  document.title = "DumbMerch | " + title;

  const [message, setMessage] = useState(null);

  // creating var state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // define var state
  const { name, email, password } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // function for handle insert data to databases (useMutation)
  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form);
      console.log(body);
      // Insert data user to database
      const response = await API.post("/register", body, config);

      console.log(response);

      // condition register success
      if (response.data.status === "success") {
        const alert = (
          <Alert variant="success" className="py-1">
            Register Success
          </Alert>
        );
        setMessage(alert);
        setForm({
          name: "",
          email: "",
          password: "",
        });
      } else {
        const alert = (
          <Alert variant="danger" className="py-1">
            Failed
          </Alert>
        );
        setMessage(alert);
      }
      // Handling response here
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <div>
      <div className="container text-light fs-3 mt-5">
        <div className="row">
          <div className="col-lg-6 text-lg-start text-center justify-content-evenly mt-5">
            <img src={Brand} alt="brand" className="text-md-center mt-5" />
            <h1 className="mt-4">Easy, Fast and Reliable</h1>
            <p className="fs-5">
              Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in <strong>Indonesia</strong>
            </p>
            <div className="d-flex py-3 justify-content-lg-start justify-content-center">
              <Link to="/login">
                <button type="button" class="btn btn-danger px-5">
                  Login
                </button>
              </Link>
              <Link to="" className="btn text-secondary text-decoration-none ms-5 fs-5">
                Register
              </Link>
            </div>
          </div>
          <div className="col-lg-6 mb-5">
            <div id="gap" className="card bg-secondary mt-5 p-4">
              <h1>Register</h1>
              {message && message}
              <form onSubmit={(e) => handleSubmit.mutate(e)}>
                <div class="mt-3">
                  <label for="text" class="form-label">
                    Name
                  </label>
                  <input type="text" class="form-control bg-dark text-light" id="text" aria-describedby="text" placeholder="Nama" name="name" value={name} onChange={handleChange} />
                </div>
                <div class="mt-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input type="email" class="form-control bg-dark text-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name="email" value={email} onChange={handleChange} />
                </div>
                <div class="my-4">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input type="password" class="form-control bg-dark text-light" id="exampleInputPassword1" placeholder="Password" name="password" value={password} onChange={handleChange} />
                </div>

                <div class="d-grid gap-2 mt-5">
                  <button class="btn btn-danger fs-5" type="submit">
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
