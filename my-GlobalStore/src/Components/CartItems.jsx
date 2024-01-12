import React, { useContext } from 'react'
import { GlobalContext } from '../Utils/GlobalContext';

function CartItem(props) {
    const { cartItems, addToCart, removeFromCart } = useContext(GlobalContext)
    const { id, productName, price, productImage } = props.data;
  return (
    <div className='bg-white flex py-3 px-3 rounded-lg shadow-sm mt-6 mx-auto w-[450px] h-[180px]'>
        <img src={productImage} className='w-[150px] h-[160px] object-center'/>
        <div className='mt-6 ml-4 text-left'>
            <h2>Name: <span className='font-bold text-[18px] ms-2'>{productName}</span></h2>
            <p>Price: <del className='text-sm text-gray-500 ms-2'>$1000</del> <span className='font-semibold text-[18px]'>${price}</span></p>
            <div className='flex mt-3'>
            <button className='border-2 border-gray-300 px-2 rounded' onClick={() => removeFromCart(id)}>-</button>
            <input type='text' id={cartItems[id]} className='border-gray-300 border-2 text-center w-[80px] outline-none rounded' value={cartItems[id]} onChange={() => setCartAmount()}/>
            <button className='border-2 border-gray-300 px-2 rounded' onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem