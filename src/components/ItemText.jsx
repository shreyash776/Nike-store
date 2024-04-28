import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context";

import { ShowCartContext } from "../context";

const ItemText = (props) => {
  const { title, description, price, rating, img, color, shadow, customKey } = props;
  const { cart, setCart } = useContext(CartContext);

  const { showCart, setShowCart } = useContext(ShowCartContext);
  useEffect(() => {
    if (cart && cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  return (
    <>
      <div
        className="popular-text"
        style={{ padding: "0.2rem 0 0.4rem 1.6rem" }}
      >
        <div
          style={{
            color: "#E2E8F0",
            fontFamily: "Poppins, sans-serif",
            whiteSpace: "nowrap",
            fontSize: "20px",
            fontWeight: "520",
          }}
        >
          <p>{title}</p>
        </div>
        <div
          style={{
            color: "#E2E8F0",
            fontFamily: "Poppins, sans-serif",
            whiteSpace: "nowrap",
            fontWeight: "100",
          }}
        >
          <p>{description}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              color: "#000000",
              backgroundColor: "white",
              zIndex: "5",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
              height: "75%",
              width: "2.5rem",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "600",
            }}
          >
            <p>${price}</p>
          </div>

          <div
            style={{
              height: "25px",
              width: "60px",
              marginLeft: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              icon={faStar}
              style={{
                color: "#F1F5F9",
                zIndex: "5",
                marginRight: "10px",
                marginLeft: "8px",
              }}
            />
            <span style={{ color: "#F1F5F9", zIndex: "5", fontWeight: "500" }}>
              {rating}
            </span>
          </div>
        </div>
        <div className="p-shop" style={{ position: "relative" }}>
          <div
            style={{
              backgroundColor: "white",
              position: "absolute",
              top: "0",
              left: "0",
              width: "25px",
              height: "25px",
              zIndex: "5",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() =>
              setCart((prev) => {


                if(!img||!shadow||!title||! description||! price||!rating||! color||! customKey){
                    console.log("Error loading");
                    alert("Error loading");
                    return prev;
                  }



                const newItem = {
                  title,
                  description,
                  price,
                  rating,
                  img,
                  color,
                  shadow,
                  customKey,
                };
                return [...prev, newItem];

              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="icon-style text-slate-900"
            >
              <path
                fillRule="evenodd"
                d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div
            style={{
              position: "absolute",
              top: "0",
              left: "1.5rem",
              backgroundColor: "white",
              width: "5rem",
              height: "1.5rem",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
              marginLeft: "1rem",
              zIndex: "5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            className="buy-btn"
          >
            <p
              onClick={() =>
                
                  // if(!img||!shadow||!title||! description||! price||!rating||! color||! customKey){
                  //   console.log("Error loading");
                  //   alert("Error loading");
                  //   return prev;
                  // }

                  // if (prev.some((item) => item.customKey == customKey)) {
                  //   alert("Already added");
                  //   return prev;
                  // }
                  // setShowCart(true);
                  // const newItem = {
                  //   title,
                  //   description,
                  //   price,
                  //   rating,
                  //   img,
                  //   color,
                  //   shadow,
                  //   customKey,
                  // };
                  // return [...prev, newItem];
                  setCart((prev) => {


if(!img||!shadow||!title||! description||! price||!rating||! color||! customKey){
    console.log("Error loading");
    alert("Error loading");
    return prev;
  }



const newItem = {
  title,
  description,
  price,
  rating,
  img,
  color,
  shadow,
  customKey,
};
return [...prev, newItem];



             

                })
              }
            >
              Buy Now
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemText;
