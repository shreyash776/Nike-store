import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../context";



const ItemText = (props) => {
  const {title,description,price,rating,img,color,shadow,customKey} = props;
  const { cart, setCart } = useContext(CartContext);  
    
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
            }}
            onClick={()=> setCart(prev => {
                    console.log('Previous Cart:', prev);
                     const newItem = {title,color,shadow,img,price,customKey};
                      console.log('New Item:', newItem);
                       return [...prev, newItem];
                       })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
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
            }}
          >
            
            <p onClick={()=>setCart(prev=>[...prev,{title,color,shadow ,img,price,customKey}])} >Buy Now</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemText;
