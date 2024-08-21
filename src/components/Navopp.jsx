import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

const Navopp = () => {
  return (
    <>
      <div className="swiggycorporate">
        <div className="aboutswiggy">
          <aside>
            <div>
              <img src="/images/Logo.png" alt="" />
              <h4>Swiggy</h4>
            </div>
            <ul className="list">
              <li>
                About Swiggy <IoMdArrowDropdown />
                <ul>
                  <li>Swiggy journey</li>
                  <li>Our Teams</li>
                  <li>Careers</li>
                  <li>Blogs</li>
                </ul>
              </li>
              <li>Our businesses</li>
              <li>
                Delivering For Everyone <IoMdArrowDropdown />
                <ul
                  style={{
                    textAlign: "center",
                    width: "300px",
                    marginRight: "20px",
                  }}
                >
                  <li style={{ fontSize: "13px" }}>Ride with Swiggy</li>
                  <li style={{ fontSize: "13px" }}>
                    Swiggy Restaurant partner Progamme
                  </li>
                  <li style={{ fontSize: "13px" }}>Swiggy Restaurant Awards</li>
                </ul>
              </li>
              <li>Newsroom</li>
              <li>
                Sustainability <IoMdArrowDropdown />
                <ul>
                  <li>Environment</li>
                  <li>Social</li>
                  <li>Governance</li>
                  <li>Our Initiatives</li>
                </ul>
              </li>
              <li>Investor Relations</li>
              <li>Contact Us</li>
            </ul>
          </aside>
          <section className="heart">
            <div>
              <h2>About Swiggy</h2>
              <p>
                Swiggy is a new-age consumer-first organization offering an
                easy-to-use convenience platform, accessible through a unified
                app.
              </p>
            </div>
          </section>
        </div>
        <section className="aboutswiggy2">
          <ul>
            <li>
              <Link to={"/mission"} className="link">
                Mission
              </Link>
            </li>
            <li>
              <Link to={"/vision"} className="link">
                Vision
              </Link>
            </li>
            <li>
              <Link to={"/values"} className="link">
                Values
              </Link>
            </li>
            <li>
              <Link to={"/walkthrough"} className="link">
                Walkthrough
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Navopp;
