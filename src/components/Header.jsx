import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <section className="header__container">
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
    <i className='bx bx-cart'></i>
        <button className="contact" type="button"> <i className='bx bx-phone-call'></i>contact</button>
      </section>
      </section>
  </section>
  )
}

export default Header
