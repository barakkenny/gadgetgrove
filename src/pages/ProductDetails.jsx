import {useEffect, useState, useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
// import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { AppContext } from '@/context/AppProvider';

const ProductDetails = () => {
  const [products, setProducts] = useState({})
  const {id} = useParams();
  const {count, setCount, cartItems, setCartItems} = useContext(AppContext)
  const navigate = useNavigate()

  useEffect(() => {
      fetchProducts();
  },[id])

    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cartItems))
    },[cartItems])
  
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

    const addToCart = () => {
      if(count > 0){
        setCartItems((prev) => [...prev, products]);
        console.log('Item added', cartItems)
      
    }else{
      console.log('add at least one item')
    }
  }
    const itemCountIncrement = () => {
       setCount((prev) => prev + 1)
    }

    const itemCountDecrement = () => {
       setCount((prev) => prev - 1)
    }

    const buyNowPage = () => {
      navigate('/buy-now')
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
      <button onClick={itemCountDecrement} className='border-2 font-bold text-2xl px-3 pb-1 bg-slate-100'>-</button>
      <h1 className='text-2xl font-semibold'>{count}</h1>
      <button onClick={itemCountIncrement} className='border-2 font-bold text-2xl px-3 pb-1 bg-slate-100'>+</button>
     </div>

     <div className='flex items-center gap-10 mt-10'>
      <button onClick={buyNowPage} className='font-medium border-2 border-black px-7 py-3 text-md text-black'>Buy Now</button>
      <button onClick={addToCart} className='bg-black font-medium text-white px-7 py-3'>Add to Cart</button>
     </div>
     </div>
    </div>
  )
}


export default ProductDetails
