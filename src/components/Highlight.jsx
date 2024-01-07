import React from 'react'

const Highlight = () => {
  return (
   <>
      
   <div className='highlight-container'>
    <div className='H-img-container'><div className='highlight-img'></div></div>
    <div className='highlight-text'>
      <h1 style={{ backgroundImage:' linear-gradient(to top right, #3b82f6, #0ea5e9)',backgroundClip:' text',color: 'transparent',
             fontSize: '2.25rem', lineHeight: '2.5rem',fontWeight:'700',}}>HIGHLIGHTS</h1>
      <h1 style={{ fontSize:'3rem',lineHeight:'1',fontWeight:'700', textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',color: 'rgba(15, 23, 42, 1)'}}>NIKE AIR WITH LIMITLESS CHOICES</h1>
     
    <div className='hp-text'>
    <p style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',color: 'rgba(15, 23, 42, 1)',marginTop: '1rem',fontSize:'1.2rem',fontWeight:'300', marginBottom: '1rem'}}>
     Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.
     </p>
    </div>
    <div className='btn'> <a href="//www.nike.com/in/launch/t/nocta-hot-step-black-gold" target="_blank">
     <button type='button' style={{ color: 'rgba(241, 245, 249,1)',paddingTop:'0.375rem',paddingBottom:'0.375rem', backgroundColor: `rgba(15, 23, 42, 1)`
     , paddingRight:'1.7rem',paddingLeft:'1.7rem',borderRadius:'0.25rem',
  transition: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)',fontSize:'100%', boxShadow: '0 4px 6px -1px rgba(15, 23, 42, 1), 0 2px 4px -2px rgba(15, 23, 42, 1)',}}>Explore More</button>
     </a></div>
     </div>
   </div>
   </>
  )
}

export default Highlight
