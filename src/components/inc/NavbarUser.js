import React, { useContext } from "react";
import Logo from "../assets/frame-kecil.png";
import "./NavbarUser.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

function NavbarUser() {
  const [state, dispatch] = useContext(UserContext);

  let navigate = useNavigate();

  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link to="/home">
            <img src={Logo} />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link to="/complain-user" class="nav-link">
                  Complain
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/profile" class="nav-link">
                  Profile
                </Link>
              </li>
              <li class="nav-item">
                <a className="nav-link fw-bold" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarUser;
