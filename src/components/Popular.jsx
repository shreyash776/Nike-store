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
        img='/nike-adapt-bb-7f2a1cda.png'
        color="linear-gradient(.2deg, rgba(60, 133, 222, 1) 4.8%, rgb(27, 76, 224) 85.5%)"
        shadow="2px 8px 10px rgba(60, 133, 222, 0.9)"
        customKey="13"
      />
         <div className='popular-shoe1 pointer'></div>
        </div>

        <div className='popular2 p-item ' >
        <ItemText
        title="Nike Martine Rose"
        description="MEN Running Shoes"
        price={350}
        rating={3.5}
        img='/nike-air-red-70d9fd5b.png'
        color="linear-gradient(to right, #f43f5e, #ef4444)"
        shadow="2px 8px 10px rgba(244, 63, 94, 0.9)"
        customKey="14"
      />
         <div className='popular-shoe2 pointer'></div>
        </div>
        <div className='popular3 p-item'>
        <ItemText
        title="Nike Smart Shoe 2.0"
        description="MEN Running Shoes"
        price={300}
        rating={4.7}
        img="/nike-adapt-bb-smart-6854356d.png"
        color="linear-gradient(to right, #8b5cf6, #6366f1)"
        shadow="2px 8px 10px rgba(139, 92, 246, 0.9)"
        customKey="15"
      />
         <div className='popular-shoe3 pointer'></div>
        </div>
     </div>
  </div>
  )
}

export default Popular
