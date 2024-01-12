import React, { useContext } from 'react'
import { GlobalContext } from '../Utils/GlobalContext';

function Product(props) {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart } = useContext(GlobalContext);
    const CartItemsAmount = cartItems[id];
  return (
    <>
        <div className='bg-white rounded w-[250px] mx-auto shadow-sm'>
                    <img src={productImage} className='w-full h-[240px] object-center rounded'/>
                    <div className='flex flex-col text-center'>
                        <p className='mt-3 font-bold'>{productName}</p>
                        <p className='mt-1 font-semibold text-[16px]'>${price}</p>
                    </div>
                    <button className='mt-5 mb-8 py-1 px-6 text-xs font-semibold rounded-full mx-auto block outline hover:bg-black hover:outline-none hover:text-white' onClick={() => addToCart(id)}>Add To Cart {CartItemsAmount > 0 && <> ({CartItemsAmount}) </>}</button>
                </div>
    </>
  )
}

export default Product