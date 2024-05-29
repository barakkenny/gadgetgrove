import { useState, useEffect} from 'react';
import { gadgetData } from './data';
import { useParams } from 'react-router-dom';

const useProductDetails = () => {
    const [product, setProduct] = useState(gadgetData); 

  const { productId } = useParams(); 

  useEffect(() => { 
    const selectedProduct = gadgetData.find(item => item.id === parseInt(productId));
    setProduct(selectedProduct);
  }, [productId]);

  return product;
}

export default useProductDetails