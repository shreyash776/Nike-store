import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css';
const Header = () => {
  return (
    <>
     <div className='header-box'>
     <div className='cliped-back'></div>
     <nav className='nav-box'> 
     <div className='nav-content'>
     <div className='logo'></div>
     <div className='icon-box'>
        <div className='search'><i className="fa-solid fa-magnifying-glass fa-lg"></i></div>
        <div className='like'><i className="fa-regular fa-heart fa-lg"></i></div>
        <div className='cart'><i className="fa-brands fa-shopify fa-lg"></i></div>
     </div>
     </div>
     </nav>
      <div className='hero-section'>
      <div className='heading'>
            <h1 className='head'>Play With Electric Nike</h1>
            <h1 className='head'>Adapt 2.0 Sneakers</h1>
            <button className='explore-btn'>Explore Store</button>
        </div>

       <div className='hero-content'>
       <div className='videos'></div>
     <div className='shoe'> </div>
      <div className='media-icons'></div>
       </div>
      </div>
     </div>


    </>
  )
}

export default Header
