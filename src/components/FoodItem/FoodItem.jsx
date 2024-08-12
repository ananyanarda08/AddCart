// import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {
console.log(id,);
    // const [itemCount, setItemCount]=useState(0)
    const{cartItems, addToCart, removeFromCart} = useContext(StoreContext);
    const isInCart = cartItems.hasOwnProperty(id); 

    return (
        <div className='food-Item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt="" />
                {!isInCart ? (
                    <img
                        className="add"
                        onClick={() => addToCart(id)}
                        src={assets.add_icon_white}
                        alt=''
                    />
                ) : (
                    <div className='food-item-counter'>
                        <img
                            onClick={() => removeFromCart(id)}
                            src={assets.remove_icon_red}
                            alt=''
                        />
                        <p>{cartItems[id]}</p> {/* Display the quantity */}
                        <img
                            onClick={() => addToCart(id)}
                            src={assets.add_icon_green}
                            alt=''
                        />
                    </div>
                )}
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_stars} alt="" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    );
};

export default FoodItem
