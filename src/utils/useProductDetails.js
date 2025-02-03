import { useState, useEffect} from 'react';
import { gadgetData } from './data';
import { useParams } from 'react-router-dom';
import {samsungTv} from './data'


// const useProductDetails = (data, type) => {
//   const [selectedProduct, setSelectedProduct] = useState(null); // Initialize as null
//   const { productId } = useParams(); // Get productId from the URL

//   useEffect(() => {
//     if (!data || !productId) return; // Early return if data or productId is missing

//     // Find the product based on productId
//     const product = data.find((item) => item.id === parseInt(productId));

//     if (product) {
//       setSelectedProduct(product); // Set the product if found
//     } else {
//       console.error(`No product found with ID: ${productId}`); // Log an error if no product is found
//       setSelectedProduct(null); // Reset to null if no product is found
//     }
//   }, [productId, data]); // Add data and productId as dependencies

//   return selectedProduct; // Return the selected product
// };

// export default useProductDetails;

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