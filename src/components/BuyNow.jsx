import { useRef, useEffect, useState } from 'react';
import { gadgetData } from '@/utils/data';
import { useParams } from 'react-router-dom';
import useProductDetails from '@/utils/useProductDetails';
import Header from './Header';
import { useCart } from '../custom/useCart'
// import ProductDetails from './products-details/ProductDetails';

const BuyNow = () => { 
  const productDetails = useProductDetails(gadgetData, 'gadget');
  const [focus, setFocus] = useState(null)
  // const { productId } = useParams()
  // useEffect(() => {
  //   focus.current.style.color = red
  // },[])

  const obj = {name: 'kehinde'}
 

  const {itemCount} = useCart()
  // console.log(productDetails)

    // const product = productDetails.find(p => p.id === productId)

  // const product = productDetails.find(p => p.id === productId)
  // console.log(product)

  // if (!displayProduct) return <div>Loading...</div>; // Handle loading state

  return (
    <section>
      <Header /> 
      <section className='flex items-center justify-between mt-5'>
        <div className='ml-10'>
          <h1 className='text-center text-lg font-semibold'>Shipping Details</h1>
          <form className='bg-[#eeeef1] mt-14 p-5'>
            <h1>1. CUSTOMER ADDRESS</h1>
            <section className='mt-7'>
            <div className='flex gap-8'>
            <div className='flex flex-col'>
            <label className='text-sm' htmlFor="first name">First Name</label>
            <input className='focus:border-teal-500 outline-none border-2 border-black w-96 h-12 p-3 rounded-sm' type="text" placeholder='Enter your First Name' />
            </div>
          <div className='flex flex-col'>
            <label className='text-sm' htmlFor="first name">Last Name</label>
            <input className='focus:border-teal-500 outline-none border-2 border-black w-96 h-12 p-3 rounded-sm' type="text" placeholder='Enter your First Name' />
            </div>
            </div>

            <div className='flex gap-8 mt-8'>
            <div className='flex flex-col'>
            <label className='text-sm' htmlFor="first name">Phone Number</label>
            <input className='focus:border-teal-500 outline-none border-2 border-black w-96 h-12 p-3 rounded-sm' type="text" placeholder='Enter your First Name' />
            </div>
          <div className='flex flex-col'>
            <label className='text-sm' htmlFor="first name">Additional Phone Number</label>
            <input className='focus:border-teal-500 outline-none border-2 border-black w-96 h-12 p-3 rounded-sm' type="text" placeholder='Enter your First Name' />
            </div>
            </div>

            <div className='mt-8'>
            <label htmlFor="additional-info">Additional Information</label>
            <input className='focus:border-teal-500 outline-none border-2 border-black w-full h-12 p-3 rounded-sm' type="text" placeholder='Enter Additional Information' />
            </div>
            </section>
          </form>
        </div>

        <div>
        {/* <img src={productDetails.productDetailsImages.imageOne} alt="" /> */}
        <h3>{productDetails.name}</h3>
        <h4>${productDetails.price}</h4>
        <h4>Quantity - {itemCount}</h4>

        {Object.keys(obj).map(o => (
          console.log(obj[o].toUpperCase())
        ))}
        </div>
      </section>
    </section>
  )
};

export default BuyNow;
