import React from 'react'
import ItemText from './ItemText'

const SalesItem = (props) => {
    const { title, price, rating,img,key,color,shadow } = props
  return (
    <>
     <div className='shoe-card' style={{boxShadow: shadow,background:color}}>
          <ItemText  
            title={title}
            description="MEN Running Shoes"
            price={price}
            rating={rating}
          />
       <div className='card-img' style={{backgroundImage:`url(${img})`,}}></div>
       <h1></h1>
     </div>

    </>
  )
}

export default SalesItem
