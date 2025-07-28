import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

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
      <h1 className='font-bold text-2xl'>{products.title.toUpperCase()}</h1>
      <h3>{products.rating?.rate}</h3>
     <h2 className='w-96'>{products.description}</h2>
     </div>
    </div>
  )
}


export default ProductDetails
