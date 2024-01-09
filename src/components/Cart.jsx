import React,{useState,useEffect} from 'react'
const Cart = (props) => {
    const{display,key} = props;
    const [cartDisplay, setCartDisplay] = useState(display);
    useEffect(() => {
      setCartDisplay(display);
    }, [display]);
  

    const manageCart=()=>{
        setCartDisplay('none')
    }

    console.log(`back:${cartDisplay}`);
  return (
    <div className='cart-container' style={{display:cartDisplay}}>
         < div className='cart-box' >
           <div className='cart-nav'>
           <div className='left-part'>
           <div className='back-btn' onClick={manageCart}  >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" ><path fillRule="evenodd" d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z" clipRule="evenodd"></path></svg>
             
            </div>
                <p style={{fontWeight:'600',fontSize:'1rem',fontHeight:'1.5rem',color:'rgba(15,23,34,1)'}}>Your Cart</p>
            </div>
           <div className='cancel-btn' >
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-white stroke-[2]"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd"></path></svg>
           </div>
           </div>
         </div>
  
    </div>
  )
}

export default Cart
