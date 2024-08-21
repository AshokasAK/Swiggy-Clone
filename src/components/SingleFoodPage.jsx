import React, { useEffect, useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { Link, useLocation, useParams } from "react-router-dom";

const SingleFoodPage = ({ cartCount, setCartCount, menuItem }) => {
  const location = useLocation();
  const { id } = useParams();
  const [singleitem, setSingleitem] = useState(null);

  const url = async (id) => {
    const api = await fetch("http://localhost:8000/swiggy/body/" + id);
    console.log(api);
    const res = await api.json();
    console.log(res);
    setSingleitem(res.food);
  };

  const handlecartplus = () => {
    setCartCount(cartCount + 1);
  };

  useEffect(() => {
    url(id);
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {singleitem && (
        <div className="singlefoodcontainer">
          <div className="smallkey">
            <p>Home / </p>
            <p>{singleitem.city} / </p>
            <p>{singleitem.name} </p>
          </div>
          <h3>{singleitem.name}</h3>

          <div className="fooddetailsshadow">
            <div className="fooddetails">
              <div className="ratingcontainer">
                <img src="/images/starrating.png" alt="" />
                <p>{singleitem.ratting}(1K + ratings)</p>
                <span></span>
                <div>
                  <FaRupeeSign />
                  <p>{singleitem.price}</p>
                </div>
              </div>

              {/*map inside p, use join() to make it as string*/}
              {singleitem && <h4> {singleitem.searchkey.join(", ")} </h4>}

              <div className="location">
                <div className="locationdrawing">
                  <p className="ball"></p>
                  <p className="line"></p>
                  <p className="ball"></p>
                </div>
                <div className="locationplace">
                  <div className="place">
                    <h6>Outlet</h6>
                    <p>{singleitem.area}</p>
                    <IoMdArrowDropdown
                      style={{
                        color: "orangered",
                      }}
                    />
                  </div>
                  <b>{singleitem.timing}</b>
                </div>
              </div>
              <hr />
              <div className="deliverydrawing">
                <MdOutlineDirectionsBike
                  style={{
                    fontSize: "18px",
                    marginRight: "8px",
                  }}
                />
                <p>{singleitem.distance}</p>
                <p>|</p>
                <p
                  style={{
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "400",
                  }}
                >
                  <FaRupeeSign />
                  {singleitem.delcharge} Delivery fee will apply
                </p>
              </div>
            </div>
          </div>

          <div className="offerdetail">
            <h3>Deals for you</h3>
            <div className="flatofferdi">
              <div className="flatoffer">
                <div className="offer1">
                  <img src="/menus/offer/offer1.png" alt="" />
                  <div>
                    <h3
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Flat <FaRupeeSign />
                      150 Off{" "}
                    </h3>
                    <p>USE FLATDEAL</p>
                  </div>
                </div>
                <div className="offer1">
                  <img src="/menus/offer/offer2.png" alt="" />
                  <div>
                    <h3
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      30% Off Upto <FaRupeeSign />
                      150{" "}
                    </h3>
                    <p>USE AXIS30</p>
                  </div>
                </div>
                <div className="offer1">
                  <img src="/menus/offer/offer2.png" alt="" />
                  <div>
                    <h3
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Flat <FaRupeeSign />
                      200 Off
                    </h3>
                    <p>USE AXIS200</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="center">MENU</p>
            <div className="bar">
              <input type="text" />
              <i>
                <IoSearch />
              </i>
            </div>
            <ul>
              <li>Offers</li>
              <li>Filters</li>
              <li>Bestseller</li>
            </ul>
            <div className="picks">
              <h4>Top Picks</h4>
              <div className="images">
                <img src="/menus/still0.png" alt="" />
                <img src="/menus/still1.png" alt="" />
                <img src="/menus/still2.png" alt="" />
                <img src="/menus/still3.png" alt="" />
              </div>
            </div>
          </div>

          <div
            className="singlecon"
            style={{
              marginTop: "5rem",
            }}
          >
            {/*First line*/}
            <div className="menucontainer">
              <div className="menucard">
                {menuItem
                  .reverse()
                  .slice(2)
                  .map((items) => (
                    <div className="menuitems" key={items._id}>
                      <Link
                        to={"/cart/body/" + items._id}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          id="item"
                          style={{
                            backgroundImage: `url(${items.image})`,
                          }}
                        >
                          <button
                            style={{
                              position: "relative",
                              top: "130px",
                              right: "-230px",
                              padding: "6px 8px",
                              color: "green",
                              backgroundColor: "white",
                              fontWeight: 800,
                              fontSize: "15px",
                              border: "2px solid green",
                              borderRadius: "5px",
                            }}
                            onClick={handlecartplus}
                          >
                            ADD
                          </button>
                        </div>
                        <h4>{items.name}</h4>
                      </Link>
                      <div className="ratings">
                        <img src="/images/starrating.png" alt="ratings" />
                        <h6>{items.ratting}</h6>
                        <span></span>
                        <h5>{items.timing}</h5>
                      </div>
                      <p>{items.searchkey.map((i) => i).join(", ")}</p>
                    </div>
                  ))}
              </div>
            </div>
            <br />

            {/*Second line*/}
            <div className="menucontainer">
              <div className="menucard">
                {menuItem
                  .reverse()
                  .slice(5)
                  .map((items) => (
                    <div className="menuitems">
                      <Link
                        to={"/cart/body/" + items._id}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          id="item"
                          style={{
                            backgroundImage: `url(${items.image})`,
                          }}
                        >
                          <button
                            style={{
                              position: "relative",
                              top: "130px",
                              right: "-230px",
                              padding: "6px 8px",
                              color: "green",
                              backgroundColor: "white",
                              fontWeight: 800,
                              fontSize: "15px",
                              border: "2px solid green",
                              borderRadius: "5px",
                            }}
                            onClick={handlecartplus}
                          >
                            ADD
                          </button>
                        </div>

                        <h4>{items.name}</h4>
                      </Link>
                      <div className="ratings">
                        <img src="/images/starrating.png" alt="ratings" />
                        <h6>{items.ratting}</h6>
                        <span></span>
                        <h5>{items.timing}</h5>
                      </div>
                      <p>{items.searchkey.map((i) => i).join(", ")}</p>
                    </div>
                  ))}
              </div>
            </div>

            <br />

            {/*Third line*/}

            <div className="menucontainer">
              <div className="menucard">
                {menuItem
                  .reverse()
                  .slice(3)
                  .map((items) => (
                    <div className="menuitems">
                      <Link
                        to={"/cart/body/" + items._id}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          id="item"
                          style={{
                            backgroundImage: `url(${items.image})`,
                          }}
                        >
                          <button
                            style={{
                              position: "relative",
                              top: "130px",
                              right: "-230px",
                              padding: "6px 8px",
                              color: "green",
                              backgroundColor: "white",
                              fontWeight: 800,
                              fontSize: "15px",
                              border: "2px solid green",
                              borderRadius: "5px",
                            }}
                            onClick={handlecartplus}
                          >
                            ADD
                          </button>
                        </div>
                        <h4>{items.name}</h4>
                      </Link>
                      <div className="ratings">
                        <img src="/images/starrating.png" alt="ratings" />
                        <h6>{items.ratting}</h6>
                        <span></span>
                        <h5>{items.timing}</h5>
                      </div>
                      <p>{items.searchkey.map((i) => i).join(", ")}</p>
                    </div>
                  ))}
              </div>
            </div>

            <br />

            {/**Fourth line */}

            <div className="menucontainer">
              <div className="menucard">
                {menuItem
                  .reverse()
                  .slice(1)
                  .map((items) => (
                    <div className="menuitems">
                      <Link
                        to={"/cart/body/" + items._id}
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          id="item"
                          style={{
                            backgroundImage: `url(${items.image})`,
                          }}
                        >
                          <button
                            style={{
                              position: "relative",
                              top: "130px",
                              right: "-230px",
                              padding: "6px 8px",
                              color: "green",
                              backgroundColor: "white",
                              fontWeight: 800,
                              fontSize: "15px",
                              border: "2px solid green",
                              borderRadius: "5px",
                            }}
                            onClick={handlecartplus}
                          >
                            ADD
                          </button>
                        </div>
                        <h4>{items.name}</h4>
                      </Link>
                      <div className="ratings">
                        <img src="/images/starrating.png" alt="ratings" />
                        <h6>{items.ratting}</h6>
                        <span></span>
                        <h5>{items.timing}</h5>
                      </div>
                      <p>{items.searchkey.map((i) => i).join(", ")}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <Link to={"/cart/body/" + singleitem._id}>
            <button className="tocart">To Cart</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default SingleFoodPage;
