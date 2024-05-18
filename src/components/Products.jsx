import { useState, useEffect} from 'react';
import { gadgetData } from '../utils/data';
import { Link } from 'react-router-dom';
import './Products.css'

function Product() {
  const [products, setProducts] = useState(gadgetData);
  const [filteredProducts, setFilteredProducts] = useState(gadgetData);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function fetchGadgetData() {
      setProducts(gadgetData); 
    }

    fetchGadgetData();
  }, []);

  
    const handleSearch = ()=> {
      const searchProducts = products.filter(item => 
        item.name.toLowerCase().includes(search));
        console.log(searchProducts) 
      setFilteredProducts(searchProducts)
    }

  return (
    <section>
      <section className='search__container'>
      <input 
      className='search'
      type="text"
      onChange={(e)=> setSearch(e.target.value)}
      value={search}
      />
      <p  
      onClick={()=> setSearch("")}
      className={search === "" ? 'clear__search__text': 'show__delete__icon'}>x</p>
      <button onClick={handleSearch} className='search__btn' type='button'>Search</button>
      </section>

      <section className='products__card__container'>
      {filteredProducts.map((product) => {
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
    </section>
  )
}

export default Product
