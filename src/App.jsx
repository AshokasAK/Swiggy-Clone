import React from "react";
import Header from "./components/Header";
import "./App.css";
import Body from "./components/Body";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navopp from "./components/Navopp";
import SingleFoodPage from "./components/SingleFoodPage";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import Foods2 from "./components/Foods2";

const App = () => {
  const [suggestion, setSuggestion] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [menuItem, setMenuItem] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const url = async () => {
    const api = await fetch("http://localhost:8000/swiggy");
    const api2 = await fetch("http://localhost:8000/swiggy/body");
    // console.log(api)
    // console.log(api2)
    const res = await api.json();
    const res2 = await api2.json();
    // console.log(res)
    // console.log(res2)
    const foods = res.food;
    const foods2 = res2.food;
    // console.log(foods)
    // console.log(foods2)
    setSuggestion(foods);
    setFoodItems(foods2);
    setMenuItem(foods2);
  };

  useEffect(() => {
    url();
  }, []);

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Header cartCount={cartCount} setCartCount={setCartCount} />
          <Routes>
            <Route
              path="/"
              element={
                <Body
                  suggestion={suggestion}
                  setSuggestion={setSuggestion}
                  foodItems={foodItems}
                  setFoodItems={setFoodItems}
                  menuItem={menuItem}
                  setMenuItem={setMenuItem}
                />
              }
            />
            <Route path="/swiggycorporate" element={<Navopp />} />
            <Route
              path="/foods"
              element={<Foods2 menuItem={menuItem} setMenuItem={setMenuItem} />}
            />
            <Route
              path="/singlepage/:id"
              element={
                <SingleFoodPage menuItem={menuItem} setMenuItem={setMenuItem} />
              }
            />
            <Route
              path="singlepage/body/:id"
              element={
                <SingleFoodPage
                  menuItem={menuItem}
                  setMenuItem={setMenuItem}
                  cartCount={cartCount}
                  setCartCount={setCartCount}
                />
              }
            />
            <Route
              path="/cart/body/:id"
              element={
                <Cart cartCount={cartCount} setCartCount={setCartCount} />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
