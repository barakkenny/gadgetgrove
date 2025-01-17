import { useSelector } from "react-redux";
import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
const cartItems = useSelector((store) => store.cart.items)

  return (
    <section className="header__container sticky top-0 z-50">
      <section className='header__content'>
    <section className="logo__container">
      <h1><Link to="/" className="logo">GadgetGrove</Link></h1>
    </section>

    <section className="nav__items">
      <ul>
        <li><Link className='nav-links' to="/">Home</Link></li>
        <li><Link className='nav-links' to="/products">Products</Link></li>
        <li><Link className='nav-links' to="/offers">Offers</Link></li>
        <li><Link className='nav-links' to="/contact">Contact</Link></li>
      </ul>
    </section>

    <section className="nav__items__two">
    <div className='relative cursor-pointer'>
    <Link to='/cart'><i className='bx bx-cart'></i></Link> 
    <h4 className='absolute top-0 left-5 text-base bg-red-600 px-2 rounded-full'>{cartItems.length}</h4>
    </div>
      <button className="login" type="button"><Link to='/login'>Login</Link></button>
      </section>
      </section>
  </section>
  )
}

export default Header
