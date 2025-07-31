import {  useContext } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from "../context/AppProvider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


function Nav() {
const { cartItems, inputValue, searchProduct } = useContext(AppContext);
const navigate = useNavigate()

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
    {/* <div className='relative cursor-pointer'>
    <Link to='/cart'><i className='bx bx-cart text-3xl'></i></Link> 
    <h4 className='absolute top-0 left-5 text-base bg-red-600 px-2 rounded-full'>{cartItems.length}</h4>
    </div> */}
    <div className='relative cursor-pointer'>
    <DropdownMenu>
  <DropdownMenuTrigger><Link to='/cart'><i className='bx bx-cart text-3xl'></i></Link></DropdownMenuTrigger>
  <h4 className='absolute top-0 left-5 text-base bg-red-600 px-2 rounded-full'>{cartItems.length}</h4>
  <DropdownMenuContent className='w-80'>
    {cartItems.map((cart) => (
      <div className="flex mt-2 items-center gap-5" key={cart.id}>
        <img className="w-10" src={cart.image}/>
        <div>
          <h2 className="font-semibold">{cart.title}</h2>
          <h3>${cart.price}</h3>
        </div>
      </div>
    ))}
    <button onClick={()=> navigate('/cart')}  className="bg-black text-white w-full py-2 rounded">View Details</button>
  </DropdownMenuContent>
</DropdownMenu>
</div>
      <button className="text-lg bg-white text-black py-2 px-6 rounded" type="button"><Link to='/login'>Login</Link></button>
      </section>
      </section>
  </section>
  )
}

export default Nav
