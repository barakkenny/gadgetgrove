import { useState, useEffect} from 'react';
import { gadgetData } from '../utils/data';
import { Link } from 'react-router-dom';
import './Products.css'

function Product() {
  const [products, setProducts] = useState(gadgetData);

  useEffect(() => {
    fetchGadgetData();
  }, []);


  function fetchGadgetData() {
    setProducts(gadgetData); 
  }

  return (
    <section className='products__card__container'>
      {products.map((product) => {
              const { id, name, image } = product;            
              return (
                <section className="products__card__content" key={id}>
                  <img className="products__image" src={image} alt="" />
                  <section className="product__content">
                    <Link to={`/products/${id}`}>{name.slice(0, 20)}</Link>
                   
                  </section>
                </section>
              )
            })
          }
    </section>
  )
}

export default Product
