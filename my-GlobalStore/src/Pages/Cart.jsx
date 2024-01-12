import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Utils/GlobalContext';
import { Products } from '../Components/PRODUCTS';
import CartItem from '../Components/CartItems'
import { useNavigate } from 'react-router-dom'

function Cart() {
    const { cartItems, getTotalCartAmount } = useContext(GlobalContext)
    const navigate = useNavigate();
    const[totalAmount, setTotalAmount] = useState(getTotalCartAmount())


    const HandleClick = () =>{
        navigate('/');
    }
  return (
    <div className='mt-8 mx-auto'>
        <h1 className='text-3xl font-semibold text-center'>Your Cart Items</h1>
        <div>
            {Products.map((product) => {
                if(cartItems[product.id] !==0){
                    return <CartItem key={product.id} data={product} />
                }
            })}
        </div>
       {totalAmount > 0 ? 
         <div className='mx-auto mt-8 mb-10 w-[300px]'>
         <p>Subtotal: <span className='text-[15px] font-bold'>${totalAmount}</span></p>
         <div className='mx-auto mt-4'>
             <button className='bg-black text-white py-2 px-4 text-[13px] font-medium rounded mr-4' onClick={HandleClick}>Continue Shopping</button>
             <button className='bg-black text-white py-2 px-10 text-[13px] font-medium rounded'>Checkout</button>
         </div>
     </div> : <h1 className='text-[20px] text-center text-gray-400 mt-4'>Your cart is empty</h1>   
    }
    </div>
  )
}

export default Cart