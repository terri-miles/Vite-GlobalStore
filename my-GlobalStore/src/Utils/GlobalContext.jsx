import React, { createContext, useState } from 'react'
import { Products } from '../Components/PRODUCTS';

export const GlobalContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {};
    for (let i = 1; i < Products.length + 1; i++) {
        cart[i] = 0; 
    }
    return cart
}
function GlobalContextProvider( {children} ) {
    const[cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () =>{
        let totalCartAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = Products.find((product) => product.id === Number(item));
                totalCartAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalCartAmount
    }

    const getCartAmount = () => {
        let totalItems = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        } return totalItems
    }

    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    const removeFromCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
    const contextValue = {cartItems, addToCart, removeFromCart, getTotalCartAmount, getCartAmount}
  return <GlobalContext.Provider value={contextValue}>
    {children}
  </GlobalContext.Provider>
}

export default GlobalContextProvider