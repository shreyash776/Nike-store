import  {useState,useEffect, useContext } from "react"; 
import { CartContext } from "../context";
import AddedItem from "./AddedItem";

export const Cart = (props) => {
  const { cart, setCart } = useContext(CartContext);  
  const { setShowCart } = props;
  console.log(cart.map(item=> item.customKey))
  const clearCart=()=>{
    setCart([]);
  }
  const calculateTotalPrice = () => {
    // Use reduce to sum up all prices in the cart array
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    return totalPrice;
  };
  
  return (
    <div className="cart-container" style={{ display: 'block' }}>
      <div className="cart-box">
        <div className="cart-nav" style={{position:'sticky',top:'0',zIndex:'9999999999'}}>
          <div className="left-part">
            <div className="back-btn" onClick={()=>setShowCart(false)}>
              <svg
              
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <p
              style={{
                fontWeight: "600",
                fontSize: "1rem",
                fontHeight: "1.5rem",
                color: "rgba(15,23,34,1)",
                marginLeft: "1rem",
              }}
            >
              Your Cart
            </p>
          </div>
          <div className="cancel-btn" onClick={clearCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-white stroke-[2]"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "2rem",
            marginTop:'0.6rem'
          }}
        >
          {cart.map((item) => {
             
            return (
              <AddedItem
                key={item.customKey}
                customKey={item.customKey}
                title={item.title}
                color={item.color}
                shadow={item.shadow}
                price={item.price}
                img={item.img}
              />
            );
          })}
         
        
        </div>
     <div className="bill" style={{position:'absolute',bottom:'0',width:'100%'}}>
     <div style={{display:'flex', justifyContent:'space-between',alignItems:'center',width:'100%'}}> <span>Total Cart Price:</span> <span>{calculateTotalPrice()}</span> </div>
     <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}} > Taxes and Shipping Will Calculate At Shipping</div>
     <button style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}>check out</button>
     </div>
      </div>
    </div>
  );
};
