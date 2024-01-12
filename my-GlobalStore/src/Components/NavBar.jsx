import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Utils/GlobalContext';

function Navbar() {
  const { getCartAmount } = useContext(GlobalContext);
  const [totalItems, setTotalItems] = useState(getCartAmount());
  return (
    <>
        <div className='bg-sky-800 py-4 px-16 flex justify-between items-center'>
        <Link to='/'><div className=' text-white text-2xl'><b>Global</b><span>Store</span><i className="ri-store-3-line ml-1"></i></div></Link>
            <div className='flex text-white text-2xl relative'>
                <Link to='/'><p className='mr-4'>Shop</p></Link>
                <Link to='/cart'><p><i className="ri-shopping-cart-fill"></i></p></Link>
                <p className='absolute text-[9px] flex justify-center items-center font-bold right-[-15px] top-[-12px] bg-red-600 w-[26px] h-[28px] rounded-full'>{totalItems}</p>
            </div>
        </div>
    </>
  )
}

export default Navbar