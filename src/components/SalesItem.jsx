import React, { useContext } from 'react'
import ItemText from './ItemText'
import { CartContext } from '../context';

const SalesItem = (props) => {
    const { title, price, rating,img,color,shadow } = props
  const {cart,setCart}=useContext(CartContext);
  return (
    <> 
     <div className='shoe-card' style={{boxShadow: shadow,background:color}}>
          <ItemText  
            title={title}
            description="MEN Running Shoes"
            price={price}
            rating={rating}
            img={img}
            color={color}
            shadow={shadow}
           

          />
       <div className='card-img' style={{backgroundImage:`url(${img})`,}}></div>
       <h1></h1>
     </div>

    </>
  )
}

export default SalesItem
