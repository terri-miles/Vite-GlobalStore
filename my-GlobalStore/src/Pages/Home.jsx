import React from 'react'
import { Carousel, Products } from '../Components/PRODUCTS';
import Product from '../Components/Product'



function Home() {
  return (
    <div className='mx-16 my-10'>
        <img src={Carousel[1].carImage} className='block mx-auto w-[800px] h-[250px] object-center rounded'/>
        <h1 className='text-2xl font-bold mt-14'>Flash Sales &#128640;&#129512;&#128165;</h1>
        <div className='grid grid-cols-3 mt-8 gap-6'>
            {Products.map(product => (
                <Product key={product.id} data={product}/>
            ))}
        </div>
    </div>
  )
}

export default Home