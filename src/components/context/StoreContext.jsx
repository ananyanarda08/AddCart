import { createContext, useEffect } from "react";
import { food_list } from "../../assets/assets";
import { useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider =(props)=>{

    const[cartItems, setCartItems]=useState({});
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    // Remove item from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCartItems = { ...prev };
            if (newCartItems[itemId] > 1) {
                newCartItems[itemId] -= 1;
            } else {
                delete newCartItems[itemId];
            }
            return newCartItems;
        });
    };

    useEffect(()=>{
        console.log(cartItems);
    },[cartItems])

    const contextValue={
         food_list,
         cartItems,
         setCartItems,
         addToCart,
         removeFromCart
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}    
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;