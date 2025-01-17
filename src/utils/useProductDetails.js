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