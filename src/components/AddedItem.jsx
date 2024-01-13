import React ,{useState,useContext}from 'react'
import {CartContext} from '../context';

const AddedItem = (props) => {
  const {cart,setCart}=useContext(CartContext);
    const {title,color,shadow,price,img,customKey}=props;
    const [quantity, setQuantity] = useState(1); 
  
    const incrementQuantity = () => {
        setQuantity(quantity + 1);}
    
        const decrementQuantity = () => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }
          const deleteItem = (id) => {
            setCart((prevCart) => prevCart.filter((item, index) => item.customKey!== (customKey )));
          };
        
         
  return (
    <>
        <div className='added-item-box' style={{ marginTop:'10px',width:'90%',height:'6rem', display:'flex',justifyContent:'space-around',alignItems:'center',backgroundColor:'white',borderRadius:'6px'}}>
          <div style={{position:'relative',background:color,boxShadow:shadow,width:'130px',height:'80px',borderRadius:'4px'}}>
            <div  className="pointer"style={{position:'absolute',backgroundRepeat:'no-repeat',backgroundImage:`url(${img})`,backgroundSize:'contain',width:'120px',height:'70px',top:'0',right:'3px'}}>
            
            </div>
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <h2>{title}</h2>
            <h5>Running Shoes</h5>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
            <p>Qty:</p> <button onClick={incrementQuantity} style={{width:"20px",height:'20px',backgroundColor:'black',color:'white',fontWeight:'500', borderRadius:"3px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

            </button>
           <p style={{width:'22px', height:'20px', backgroundColor:'white',textAlign:'center'}}> {quantity}</p>
        <button onClick={decrementQuantity} style={{width:"20px",height:'20px',backgroundColor:'black',color:'white',fontWeight:'500', borderRadius:"3px"}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
</svg>

        </button>
       
            </div>
          </div>
          <div className='delete' style={{height:'70%',width:'25px',display:'flex',flexDirection:'column-reverse'}}> 
          <svg onClick={()=>deleteItem(customKey)}
           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

          </div>
        </div>
    </>
  )
}

export default AddedItem
