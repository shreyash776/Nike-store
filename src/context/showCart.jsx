
import React, { createContext, useContext, useState } from 'react'

export const ShowCartContext=createContext();


export const ShowCartProvider = ({children}) => {
    const [showCart,setShowCart]=useState(false)
  return (
    <ShowCartContext.Provider value={{showCart,setShowCart}}>
       {children}
    </ShowCartContext.Provider>
  )
}
