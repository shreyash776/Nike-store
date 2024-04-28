import  {useState,useEffect, useContext } from "react"; 
import { CartContext } from "../context";
import AddedItem from "./AddedItem";

export const Cart = (props) => {
  const { cart, setCart } = useContext(CartContext);  
  const { setShowCart } = props;
  const [shoesArray,setShoesArray]=useState([])
  
 
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  
 
  console.log("localstore:",shoesArray)

  const calculateTotalPrice = () => {
    if(cart&& cart.length >0){
      const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
      return totalPrice;
    }
   
  }
  

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
                display:"flex",
                justifyContent:"space-around",
                alignItems:'center',
                width:'10rem'
              }}
            >
              Your Cart <span style={{backgroundColor:'black',color:'white',minWidth:'3rem',display:'flex',alignItems:'center',justifyContent:"center",borderRadius:'6px',padding:'3px 4px 3px 4px'}}>({cart?.length||0} Items )</span>
            </p>
          </div>
          <div className="cancel-btn" 
          onClick={clearCart}
          >
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
          {  cart &&cart.map((item) => {
             
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
     <div className="bill" style={{position:'sticky',top:'100%',width:'100%',padding:'0.5rem 1.25rem 0.5rem 1.25rem',backgroundColor:'white',opacity:'1'}}>
     <div style={{display:'flex', justifyContent:'space-between',alignItems:'center',maxWidth:'95%',color:'#0F172A',fontSize:'16px',fontWeight:"600",lineHeight:'2rem'
     }}> <span>SUBTOTAL:</span> <span style={{backgroundColor:'black',color:'white',minWidth:'3rem',display:'flex',alignItems:'center',justifyContent:"center",borderRadius:'4px'}}>
    $ {calculateTotalPrice()}</span> </div>
     <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'95%',color:'#0F172A',fontSize:'16px',fontWeight:'300'}} > Taxes and Shipping Will Calculate At Shipping</div>
     <div style={{width:'100%', height:'auto',display:'flex',justifyContent:'center',alignItems:'center' }}>
     <button style={{display:'flex',justifyContent:'center',alignItems:'center',width:'70%',backgroundColor:'black',color:'white',borderRadius:'4px',height:"34px",
     fontSize:'18px',fontWeight:"400",lineHeight:'1.5rem'}}>Check out</button>
     </div>
     </div>
      </div>
    </div>    
  );
};
