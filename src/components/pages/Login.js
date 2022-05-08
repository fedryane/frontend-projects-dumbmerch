import React, { useContext, useState } from "react";
import { UserContext } from "../context/userContext";
import Brand from "../assets/Frame.png";
import "./Login.css";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { API } from "../../config/api";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

function Login() {
  let navigate = useNavigate();
  const title = "Login";
  document.title = "DumbMerch | " + title;

  const [state, dispatch] = useContext(UserContext);

  const [message, setMessage] = useState(null);

  // creating var state
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // define var state
  const { email, password } = form;

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

      // Insert data user to database
      const response = await API.post("/login", body, config);
      console.log(response.data.data);

      // condition login
      if (response?.status === 201) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: response.data.data,
        });
      }

      if (response.data.data.status === "admin") {
        navigate("/complain");
      } else {
        navigate("/");
      }

      setMessage("login success");

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
          <div className="col-lg-6 text-lg-start text-center mt-5">
            <img src={Brand} alt="brand" className="text-md-center mt-5" />
            <h1 className="mt-4">Easy, Fast and Reliable</h1>

            <p className="fs-5">
              Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in <strong>Indonesia</strong>
            </p>
            <div className="d-flex py-3 justify-content-lg-start justify-content-center">
              <button type="button" class="btn btn-danger px-5">
                Login
              </button>

              <Link to="/register" class="nav-link btn text-secondary text-decoration-none ms-5 fs-5">
                Register
              </Link>
            </div>
          </div>
          <div className="col-lg-6 mb-5">
            <div id="gap" className="card bg-secondary mt-5 p-4">
              <h1>Login</h1>
              {message && message}
              <form onSubmit={(e) => handleSubmit.mutate(e)}>
                <div class="mt-2">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input type="email" class="form-control bg-dark border-secondary text-light" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" name="email" value={email} onChange={handleChange} />
                </div>
                <div class="my-4">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input type="password" class="form-control bg-dark border-secondary outline-dark text-light" id="exampleInputPassword1" placeholder="Password" name="password" value={password} onChange={handleChange} />
                </div>

                <div class="d-grid gap-2 mt-5">
                  <button class="btn btn-danger fs-5" type="submit">
                    Login
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

export default Login;
