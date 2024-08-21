import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Move = ({ move, title }) => {
  return (
    <>
      <h3>{title}</h3>
      <div className="movebuttons">
        <button id="left" onClick={(e) => move(e)}>
          <IoIosArrowBack style={{ paddingTop: "8px" }} />
        </button>
        <button id="right" onClick={(e) => move(e)}>
          <IoIosArrowForward style={{ paddingTop: "8px" }} />
        </button>
      </div>
    </>
  );
};

export default Move;
