import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline, IoPersonOutline } from "react-icons/io5";
import "../css/Header.css";
import { Link } from "react-router-dom";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useEffect } from "react";

const Header = ({ cartCount, setCartCount }) => {
  useEffect(() => {
    const open = (e) => {
      e.preventDefault();
      const sidecontainer = document.querySelector(".sidecontainer");
      sidecontainer.style.display = "block";
    };

    const close = (e) => {
      e.preventDefault();
      const sidecontainer = document.querySelector(".sidecontainer");
      sidecontainer.style.display = "none";
    };

    const others = document.getElementById("others");
    const x = document.getElementById("x");

    others.addEventListener("click", open);
    x.addEventListener("click", close);

    // Cleanup function to remove event listeners
    return () => {
      others.removeEventListener("click", open);
      x.removeEventListener("click", close);
    };
  }, []);

  return (
    <>
      <header>
        <div className="logo">
          <Link to={'/'}>
          <img src="/images/Logo.png" alt="" />
          </Link>
          <h5 className="headertext">
            <a href="" onClick={() => open(e)} id="others">
              Others
            </a>
            <span>
              <i className="fa-solid fa-greater-than" id="arrow"></i>
            </span>
          </h5>
        </div>
        <div className="nav">
          <ul>
            <li className="show">
              <Link to={"/swiggycorporate"} className="link">
                <span>
                  {" "}
                  <i className="fa-solid fa-shop"></i>Swiggy Corporate
                </span>
              </Link>
            </li>

            <li className="show mobile">
              <Link to={"/swiggycorporate"} className="link">
                <i className="fa-solid fa-magnifying-glass"></i>Search
              </Link>
            </li>

            <li className="hide">
              <Link to={"/swiggycorporate"} className="link">
                <span className="line">
                  <BiSolidOffer className="i" /> Offers
                  <sup>NEW</sup>
                </span>
              </Link>
            </li>

            <li className="hide">
              <Link to={"/swiggycorporate"} className="link">
                <span className="line">
                  <IoHelpBuoyOutline className="i" />
                  Help
                </span>
              </Link>
            </li>

            <li className="hide">
              <Link to={"/swiggycorporate"} className="link">
                <span className="line">
                  <IoPersonOutline className="i" />
                  Sign In
                </span>
              </Link>
            </li>

            <li className=" mobile">
              <Link to={"/cart/body/66c4c08b75ee311425a0407a"} className="link">
                <span className="cart">{cartCount}</span>
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <div className="sidecontainer">
        <div className="locationcontents">
          <button id="x" onClick={() => close(e)}>
            <IoClose />
          </button>
          <input type="text" />
          <div className="findlocation">
            <aside>
              <FaLocationCrosshairs />
            </aside>
            <div>
              <h4>Get current location</h4>
              <p>Using GPS</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
