import { useEffect, useState } from 'react';
import useProductDetails from "@/utils/useProductDetails";
import {gadgetData} from '@/utils/data'
import {motion, useSpring} from 'framer-motion'
import {useParams} from 'react-router-dom'

const BuyNow = () => { 
  const [displayProduct, setDisplayProduct] = useState([]);
  const productDetails = useProductDetails(gadgetData); 
  const params = useParams()
  console.log(params)

  // console.log(productDetails)
 useEffect(() => {
  if (productDetails && productDetails.productDetailsImages) {
    setDisplayProduct(productDetails.productDetailsImages);
  }
}, [productDetails]);

  // if (!productDetails) return <div>No product here</div>;
  // if (error) return <div>Error: {error.message}</div>;
 const items = ['item 1','item 2','item 3','item 4']
const variant = {
  hidden: {opacity: 0},
  visible: {opacity: 1}
}
  return (
    <motion.section initial='hidden' animate='visible' transition={{staggerChildren: 0.5, duration: 3}}>
      {/* <img src={displayProduct.image} alt="" /> */}
      {productDetails.name}
    
    {items.map((item, index)=> (
      <motion.button initial={{opacity: 0}}
      variants={variant}
      className='m-4 p-4 bg-blue-500' key={index}>{item}</motion.button>
    ))}
    </motion.section>
  );
};

export default BuyNow;
