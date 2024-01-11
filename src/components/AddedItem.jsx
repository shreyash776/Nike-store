import React ,{useState}from 'react'

const AddedItem = (props) => {
    const {title,color,shadow,price,img}=props;
    const [quantity, setQuantity] = useState(1); 
  
    const incrementQuantity = () => {
        setQuantity(quantity + 1);}
    
        const decrementQuantity = () => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }
         
  return (
    <>
        <div className='added-item-box' style={{ marginTop:'10px',width:'90%',height:'6rem', display:'flex',justifyContent:'space-around',alignItems:'center'}}>
          <div style={{boxShadow:shadow,width:'60px',height:'40px'}}>
            <div style={{backgroundColor:color,backgroundRepeat:'no-repeat',backgroundImage:`url(${img})`,backgroundSize:'contain',width:'60px',height:'40px'}}>
            
            </div>
          </div>
          <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <h2>{title}</h2>
            <h5>Running Shoes</h5>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-around'}}>
            <p>Qty:</p> <button onClick={incrementQuantity} style={{width:"20px",height:'20px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>

            </button>
           <p style={{width:'22px', height:'20px', backgroundColor:'white',textAlign:'center'}}> {quantity}</p>
        <button onClick={decrementQuantity} style={{width:"20px",height:'20px'}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
</svg>

        </button>
       
            </div>
          </div>
          <div> 
          <p>delete</p>
          </div>
        </div>
    </>
  )
}

export default AddedItem
