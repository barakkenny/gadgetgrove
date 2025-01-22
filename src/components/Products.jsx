import { useState, useEffect} from 'react';
import { gadgetData } from '../utils/data';
import './Products.css'
import Header from './Header';
import { LuTv } from "react-icons/lu";
import Phones from './sidebar-tabs/Phones'
import Television from './sidebar-tabs/Television';
import AllProduct from './AllProduct';
import Laptop from './sidebar-tabs/Laptop';
import Camera from './sidebar-tabs/Camera'
import SmartWatch from './sidebar-tabs/SmartWatch';

function Product() {
  const [products, setProducts] = useState(gadgetData);
  const [filteredProducts, setFilteredProducts] = useState(gadgetData);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(null);
  const [activePage, setActivePage] = useState('allProduct')
  const [showTvProduct, setShowTvProduct] = useState(false)
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
    const handleTvClick = () => {
      setActiveTab('television')
     setShowTvProduct(true)
      
    }

  return (
    <section>
      <Header />
      <section className='search__container'>

      <section className='w-[15%] flex flex-col gap-8 pt-20 pl-5 border-r-2 h-screen'>
        <section className=' cursor-pointer'>
          <div className='flex items-center gap-6'>
          <LuTv />
          <h3 onClick={ handleTvClick }>Television</h3>
          </div>
        </section>

        <section className='pt-4 cursor-pointer'>
        <div className='flex items-center gap-6'>
          <LuTv />
          <h3 onClick={() => setActiveTab("phone")}>Phones</h3>
          </div>
        </section>

        <section className='pt-4 cursor-pointer'>
        <div className='flex items-center gap-6'>
          <LuTv />
          <h3 onClick={() => setActiveTab("laptop")}>Laptop</h3>
          </div>
        </section>

        <section className='pt-4 cursor-pointer'>
        <div className='flex items-center gap-6'>
          <LuTv />
          <h3 onClick={() => setActiveTab("camera")}>Camera</h3>
          </div>
        </section>

        <section className='pt-4 cursor-pointer'>
        <div className='flex items-center gap-6'>
          <LuTv />
          <h3 onClick={() => setActiveTab("smartwatch")}>Smartwatch</h3>
          </div>
        </section>

        <section className='pt-4 cursor-pointer'>
        <div className='flex items-center gap-6'>
          <LuTv />
          <h3 onClick={() => setActiveTab("headphone")}>Headphone</h3>
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
       {activeTab === 'laptop' && <Laptop activePage={activePage} setActivePage={setActivePage} /> }
       {activeTab === 'camera' && <Camera activePage={activePage} setActivePage={setActivePage} /> }
       {activeTab === 'smartwatch' && <SmartWatch activePage={activePage} setActivePage={setActivePage} /> }
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
          </section>
          )
    }

    
          </section>
          </section>
    </section>
  )
}

export default Product
