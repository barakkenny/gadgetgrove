import { useState, useEffect} from 'react';
import { gadgetData } from './data';
import { useParams } from 'react-router-dom';
import {samsungTv} from './data'


const useProductDetails = (data, type) => {
    const [selectedProduct, setSelectedProduct] = useState(gadgetData); 
    const [diffProduct, setDiffProduct] = useState(samsungTv)

  const { productId } = useParams(); 

  useEffect(() => {
    if (type === 'gadget') {
      const product = data.find(item => item.id === parseInt(productId));
      setSelectedProduct(product);
    } else if (type === 'tv') {
      const product = data.find(item => item.id === parseInt(productId));
      setSelectedProduct(product);
    }
  }, [productId, data, type]);

  return selectedProduct
}

export default useProductDetails

// const useProductDetails = (data, type) => {
//   const [selectedProduct, setSelectedProduct] = useState(null); // Set initial state to null
//   const { productId } = useParams(); // Get the productId from the URL

//   useEffect(() => {
//     if (type === 'gadget') {
//       const product = data.find(item => item.id === parseInt(productId)); // Parse the productId as an integer
//       setSelectedProduct(product || null); // If product is found, set it, otherwise set to null
//     } else if (type === 'tv') {
//       const product = data.find(item => item.id === parseInt(productId));
//       setSelectedProduct(product || null);
//     }
//   }, [productId, data, type]);

//   return selectedProduct;
// };

// export default useProductDetails