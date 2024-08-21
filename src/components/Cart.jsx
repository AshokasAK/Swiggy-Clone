import React, { useState, useEffect } from "react";
import "../css/Cart.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoInformationCircleOutline } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const Cart = ({ cartCount, setCartCount }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cartitem, setCartitem] = useState([]);
  const [count, setCount] = useState(1);

  const handlecartminus = () => {
    navigate("/");
    setCartCount(0);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const url = async (id) => {
    const api = await fetch("http://localhost:8000/swiggy/body/" + id);
    console.log(api);
    const res = await api.json();
    console.log(res);
    setCartitem(res.food);
  };

  const handlePlus = () => {
    setCount(count < 5 ? count + 1 : 5);
  };
  const handleMinus = () => {
    setCount(count > 1 ? count - 1 : 1);
  };

  useEffect(() => {
    url(id);
  }, [id]);

  console.log(cartitem);

  return (
    <>
      <div className="cartcontainer">
        <div className="cartmarigin">
          <div className="top">
            <img className="image" src={cartitem.image} />
            <div className="topdetails">
              <h4>{cartitem.name}</h4>
              <p>{cartitem.area}</p>
            </div>
          </div>

          <div className="carttitle">
            <div className="cartitemleft">
              <img className="image2" src="/public/vegornon/veg.png"></img>
              <p>{cartitem.name}</p>
            </div>
            <div className="carttitleright">
              <ul>
                <li onClick={handleMinus}>-</li>
                <li>{count}</li>
                <li onClick={handlePlus}>+</li>
              </ul>
              <p>
                <FaRupeeSign />
                {count * cartitem.price}
              </p>
            </div>
          </div>

          <div className="quote">
            <p>
              <RiDoubleQuotesL />
            </p>
            <input placeholder="Any suggestion . . ." />
          </div>
          <div className="billdetails">
            <h4>Bill Deatils</h4>
            <ul>
              <li>Item Total</li>
              <li>
                <LiaRupeeSignSolid />
                {count * cartitem.price}
              </li>
            </ul>
            <ul>
              <li>
                Delivery partner fee{" "}
                <IoInformationCircleOutline
                  style={{
                    marginLeft: "5px",
                    marginBottom: "-2px",
                  }}
                />
              </li>
              <li>
                <LiaRupeeSignSolid />
                {cartitem.delcharge}
              </li>
            </ul>
            <ul>
              <li>Extra discount for you </li>
              <li>
                <LiaRupeeSignSolid />
                25
              </li>
            </ul>
            <hr />
            <ul>
              <li>Delivery Tip</li>
              <li style={{ color: "green", fontWeight: 500 }}>Add tip</li>
            </ul>
            <ul>
              <li>
                Platform fee{" "}
                <IoInformationCircleOutline
                  style={{
                    marginLeft: "5px",
                    marginBottom: "-2px",
                  }}
                />
              </li>
              <li>6</li>
            </ul>
            <ul>
              <li>
                GST and Restaurant Charges{" "}
                <IoInformationCircleOutline
                  style={{
                    marginLeft: "5px",
                    marginBottom: "-2px",
                  }}
                />
              </li>
              <li>
                <LiaRupeeSignSolid />
                20.03
              </li>
            </ul>
            <p className="billline"></p>
            <ul className="topay">
              <li>TO PAY</li>
              <li>
                <LiaRupeeSignSolid />
                {count * cartitem.price + 26 + 6 + 20.03}
              </li>
            </ul>
          </div>
        </div>
        <div className="totalamnt">
          Savings of <LiaRupeeSignSolid />
          245
        </div>
        <div className="placeorder">
          <button onClick={handlecartminus}>Place order </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
