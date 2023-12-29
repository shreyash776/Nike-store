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
        <div className='search'><i class="fa-solid fa-magnifying-glass fa-lg"></i></div>
        <div className='like'><i class="fa-regular fa-heart fa-lg"></i></div>
        <div className='cart'><i class="fa-brands fa-shopify fa-lg"></i></div>
     </div>
     </div>
     </nav>
        <div className='heading'>
            <h1>Play With Electric Nike</h1>
            <h1>Adapt 2.0 Sneakers</h1>
        </div>

     <div className='shoe'> </div>

     </div>


    </>
  )
}

export default Header
