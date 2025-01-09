import React from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border">
      {/*<div className="navbar container py-0">
        <div className="nav-logo">
          <img src={logo} />
          <p className="pt-3 ps-2  ">SHOPPER</p>
        </div>
        <ul className="nav-menu">
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Shop
            </Link>
          </li>

          <li class="dropdown">
            <span>Categories</span>
            <div className="dropdown-content">
              <li className="ps-5">
                <Link
                  to="/mens"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Men
                </Link>
              </li>
              <li className="ps-5">
                <Link
                  to="/womens"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Women
                </Link>
              </li>
              <li className="ps-5">
                <Link
                  to="/kids"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Kids
                </Link>
              </li>
            </div>
          </li>

          <li className="ps-5">
            <Link to="/sale" style={{ textDecoration: "none", color: "black" }}>
              Sale
            </Link>
          </li>
          <li className="ps-5">
          
          </li>
          <li className="ps-5">
            <Link
              to="/blogs"
              style={{ textDecoration: "none", color: "black" }}
            >
              Blogs
            </Link>
          </li>
        </ul>
        <div className="nav-login-cart">
          <button className="btn btn-outline-dark px-4">
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </button>
          <Link to="/cart">
            <img
              src={cart_icon}
              className="ps-4"
              style={{
                maxWidth: "40%", // Ensure image resizes within parent container
                height: "auto", // Maintain aspect ratio
              }}
            />
          </Link>
        </div>
            </div>*/}
      <>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Navbar</title>
        <nav className="navbar ">
          <div className="navbar-container container ">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1" />
              <span className="line line2" />
              <span className="line line3" />
            </div>
            <ul className="menu-items">
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li class="dropdown">
                <span>Categories</span>
                <div className="dropdown-content">
                  <li className="ps-5">
                    <Link to="/mens">fiction</Link>
                  </li>
                  <li className="ps-5">
                    <Link to="/womens">non-fiction</Link>
                  </li>
                  <li className="ps-5">
                    <Link to="/kids">biographies</Link>
                  </li>
                </div>
              </li>
              <li>
                <Link to="/sale">Sale</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/about">AboutUs</Link>
              </li>
              <button className="btn  px-4 " style={{marginLeft:"150px",borderRadius:"25px"}}>
                <Link to="/login" style={{color:"white"}}>
                  Login
                </Link>
              </button>
              <Link to="/cart"  className="ms-4">
                <img src={cart_icon} style={{height:"30px",width:"30px"}}/>
              </Link>
            </ul>
            {/* <div className="d-flex">
              <img src={logo} />
              <h1 className="logo pt-1">SHOPPER</h1>
            </div> */}
            <img src={logo} style={{height:"50px",width:"50px"}} className="logo "/>
            <h1 className="logo1 pt-1 " >SHOPPER</h1>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Navbar;
