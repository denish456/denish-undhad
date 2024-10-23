import React, { useState } from "react";
import "./Total.css";
import Button from "../../commen coponet/botton/botton";
import Arrow from "../../images/icons/Aerrow.png";

const Total = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || []);

  const calculateSubtotal = () =>
    cartItems.reduce((total, item) => total + item.currentP * (item.quantity || 1), 0);

  // Function to update quantity for each item
  const updateQuantity = (index, newQuantity) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = newQuantity;
    setCartItems(updatedItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems)); // Update localStorage with new quantity
  };

  return (
    <section className="total_sec_1">
      <div className="container">
        <div className="row border-bottom mb-5">
          <div className="col-lg-8">
            {cartItems.map((item, index) => (
              <div className="row" key={index}>
                <div className="col-lg-5">
                  <img src={item.Cardimg} className="ig" alt="Product" />
                </div>
                <div className="col-lg-5">
                  <div className="mt-5">
                    <h2 className="color font_family_roboto">{item.title}</h2>
                    <p className="color mb-2 font_family_roboto fs-5">{item.currentP} USD</p>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="mt-5">
                    <input
                      type="number"
                      className="total_input"
                      value={item.quantity || 1}
                      onChange={(e) => updateQuantity(index, Number(e.target.value))}
                      min="1"
                      style={{ width: "60px" }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <p className="color fs-3 font_family_roboto">Sub Total</p>
          <h4 className="color font_family_roboto">${calculateSubtotal().toFixed(2)} USD</h4>
        </div>
        <div className="text-center">
          <Button
            style={"#274C5B"}
            name={"Continue To Checkout"}
            font={"700"}
            color={"white"}
            icon={Arrow}
          />
        </div>
      </div>
    </section>
  );
};

export default Total;
