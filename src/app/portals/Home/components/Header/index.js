import "./Header.css";
import logo from "../../../../../assets/images/cosyslogo.png";
import react from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="" />
      <div class="action-buttons">
        <Link class="active" to="home">
          Home
        </Link>
        <Link to="contact">Contact</Link>
        <Link to="about">About</Link>
        <Link to="Women">Women</Link>
        <Link to="Men">Men</Link>

        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
