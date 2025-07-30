import {  useContext } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from 'react-router-dom';
import { AppContext } from "../context/AppProvider";

function Nav() {
const { cartItems, inputValue, searchProduct } = useContext(AppContext);

  return (
    <section className="sticky top-0 z-50 bg-black text-white">
      <section className='py-6 px-20 flex items-center justify-between'>
    <section className="">
      <h1><Link to="/" className="text-2xl logo">shopR</Link></h1>
    </section>

    <div className="flex w-full max-w-sm items-center gap-2">
      <Input ref={inputValue} type="email" className="bg-white text-black" placeholder="Search.." />
      <Button onClick={searchProduct} type="submit" variant="outline" className="bg-slate-200 text-black border-none">
        Search
      </Button>
    </div>


    <section className="flex items-center gap-12">
    <div className='relative cursor-pointer'>
    <Link to='/cart'><i className='bx bx-cart text-3xl'></i></Link> 
    <h4 className='absolute top-0 left-5 text-base bg-red-600 px-2 rounded-full'>{cartItems.length}</h4>
    </div>
      <button className="text-lg bg-white text-black py-2 px-6 rounded" type="button"><Link to='/login'>Login</Link></button>
      </section>
      </section>
  </section>
  )
}

export default Nav
