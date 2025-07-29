import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
// import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";

const ProductDetails = () => {
  const [products, setProducts] = useState({})
  const {id} = useParams();

  useEffect(() => {
      fetchProducts();
  },[id])
  
  const fetchProducts = async () => {
          try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          const data = await response.json();
          console.log(data)
          setProducts(data);
      }catch (error) {
          console.error('Error fetching products:', error);
      }
    } 
  return (
    <div className="mt-10 mx-20 flex gap-20">
      <div className='bg-slate-200 w-[600px] p-5'>
     <img className="w-72 bg-none m-auto" src={products.image} alt="" />
     <h2>hello</h2>
     </div>
     <div className=''>
      <h1 className='font-bold text-2xl'>{products.title}</h1>
      <div className='flex mt-4 '>
      {[1,2,3,4,5].map((star, index) => (
        <div key={index}>
          <IoIosStarOutline className={products.rating?.rate >= star ? 'text-yellow-200': ''} />
          </div>
      ))}
      </div>
      <h2 className='mt-3 font-bold text-lg'>Description: </h2>
     <h2 className='w-96'>{products.description}</h2>

     <div className='flex items-center gap-5 mt-7 '>
      <button className='border-2 font-bold text-2xl px-3 pb-1 bg-slate-100'>-</button>
      <h1 className='text-2xl font-semibold'>0</h1>
      <button className='border-2 font-bold text-2xl px-3 pb-1 bg-slate-100'>+</button>
     </div>

     <div className='flex items-center gap-10 mt-10'>
      <button className='font-medium border-2 border-black px-7 py-3 text-md text-black'>Buy Now</button>
      <button className='bg-black font-medium text-white px-7 py-3'>Add to Cart</button>
     </div>
     </div>
    </div>
  )
}


export default ProductDetails
