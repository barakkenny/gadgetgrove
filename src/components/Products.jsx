import { useState, useEffect} from 'react';
import { gadgetData } from '../utils/data';
import { Link } from 'react-router-dom';
import './Products.css'
import Header from './Header';
import { LuTv } from "react-icons/lu";
import Phones from './sidebar-tabs/Phones';
import Television from './sidebar-tabs/Television';
import AllProduct from './AllProduct';

function Product() {
  const [products, setProducts] = useState(gadgetData);
  const [filteredProducts, setFilteredProducts] = useState(gadgetData);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(null);
  const [activePage, setActivePage] = useState('allProduct')
  // const [productsClick, setProductsClick] = useState(null);

  useEffect(() => {
    function fetchGadgetData() {
      setProducts(products); 
    }

    fetchGadgetData();
  },);

  // const handleProductChange = (index)=> {
  //   setProductsClick(index)
  // }

  
    const handleSearch = ()=> {
      const searchProducts = products.filter(item => 
        item.name.toLowerCase().includes(search));
      setFilteredProducts(searchProducts)
    }


  return (
    <section>
      <Header />
      <section className='search__container'>

      <section className='w-[15%] pt-12 pl-14 border-2 h-max'>
        <section className=' cursor-pointer'>
          <div className='flex items-center gap-6'>
          <LuTv />
          <h3 onClick={() => setActiveTab("television")}>Television</h3>
          </div>
        </section>

        <section className='pt-4 cursor-pointer'>
        <div className='flex items-center gap-6'>
          <LuTv />
          <h3 onClick={() => setActiveTab("phone")}>Phones</h3>
          </div>
        </section>

      </section>
     
      <section className='w-[80%] mt-8'>
        <section className='flex justify-center'>
      <input 
      className='search'
      type="text"
      onChange={(e)=> setSearch(e.target.value)}
      value={search}
      />
      <i onClick={()=> setSearch("")} className={ search === "" ? 'clear__search__text' :'bx bx-x'}></i>
      
       <button onClick={handleSearch} className='search__btn' type='button'>Search</button>
       </section>

        {/* PRODUCT CATEGORY */}
      <section>
       {activeTab === 'television' && <Television activePage={activePage} setActivePage={setActivePage} /> }
          
       {activeTab === 'phone' && <Phones activePage={activePage} setActivePage={setActivePage} /> }
       </section>

     {activePage === 'allProduct' && (
      <section className='products__card__container'>
      {filteredProducts.map((product) => {
              const { id, name, image } = product;            
              return (
                <section className="products__card__content" key={id}>
                  <AllProduct id={id} name={name} image={image}/>
                </section>
              )
            })
          }
          </section>) 
    }
          </section>
          </section>
    </section>
  )
}

export default Product
