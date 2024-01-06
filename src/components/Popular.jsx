import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ItemText from './ItemText';
const Popular = () => {
  return (
  <div className='popular-box'>
     <div className='popular-head'> <div><h1 >Popular Sales</h1></div></div>
     <div className='popular-items'>
        <div className='popular1 p-item'>
        <ItemText
        title="Nike Addapt BB 2.0"
        description="MEN Running Shoes"
        price={370}
        rating={4.9}
      />
         <div className='popular-shoe1'></div>
        </div>

        <div className='popular2 p-item' >
        <ItemText
        title="Nike Martine Rose"
        description="MEN Running Shoes"
        price={350}
        rating={3.5}
      />
         <div className='popular-shoe2'></div>
        </div>
        <div className='popular3 p-item'>
        <ItemText
        title="Nike Smart Shoe 2.0"
        description="MEN Running Shoes"
        price={300}
        rating={4.7}
      />
         <div className='popular-shoe3'></div>
        </div>
     </div>
  </div>
  )
}

export default Popular
