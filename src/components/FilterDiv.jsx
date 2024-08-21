import React from "react";
import { LuSettings2 } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";

const FilterDiv = ({ title }) => {
  return (
    <>
      <div className="filtercontainer">
        <h4>{title}</h4>

        <ul className="filters">
          <li className="filter">
            <p>Filter </p>
            <LuSettings2 id="fill" />
          </li>
          <li className="filter">
            <p>Sort By</p> <IoIosArrowDown id="fill" />
          </li>
          <li className="filter">
            <p>Fast Delivery</p>
          </li>
          <li className="filter">
            <p>New on Swiggy</p>
          </li>
          <li className="filter">
            <p>Ratings 4.0+</p>
          </li>
          <li className="filter">
            <p>Offers</p>
          </li>
          <li className="filter">
            <p>Rs.300-Rs.600</p>
          </li>
          <li className="filter">
            <p>Less than Rs.300</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FilterDiv;
