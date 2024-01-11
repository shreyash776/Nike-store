import React from 'react'
import SalesItem from './SalesItem'
const Sales = () => {
  return (
   <>
 <div className='sales-container'>
  <div className='sales-head'>  <h1>Top Rated Sales</h1></div>

  <div className='sales-grid'>
      <SalesItem 
        title="Nike Air Low Premium"
        description="MEN Running Shoes"
        price="360"
        rating="4.3"
      
        img="/product7-c894b193.png"
        shadow="0 10px 15px -3px #3b82f6, 0 4px 6px -4px #3b82f6"
        color= "linear-gradient(to bottom, #0284c7, #4f46e5)"
      />
      <SalesItem 
        title="Nike Air Force Green"
        description="MEN Running Shoes"
        price="380"
        rating="4.7"
      
        shadow='0 10px 15px -3px #22c55e, 0 4px 6px -4px #22c55e'
        color= 'linear-gradient(to bottom, #22c55e, #10b981)'
        img="/product2-3ffcf84e.png"
      />
       <SalesItem 
        title="Nike Addapt BB Rose"
        description="MEN Running Shoes"
        price="260"
        rating="3.7"
        
        shadow='0 10px 15px -3px #f43f5e, 0 4px 6px -4px #f43f5e'
        
        color="linear-gradient(to bottom, #eF4444, #f43f5e)"
        img="product3-60fee52b.png"
      /> 
       <SalesItem 
        title="Nike Air Premium"
        description="MEN Running Shoes"
        price="310"
        rating="4.1"
       
        shadow='0 10px 15px -3px #f59e0b, 0 4px 6px -4px #f59e0b'

        color="linear-gradient(to bottom, #f97316, #f59e0b)"
        img="/product4-19f67eab.png"
      /> 
        <SalesItem 
        title="Nike Air Premium"
        description="MEN Running Shoes"
        price="310"
        rating="4.2"
     
        shadow='0 10px 15px -3px  #eab308, 0 4px 6px -4px  #eab308'

        color="linear-gradient(to bottom, #111827 , #eab308 )"

        img="/product5-4aaff887.png"
      /> 
        <SalesItem 
        title="Nike Air Premium"
        description="MEN Running Shoes"
        price="390"
        rating="4.9"
      
        shadow='0 10px 15px -3px #06b6d4, 0 4px 6px -4px #06b6d4'

        color="linear-gradient(to bottom, #3b82f6 , #06b6d4 )"

        img="/product6-931b596e.png"
      /> 
        <SalesItem 
        title="Nike Air Premium"
        description="MEN Running Shoes"
        price="310"
        rating="4.1"
   
        shadow='0 10px 15px -3px #eab308, 0 4px 6px -4px #eab308'

        color="linear-gradient(to bottom, #eab308 ,#eab308 )"

        img="/product1-30896d49.png"
      /> 
        <SalesItem 
        title="Nike Air Premium"
        description="MEN Running Shoes"
        price="370"
        rating="4.7"
       
        color="linear-gradient(to bottom, #936550  ,#7c2d12 )"
        shadow='0 10px 15px -3px #7c2d12, 0 4px 6px -4px #7c2d12'

        img="/product9-72cd2170.png"
      /> 
        <SalesItem 
        title="Nike Air Premium"
        description="MEN Running Shoes"
        price="410"
        rating="5"
        
        color="linear-gradient(to bottom, #4338ca  ,#4338ca )"
        shadow='0 10px 15px -3px #4338ca , 0 4px 6px -4px#4338ca '

        img="/product10-61b693da.png"
      /> 
        <SalesItem 
        title="Nike Air Premium"
        description="MEN Running Shoes"
        price="310"
        rating="4.4"
      
        color="linear-gradient(to bottom, #16a34a ,#84cc16 )"
        shadow='0 10px 15px -3px #84cc16, 0 4px 6px -4px #84cc16'

        img="/product12-9ca599bd.png"
      /> 
        <SalesItem 
        title="Nike Air Premium"
        description="MEN Running Shoes"
        price="310"
        rating="4.6"
     
        color="linear-gradient(to bottom, #0f172a,#000 )"
        shadow='0 10px 15px -3px  #0f172a, 0 4px 6px -4px  #0f172a'

        img="/product11-6f2b69cc.png"
      /> 
        <SalesItem 
        title="Nike Air Premium"
        description="MEN Running Shoes"
        price="110"
        rating="2.7"
   
        color="linear-gradient(to bottom, #1e3a8a,#3b82f6 )"
        shadow='0 10px 15px -3px #3b82f6, 0 4px 6px -4px #3b82f6'

        img="/product8-746845c6.png"
      /> 


  </div>

 </div>
   
   </>
  )
}

export default Sales
