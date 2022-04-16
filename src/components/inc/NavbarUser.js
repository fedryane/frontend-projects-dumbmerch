import React from "react";
import Logo from "../assets/frame-kecil.png";
import "./NavbarUser.css";
import { Link } from "react-router-dom";

function NavbarUser() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <Link to="/">
            <img src={Logo} />
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link to="/complain" class="nav-link">
                  Complain
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/profile" class="nav-link">
                  Profile
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/logout" class="nav-link">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavbarUser;